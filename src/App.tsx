import { useCallback, useState } from "react";

import Iridescence from "@/components/Iridescence";
import type { IridescenceProps } from "@/components/Iridescence";
import MusicPlayer from "@/components/MusicPlayer";
import ErrorBoundary from "@/components/ErrorBoundary";

const INITIAL_SETTINGS: IridescenceProps = {
  color: "#ffffff",
  hueShift: 0,
  saturation: 0,
  brightness: 0.55,
  contrast: 2.2,
  speed: 1,
  scale: 1,
  detail: 12,
  warp: 1,
  rotation: 0,
  amplitude: 0.1,
  stir: 0.5,
  sheen: 0.3,
  grain: 0,
  fade: 0,
  opacity: 1,
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const randomizeSettings = (): IridescenceProps => ({
  color: `hsl(${Math.round(rand(0, 360))}, ${Math.round(rand(50, 85))}%, ${Math.round(rand(45, 65))}%)`,
  hueShift: Math.round(rand(-180, 180)),
  saturation: Math.round(rand(0, 2) * 100) / 100,
  brightness: Math.round(rand(0.1, 1.8) * 100) / 100,
  contrast: Math.round(rand(0.3, 3) * 100) / 100,
  speed: Math.round(rand(0.2, 3) * 100) / 100,
  scale: Math.round(rand(0.2, 2) * 100) / 100,
  detail: Math.floor(rand(1, 25)),
  warp: Math.round(rand(-2, 3) * 100) / 100,
  rotation: Math.round(rand(-60, 60)),
  amplitude: Math.round(rand(0.02, 0.3) * 100) / 100,
  stir: Math.round(rand(0, 1.2) * 100) / 100,
  sheen: Math.round(rand(0, 1) * 100) / 100,
  grain: Math.round(rand(0, 0.4) * 100) / 100,
  opacity: Math.round(rand(0.6, 1) * 100) / 100,
});

export default function App() {
  const [settings, setSettings] = useState<IridescenceProps>(INITIAL_SETTINGS);
  const handleArtClick = useCallback(() => setSettings(randomizeSettings()), []);

  return (
    <div className="app">
      <div className="app-background">
        <Iridescence {...settings} mouseReact clickSwirl />
      </div>
      <main className="app-content">
        <ErrorBoundary
          fallback={<span style={{ color: "white" }}>Music player failed to load.</span>}
        >
          <MusicPlayer onArtClick={handleArtClick} />
        </ErrorBoundary>
      </main>
    </div>
  );
}
