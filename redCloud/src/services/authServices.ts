import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  initializeAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getAuth,
  User,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { getReactNativePersistence } = require('firebase/auth');

import firebaseConfig from './firebase';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Inicializa o auth com persistência no AsyncStorage, ou reutiliza a instância existente
let auth;
try {
  auth = initializeAuth(getApp(), {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  auth = getAuth();
}

// Registra o usuário
export const register = async (
  email: string,
  password: string,
  nick: string
): Promise<User> => {
  // Cria a conta com email/senha e define o nick como displayName
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: nick });
  return userCredential.user;
};

// Faz o login do usuário
export const login = async (
  email: string,
  password: string
): Promise<User> => {
  // Autentica com email e senha e retorna o usuário
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Faz o logout do usuário
export const logout = async () => {
  // Encerra a sessão ativa no Firebase
  await signOut(auth);
};