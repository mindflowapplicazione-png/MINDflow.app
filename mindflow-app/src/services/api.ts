export type Category = {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
};

// Stub: in a real app these would be fetched from a backend.
const categories: Category[] = [
  { id: 'career', title: 'Carriera', subtitle: 'Mindset', emoji: '🧠' },
  { id: 'emotions', title: 'Emozioni', subtitle: 'Equilibrio', emoji: '💖' },
  { id: 'fitness', title: 'Fitness', subtitle: 'Alimentazione', emoji: '💪🏼' },
  { id: 'spirituality', title: 'Spiritualità', subtitle: 'Crescita', emoji: '🔮' },
  { id: 'community', title: 'Community', emoji: '👥' },
  { id: 'profile', title: 'Profilo', emoji: '🌀' },
];

export async function fetchCategories(): Promise<Category[]> {
  // Simulate latency
  await new Promise((r) => setTimeout(r, 300));
  return categories;
}

export async function fetchCategoryById(id: string): Promise<Category | undefined> {
  await new Promise((r) => setTimeout(r, 150));
  return categories.find((c) => c.id === id);
}

