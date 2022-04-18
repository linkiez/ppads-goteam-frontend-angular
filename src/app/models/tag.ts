import { GameTag } from "./gametag";

export interface Tag {
  id?: number;
  nome?: string;
  createdAt?: Date;
  updatedAt?: Date;
  GameTags?: GameTag;

}
