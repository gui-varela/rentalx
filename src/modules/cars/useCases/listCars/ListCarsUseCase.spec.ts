import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 140.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 140.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car Brand test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car brand test",
    });

    expect(cars).toEqual([car]);
  });
});
