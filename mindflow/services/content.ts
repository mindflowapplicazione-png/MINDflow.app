export type CategoryItem = {
  id: string;
  title: string;
  description: string;
};

export async function fetchCategoryItems(categoryId: string): Promise<CategoryItem[]> {
  await new Promise((r) => setTimeout(r, 250));
  return [
    { id: `${categoryId}-1`, title: 'Articolo introduttivo', description: 'Punti chiave e consigli pratici.' },
    { id: `${categoryId}-2`, title: 'Esercizio guidato', description: 'Passaggi per migliorare ogni giorno.' },
  ];
}

