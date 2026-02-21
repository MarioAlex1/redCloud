export interface Colors {
    /** Fundo principal */
    bg: string;
    /** Fundo de cards/seções */
    bgCard: string;
    /** Fundo de inputs / nível elevado */
    bgInput: string;
    /** Cor de divisores e bordas */
    bgDivider: string;
    /** Fundo de chips / abas inativas */
    bgChip: string;
    /** Fundo da barra de progresso */
    bgProgress: string;
    /** Texto primário */
    text: string;
    /** Texto secundário */
    textSub: string;
    /** Texto terciário */
    textMuted: string;
    /** Texto levíssimo */
    textFaint: string;
    /** Surface de cards (ex: login/register topCard) */
    surface: string;
    /** Input sobre uma surface clara */
    inputSurface: string;
    /** Cor da marca (sempre igual) */
    brand: string;
    /** Cor de destaque / erro (sempre igual) */
    accent: string;
}

export const darkColors: Colors = {
    bg: "#000000",
    bgCard: "#1a1a1a",
    bgInput: "#111111",
    bgDivider: "#222222",
    bgChip: "#333333",
    bgProgress: "#444444",
    text: "#ffffff",
    textSub: "#aaaaaa",
    textMuted: "#888888",
    textFaint: "#cccccc",
    surface: "#D9D9D9",
    inputSurface: "#FFFDFD",
    brand: "#6E1F29",
    accent: "#e50914",
};

export const lightColors: Colors = {
    bg: "#ffffff",
    bgCard: "#f0f0f0",
    bgInput: "#e8e8e8",
    bgDivider: "#d0d0d0",
    bgChip: "#c0c0c0",
    bgProgress: "#b0b0b0",
    text: "#000000",
    textSub: "#666666",
    textMuted: "#555555",
    textFaint: "#444444",
    surface: "#ffffff",
    inputSurface: "#f5f5f5",
    brand: "#6E1F29",
    accent: "#e50914",
};
