export {};

declare global {
  interface GlassControlOptions {
    edgeIntensity?: number;
    rimIntensity?: number;
    baseIntensity?: number;
    edgeDistance?: number;
    rimDistance?: number;
    baseDistance?: number;
    cornerBoost?: number;
    rippleEffect?: number;
    blurRadius?: number;
    tintOpacity?: number;
  }

  interface GlassContainerOptions {
    borderRadius?: number;
    type?: "rounded" | "circle" | "pill";
    tintOpacity?: number;
  }

  interface GlassButtonOptions extends GlassContainerOptions {
    text?: string;
    size?: number;
    onClick?: ((text: string) => void) | null;
    warp?: boolean;
  }

  interface GlassShaderRefs {
    gl: WebGLRenderingContext;
    texture: WebGLTexture;
    textureSizeLoc: WebGLUniformLocation | null;
  }

  interface GlassContainerInstance {
    element: HTMLDivElement;
    canvas: HTMLCanvasElement;
    children: GlassContainerInstance[];
    parent?: GlassContainerInstance | null;
    isNestedGlass?: boolean;
    width: number;
    height: number;
    addChild(child: GlassContainerInstance): GlassContainerInstance;
    removeChild(child: GlassContainerInstance): void;
    updateSizeFromDOM(): void;
    render?: () => void;
    gl_refs?: Partial<GlassShaderRefs>;
  }

  interface GlassButtonInstance extends GlassContainerInstance {
    text: string;
    textElement: HTMLDivElement;
  }

  interface GlassContainerConstructor {
    new (options?: GlassContainerOptions): GlassContainerInstance;
    instances: GlassContainerInstance[];
    pageSnapshot: HTMLCanvasElement | null;
    isCapturing: boolean;
    waitingForSnapshot: GlassContainerInstance[];
  }

  interface Window {
    html2canvas: typeof import("html2canvas").default;
    Button: new (options?: GlassButtonOptions) => GlassButtonInstance;
    Container: GlassContainerConstructor;
    glassControls?: GlassControlOptions;
  }
}
