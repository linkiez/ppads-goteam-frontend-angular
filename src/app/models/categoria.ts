export interface Categoria {
  id?: number;
  nome?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type Categorias = Array<Categoria>
