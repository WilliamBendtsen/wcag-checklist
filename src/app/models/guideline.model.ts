export interface Guideline {
  id: string; // like "1.1.1"
  title: string; // like "Non-text Content"
  description: string; // full explanation
  level: 'A' | 'AA' | 'AAA'; // compliance level
  applicableTo: string[]; // routes where this guideline is specially relevant
  imageUrl?: string;
  category?: 'Perceivable' | 'Operable' | 'Understandable' | 'Robust';
  fulfilled: boolean;
}
