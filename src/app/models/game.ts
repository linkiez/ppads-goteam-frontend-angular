import { Categoria } from "./categoria";
import { Tag } from "./tag";

export interface Game {
  id?: number
  nome?: string;
  url_acesso?: string;
  url_video?: string;
  descricao?: string;
  imagem_ilustrativa?: string;
  createdAt?: Date;
  updatedAt?: Date;
  id_categoria?: number;

  categoria?: Categoria;
  tags?: Array<Tag>;
}

export type Games = Array<Game>;
