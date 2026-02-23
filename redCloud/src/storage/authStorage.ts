import AsyncStorage from "@react-native-async-storage/async-storage";

// Salva os dados do usuário localmente como JSON na chave '@user'
export const saveUser = async (user: any) => {
  try {
    // Converte o objeto user para string JSON e grava com AsyncStorage
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (error: any) {
    console.log("Erro ao salvar usuário:", error.message);
  }
};

export const getUser = async () => {
  try {
    // Pega a string JSON armazenada na chave '@user'
    const data = await AsyncStorage.getItem('@user');
    // Se existir, converte de JSON para objeto; caso contrário, retorna null
    return data ? JSON.parse(data) : null;
  } catch (error: any) {
    console.log("Erro ao recuperar usuário:", error.message);
    return null;
  }
};

export const removeUser = async () => {
  try {
    // Remove a chave e seu conteúdo do AsyncStorage
    await AsyncStorage.removeItem('@user');
    await AsyncStorage.removeItem('@userNick');
  } catch (error: any) {
    // Loga erros, mas não lança para evitar travar a app
    console.log("Erro ao remover usuário:", error.message);
  }
};

// Salvar nick do usuário
export const saveNick = async (nick: string) => {
  try {
    await AsyncStorage.setItem('@userNick', nick);
  } catch (error: any) {
    console.log("Erro ao salvar nick:", error.message);
  }
};

// Recuperar nick do usuário
export const getNick = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('@userNick');
  } catch (error: any) {
    console.log("Erro ao recuperar nick:", error.message);
    return null;
  }
};

// Remover nick
export const removeNick = async () => {
  try {
    await AsyncStorage.removeItem('@userNick');
  } catch (error: any) {
    console.log("Erro ao remover nick:", error.message);
  }
};

// Salvar preferencias do usuário
export const savePreferences = async (prefs: { audio: string; subtitle: string }) => {
  try {
    // Serializa as preferências e grava no AsyncStorage
    await AsyncStorage.setItem('@userPrefs', JSON.stringify(prefs));
  } catch (error: any) {
    //loga o erro
    console.log("Erro ao salvar preferências:", error.message);
  }
};

// Recupera preferências
export const getPreferences = async (): Promise<{ audio: string; subtitle: string } | null> => {
  try {
    // Lê a string JSON e converte para objeto, se existir
    const data = await AsyncStorage.getItem('@userPrefs');
    return data ? JSON.parse(data) : null;
  } catch (error: any) {
    // Em caso de erro, loga e retorna null
    console.log("Erro ao recuperar preferências:", error.message);
    return null;
  }
};