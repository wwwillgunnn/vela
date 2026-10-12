import { useEffect, useRef } from "react";

import "@/glass/glass.css";
import "./MusicPlayer.css";

const TRACK = {
  title: "Liquid Dreams",
  artist: "The Refractions",
};

interface MusicPlayerProps {
  onArtClick?: () => void;
}

export default function MusicPlayer({ onArtClick }: MusicPlayerProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playingRef = useRef(false);
  const onArtClickRef = useRef(onArtClick);
  onArtClickRef.current = onArtClick;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (!window.Container || !window.Button) {
      console.error("MusicPlayer: liquid-glass globals unavailable. Check /glass/*.js loaded.");
      return;
    }

    let card: GlassContainerInstance | null = null;

    const frame = requestAnimationFrame(() => {
      const player = new window.Container({
        borderRadius: 28,
        type: "rounded",
        tintOpacity: 0.25,
      });
      player.element.classList.add("music-player");

      const art = document.createElement("div");
      art.className = "player-art";
      art.addEventListener("click", () => onArtClickRef.current?.());

      const meta = document.createElement("div");
      meta.className = "player-meta";
      const title = document.createElement("div");
      title.className = "player-title";
      title.textContent = TRACK.title;
      const artist = document.createElement("div");
      artist.className = "player-artist";
      artist.textContent = TRACK.artist;
      meta.append(title, artist);

      const controls = document.createElement("div");
      controls.className = "player-controls";

      player.element.append(art, meta, controls);

      const addButton = (text: string, size: number, onClick: () => void) => {
        const button = new window.Button({
          text,
          size,
          type: "circle",
          tintOpacity: 0.2,
          onClick,
        });
        player.addChild(button);
        controls.appendChild(button.element);
        return button;
      };

      addButton("⏮", 22, () => console.log("previous track"));

      const playButton = addButton("▶", 26, () => {
        playingRef.current = !playingRef.current;
        playButton.textElement.textContent = playingRef.current ? "⏸" : "▶";
      });

      addButton("⏭", 22, () => console.log("next track"));

      host.appendChild(player.element);
      card = player;
    });

    return () => {
      cancelAnimationFrame(frame);
      card?.element.remove();
    };
  }, []);

  return <div ref={hostRef} className="music-player-host" />;
}
