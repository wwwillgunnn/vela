let started = false;
let rafId = 0;
let buffer: HTMLCanvasElement | null = null;
let canvasElement: HTMLCanvasElement | null = null;
let lastUploadW = 0;
let lastUploadH = 0;

function ensureBuffer(w: number, h: number): HTMLCanvasElement {
  if (!buffer) buffer = document.createElement("canvas");
  if (buffer.width !== w || buffer.height !== h) {
    buffer.width = w;
    buffer.height = h;
    lastUploadW = 0;
    lastUploadH = 0;
  }
  return buffer;
}

function drawBackground() {
  if (!window.Container) return;

  const w = Math.max(1, Math.round(window.innerWidth));
  const h = Math.max(1, Math.round(window.innerHeight));
  const source = ensureBuffer(w, h);

  if (!canvasElement) {
    canvasElement = document.querySelector<HTMLCanvasElement>(".iridescence-canvas");
  }

  const ctx = source.getContext("2d");
  if (canvasElement && ctx) {
    ctx.drawImage(canvasElement, 0, 0, w, h);
  }

  for (const instance of window.Container.instances) {
    if (instance.isNestedGlass) continue;
    if (!instance.element.isConnected) continue;

    const refs = instance.gl_refs;
    const gl = refs?.gl;
    const texture = refs?.texture;
    if (!gl || !texture || !refs) continue;

    gl.bindTexture(gl.TEXTURE_2D, texture);
    if (w !== lastUploadW || h !== lastUploadH) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      lastUploadW = w;
      lastUploadH = h;
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }

    if (refs.textureSizeLoc) {
      gl.uniform2f(refs.textureSizeLoc, w, h);
    }
    instance.render?.();
  }
}

function tick() {
  drawBackground();
  rafId = requestAnimationFrame(tick);
}

export function initLiveBackdrop() {
  if (started) return;
  started = true;

  window.Container.pageSnapshot = ensureBuffer(
    Math.max(1, Math.round(window.innerWidth)),
    Math.max(1, Math.round(window.innerHeight)),
  );

  rafId = requestAnimationFrame(tick);
}

export function stopLiveBackdrop() {
  started = false;
  cancelAnimationFrame(rafId);
}
