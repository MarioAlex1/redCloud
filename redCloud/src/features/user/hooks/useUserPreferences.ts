import { useState, useEffect } from "react";
import * as authStorage from "../../../storage/authStorage";

// Carrega e persiste as preferências do usuário e o nick no AsyncStorage
export function useUserPreferences() {
  const [nick, setNick] = useState("");
  const [audio, setAudio] = useState("Português");
  const [subtitle, setSubtitle] = useState("N/A");

  // Carrega as preferências e o nick salvos ao montar
  useEffect(() => {
    const load = async () => {
      const prefs = await authStorage.getPreferences();
      if (prefs) {
        setAudio(prefs.audio);
        setSubtitle(prefs.subtitle);
      }
      const savedNick = await authStorage.getNick();
      if (savedNick) setNick(savedNick);
    };
    load();
  }, []);

  // Persiste as preferências sempre que o usuário as alterar
  useEffect(() => {
    authStorage.savePreferences({ audio, subtitle });
  }, [audio, subtitle]);

  return { nick, audio, setAudio, subtitle, setSubtitle };
}
