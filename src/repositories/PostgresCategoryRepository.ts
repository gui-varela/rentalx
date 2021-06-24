import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateRepositoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateRepositoryDTO): void {
    console.log(description, name);
  }
}

export { PostgresCategoryRepository };
