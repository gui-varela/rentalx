import { Category } from "../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateRepositoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Promise<Category> {
    console.log(name);
    return null;
  }
  list(): Promise<Category[]> {
    return null;
  }
  create({ name, description }: ICreateRepositoryDTO): Promise<void> {
    console.log(description, name);
    return null;
  }
}

export { PostgresCategoryRepository };
