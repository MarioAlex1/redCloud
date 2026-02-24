export interface Colors {
    /** Fundo principal */
    bg: string;
    /** Fundo de cards/seções */
    bgCard: string;
    /** Fundo de inputs / nível elevado */
    bgInput: string;
    /** Cor de divisores e bordas */
    bgDivider: string;
    /** Texto primário */
    text: string;
    /** Texto secundário */
    textSub: string;
    /** Texto terciário */
    textMuted: string;
    /** Surface de cards */
    surface: string;
    /** Cor da marca (sempre igual) */
    brand: string;
    /** Cor de destaque / erro (sempre igual) */
    accent: string;
    /** Cor primária (botões principais, estados ativos) */
    primary: string;
    /** Texto/ícone sobre fundo primário */
    onPrimary: string;
}

export const darkColors: Colors = {
    bg: "#000000",
    bgCard: "#1a1a1a",
    bgInput: "#111111",
    bgDivider: "#222222",
    text: "#ffffff",
    textSub: "#aaaaaa",
    textMuted: "#888888",
    surface: "#D9D9D9",
    brand: "#6E1F29",
    accent: "#e50914",
    primary: "#FFB3B2",
    onPrimary: "#680011",
};

export const lightColors: Colors = {
    bg: "#FAF7F5",
    bgCard: "#F0EAE6",
    bgInput: "#E8E0DB",
    bgDivider: "#D4C8C2",
    text: "#1C1210",
    textSub: "#6B4F4A",
    textMuted: "#8C6F6A",
    surface: "#FFFFFF",
    brand: "#6E1F29",
    accent: "#e50914",
    primary: "#6E1F29",
    onPrimary: "#FFFFFF",
};

