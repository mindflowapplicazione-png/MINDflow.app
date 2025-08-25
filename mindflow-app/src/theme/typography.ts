export const typography = {
  displayXL: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '800' as const,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700' as const,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500' as const,
  },
};

export type Typography = typeof typography;

