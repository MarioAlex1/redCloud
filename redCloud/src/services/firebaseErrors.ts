const firebaseErrorMessages: Record<string, string> = {
  // Login
  'auth/invalid-email': 'O email informado é inválido.',
  'auth/user-not-found': 'Nenhuma conta encontrada com esse email.',
  'auth/wrong-password': 'Senha incorreta. Tente novamente.',
  'auth/invalid-credential': 'Email ou senha incorretos.',
  'auth/too-many-requests': 'Muitas tentativas. Aguarde um momento e tente novamente.',
  'auth/user-disabled': 'Esta conta foi desativada. Entre em contato com o suporte.',

  // Registro
  'auth/email-already-in-use': 'Este email já está sendo utilizado por outra conta.',
  'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
  'auth/operation-not-allowed': 'Operação não permitida.',

  // Rede
  'auth/network-request-failed': 'Falha na conexão. Verifique sua internet.',

  // Genérico
  'auth/internal-error': 'Ocorreu um erro interno. Tente novamente.',
};

export function getFirebaseErrorMessage(error: any): string {
  const code: string = error?.code ?? '';
  return firebaseErrorMessages[code] ?? 'Ocorreu um erro inesperado. Tente novamente.';
}
