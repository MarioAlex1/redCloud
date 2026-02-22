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

    /* ── Material Design 3 color roles ── */
    /** Cor primária (botões principais, estados ativos) */
    primary: string;
    /** Texto/ícone sobre fundo primário */
    onPrimary: string;
    /** Container primário claro (chips, cards de destaque) */
    primaryContainer: string;
    /** Texto sobre container primário */
    onPrimaryContainer: string;

    /** Cor secundária (ações menos proeminentes) */
    secondary: string;
    /** Texto/ícone sobre fundo secundário */
    onSecondary: string;
    /** Container secundário */
    secondaryContainer: string;
    /** Texto sobre container secundário */
    onSecondaryContainer: string;

    /** Cor terciária (contraste, destaques complementares) */
    tertiary: string;
    /** Texto/ícone sobre fundo terciário */
    onTertiary: string;
    /** Container terciário */
    tertiaryContainer: string;
    /** Texto sobre container terciário */
    onTertiaryContainer: string;
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

    primary: "#FFB3B2",
    onPrimary: "#680011",
    primaryContainer: "#93000D",
    onPrimaryContainer: "#FFDAD9",

    secondary: "#FFB3B0",
    onSecondary: "#5F1A1C",
    secondaryContainer: "#7B2D30",
    onSecondaryContainer: "#FFDAD7",

    tertiary: "#F3BC48",
    onTertiary: "#3F2D00",
    tertiaryContainer: "#5A4200",
    onTertiaryContainer: "#FFDEA5",
};

export const lightColors: Colors = {
    bg: "#FAF7F5",
    bgCard: "#F0EAE6",
    bgInput: "#E8E0DB",
    bgDivider: "#D4C8C2",
    bgChip: "#C9BAB3",
    bgProgress: "#B8A9A2",
    text: "#1C1210",
    textSub: "#6B4F4A",
    textMuted: "#8C6F6A",
    textFaint: "#4A3330",
    surface: "#FFFFFF",
    inputSurface: "#F5EFEB",
    brand: "#6E1F29",
    accent: "#e50914",

    primary: "#6E1F29",
    onPrimary: "#FFFFFF",
    primaryContainer: "#FFDAD9",
    onPrimaryContainer: "#400009",

    secondary: "#9C4043",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#FFDAD7",
    onSecondaryContainer: "#401016",

    tertiary: "#7B5800",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#FFDEA5",
    onTertiaryContainer: "#261900",
};

