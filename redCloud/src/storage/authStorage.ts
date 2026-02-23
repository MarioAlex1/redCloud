import AsyncStorage from "@react-native-async-storage/async-storage";

// Salva o usuário
export const saveUser = async (user: any) => {
  try {
    // Converte o objeto para JSON e grava na chave '@user'
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } catch (error: any) {
    console.log("Erro ao salvar usuário:", error.message);
  }
};

// Busca o usuário
export const getUser = async () => {
  try {
    // Lê a chave '@user' e retorna o objeto parseado, ou null se não existir
    const data = await AsyncStorage.getItem('@user');
    return data ? JSON.parse(data) : null;
  } catch (error: any) {
    console.log("Erro ao recuperar usuário:", error.message);
    return null;
  }
};

// Remove o usuário
export const removeUser = async () => {
  try {
    // Apaga as chaves do usuário e do nick juntas
    await AsyncStorage.removeItem('@user');
    await AsyncStorage.removeItem('@userNick');
  } catch (error: any) {
    console.log("Erro ao remover usuário:", error.message);
  }
};

// Salva o nick
export const saveNick = async (nick: string) => {
  try {
    // Grava o nick como string simples na chave '@userNick'
    await AsyncStorage.setItem('@userNick', nick);
  } catch (error: any) {
    console.log("Erro ao salvar nick:", error.message);
  }
};

// Busca o nick
export const getNick = async (): Promise<string | null> => {
  try {
    // Retorna o nick armazenado, ou null se não existir
    return await AsyncStorage.getItem('@userNick');
  } catch (error: any) {
    console.log("Erro ao recuperar nick:", error.message);
    return null;
  }
};

// Remove o nick
export const removeNick = async () => {
  try {
    // Apaga a chave '@userNick' do storage
    await AsyncStorage.removeItem('@userNick');
  } catch (error: any) {
    console.log("Erro ao remover nick:", error.message);
  }
};

// Salva as preferências
export const savePreferences = async (prefs: { audio: string; subtitle: string }) => {
  try {
    // Serializa o objeto de preferências e grava na chave '@userPrefs'
    await AsyncStorage.setItem('@userPrefs', JSON.stringify(prefs));
  } catch (error: any) {
    console.log("Erro ao salvar preferências:", error.message);
  }
};

// Busca as preferências
export const getPreferences = async (): Promise<{ audio: string; subtitle: string } | null> => {
  try {
    // Lê e parseia as preferências, retornando null se não houver nada salvo
    const data = await AsyncStorage.getItem('@userPrefs');
    return data ? JSON.parse(data) : null;
  } catch (error: any) {
    console.log("Erro ao recuperar preferências:", error.message);
    return null;
  }
};