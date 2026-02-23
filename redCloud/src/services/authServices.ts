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

let auth;
try {
  auth = initializeAuth(getApp(), {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  auth = getAuth();
}

export const register = async (
  email: string,
  password: string,
  nick: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Salva o nickname no displayName da conta Firebase
  await updateProfile(userCredential.user, { displayName: nick });
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