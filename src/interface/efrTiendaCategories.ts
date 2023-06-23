// Generated by https://quicktype.io

export interface IEfrTiendaCategories {
  data: IEfrTiendaCategoriesDatum[];
  meta: Meta;
}

export interface IEfrTiendaCategoriesDatum {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name:        string;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
  products:    Products;
}

export interface Products {
  data: ProductsDatum[];
}

export interface ProductsDatum {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name:        string;
  description: string;
  price:       number;
  image_url:   string;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
  currency:    string;
  model:       string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
