import Iridescence from "@/components/Iridescence";
import MusicPlayer from "@/components/MusicPlayer";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App() {
  return (
    <div className="app">
      <div className="app-background">
        <Iridescence
          color="#ffffff"
          hueShift={0}
          saturation={0}
          brightness={0.55}
          contrast={2.2}
          speed={1}
          scale={1}
          detail={12}
          warp={1}
          rotation={0}
          mouseReact
          amplitude={0.1}
          stir={0.5}
          sheen={0.3}
          clickSwirl
          grain={0}
          fade={0}
        />
      </div>
      <main className="app-content">
        <ErrorBoundary
          fallback={<span style={{ color: "white" }}>Music player failed to load.</span>}
        >
          <MusicPlayer />
        </ErrorBoundary>
      </main>
    </div>
  );
}
