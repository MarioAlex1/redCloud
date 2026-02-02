import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user: any) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (error: any) {
    console.log("Erro ao salvar usuário:", error.message);
  }
};

export const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem('@user');
    return data ? JSON.parse(data) : null;
  } catch (error: any) {
    console.log("Erro ao recuperar usuário:", error.message);
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem('@user');
  } catch (error: any) {
    console.log("Erro ao remover usuário:", error.message);
  }
};

// Salvar preferencias do usuário
export const savePreferences = async (prefs: { audio: string; subtitle: string }) => {
  try {
    await AsyncStorage.setItem('@userPrefs', JSON.stringify(prefs));
  } catch (error: any) {
    console.log("Erro ao salvar preferências:", error.message);
  }
};

// Recupera preferências
export const getPreferences = async (): Promise<{ audio: string; subtitle: string } | null> => {
  try {
    const data = await AsyncStorage.getItem('@userPrefs');
    return data ? JSON.parse(data) : null;
  } catch (error: any) {
    console.log("Erro ao recuperar preferências:", error.message);
    return null;
  }
};