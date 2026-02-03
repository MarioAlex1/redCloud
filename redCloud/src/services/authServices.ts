import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

import firebaseConfig from './firebase';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth(); //cria auth

export const register = async (
  email: string,
  password: string
): Promise<User> => {
  // Cria um novo usuário com email e senha e retorna o objeto User do Firebase
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const login = async (
  email: string,
  password: string
): Promise<User> => {
  // Faz login com email e senha e retorna o usuário autenticado
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const logout = async () => {
  // Encerra a sessão do usuário
  await signOut(auth);
};