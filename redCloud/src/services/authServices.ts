import auth from "@react-native-firebase/auth";

export const register = async (email:string, password:string) => {
    try{
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch(error:any){
        console.log('Erro ao registrar:', error.message);
        throw error;
    }
}

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error: any) {
    console.log('Erro ao logar:', error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error: any) {
    console.log('Erro ao deslogar:', error.message);
    throw error;
  }
};