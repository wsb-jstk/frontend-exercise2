export interface Book {
  id: number;
  title: string;
  author?: string;
  price: number;
  publisher: string;
  category: string;
  description: string;
  availability: number;
  cover_image: string;
  publication_year?: number;
}
