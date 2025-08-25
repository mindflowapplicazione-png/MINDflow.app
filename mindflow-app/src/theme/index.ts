import { colors } from './colors';
import { typography } from './typography';

export const theme = {
  colors,
  typography,
  spacing: (value: number) => value * 8,
  radius: {
    md: 20,
    lg: 28,
    pill: 999,
  },
  shadow: {
    card: {
      shadowColor: '#000',
      shadowOpacity: 0.35,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
      elevation: 8,
    },
  },
};

export type AppTheme = typeof theme;

