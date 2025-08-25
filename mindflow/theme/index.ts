export const colors = {
  background: '#0b0b0d',
  surface: '#111114',
  textPrimary: '#f4e1da',
  textSecondary: '#bcb8bd',
  accent: '#f4c7b5',
};

export const categoryGradients: Record<string, [string, string]> = {
  career: ['#101727', '#0c0f1c'],
  emotions: ['#2b1228', '#220f21'],
  fitness: ['#2a1d14', '#22170f'],
  spirituality: ['#0f2217', '#0b1b13'],
  community: ['#211b11', '#18130d'],
  profile: ['#211325', '#1a0f1d'],
};

export const categoryMeta: { id: string; title: string; subtitle: string; emoji: string; key: keyof typeof categoryGradients }[] = [
  { id: 'career', title: 'Carriera', subtitle: 'Mindset', emoji: '🧠', key: 'career' },
  { id: 'emotions', title: 'Emozioni', subtitle: 'Equilibrio', emoji: '💗', key: 'emotions' },
  { id: 'fitness', title: 'Fitness', subtitle: 'Alimentazione', emoji: '💪🏼', key: 'fitness' },
  { id: 'spirituality', title: 'Spiritualità', subtitle: 'Crescita', emoji: '🔮', key: 'spirituality' },
  { id: 'community', title: 'Community', subtitle: '', emoji: '👥', key: 'community' },
  { id: 'profile', title: 'Profilo', subtitle: '', emoji: '🌀', key: 'profile' },
];

