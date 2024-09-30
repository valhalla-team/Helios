export interface PlaceholderItem {
  name: string;
  avatarUrl: string | null;
}

export function generatePlaceholders(
  totalItems: number, 
  realData: PlaceholderItem[] 
): PlaceholderItem[] {
  const placeholdersNeeded = totalItems - realData.length;

  const placeholders = Array.from({ length: placeholdersNeeded }, (_, index) => ({
    name: `Placeholder ${index + 1}`,
    avatarUrl: null, 
  }));

  return [...realData, ...placeholders];
}
