import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with fake car data...');

  for (let i = 0; i < 20; i++) {
    await prisma.cars.create({
      data: {
        vehicle: faker.vehicle.vehicle(),
        type: faker.vehicle.type(),
        color: faker.color.human(),
        fuel: faker.vehicle.fuel(),
        manufacturer: faker.vehicle.manufacturer(),
        mass: faker.number.int({ min: 700, max: 3500 }),
        imageUrl : faker.image.avatar()
      },
    });
  }

  console.log('Seeding completed! ✅');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
