import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const spececificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (spececificationAlreadyExists) {
      throw new Error("Specification already Exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
