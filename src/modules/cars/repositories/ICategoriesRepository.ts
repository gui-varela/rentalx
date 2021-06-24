import { Category } from "../model/Category";

interface ICreateRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateRepositoryDTO): void;
}

export { ICategoriesRepository, ICreateRepositoryDTO };
