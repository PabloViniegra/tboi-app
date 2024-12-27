export interface ResponseItems {
  count: number;
  pages: number;
  page: number;
  items: Item[];
}

export interface Item {
  title: string;
  description: string;
  short_description: string;
  quality: number;
  type: string;
  icon: string;
  item_pool: string[];
  id: number;
}
