import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";

// Gerencia fullscreen, orientação e visibilidade dos controles do player
export function usePlayer() {
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0.1);
  const [showControls, setShowControls] = useState(true);

  // Força orientação landscape e esconde a navigation bar ao entrar na tela
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      NavigationBar.setVisibilityAsync("visible");
    };
  }, []);

  // Esconde os controles automaticamente após 3 segundos de inatividade
  useEffect(() => {
    if (!showControls) return;

    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showControls]);

  return {
    paused,
    setPaused,
    progress,
    setProgress,
    showControls,
    setShowControls,
  };
}
