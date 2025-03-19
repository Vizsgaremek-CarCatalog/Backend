import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with fake car data...');


     const cars = [ 
      {
        vehicle: "Tesla Model S",
        type: "Sedan",
        color: "Red",
        fuel: "Electric",
        manufacturer: "Tesla",
        mass: 2100,
        imageUrl: "https://example.com/tesla-model-s.jpg"
      },
      {
        vehicle: "Ford Mustang",
        type: "Coupe",
        color: "Blue",
        fuel: "Gasoline",
        manufacturer: "Ford",
        mass: 1650,
        imageUrl: "https://example.com/ford-mustang.jpg"
      },
      {
        vehicle: "Toyota Prius",
        type: "Hatchback",
        color: "Green",
        fuel: "Hybrid",
        manufacturer: "Toyota",
        mass: 1450,
        imageUrl: "https://example.com/toyota-prius.jpg"
      },
      {
        vehicle: "BMW X5",
        type: "SUV",
        color: "Black",
        fuel: "Diesel",
        manufacturer: "BMW",
        mass: 2350,
        imageUrl: "https://example.com/bmw-x5.jpg"
      },
      {
        vehicle: "Chevrolet Silverado",
        type: "Truck",
        color: "White",
        fuel: "Gasoline",
        manufacturer: "Chevrolet",
        mass: 2800,
        imageUrl: "https://example.com/chevrolet-silverado.jpg"
      },
      {
        vehicle: "Honda Civic",
        type: "Sedan",
        color: "Silver",
        fuel: "Gasoline",
        manufacturer: "Honda",
        mass: 1400,
        imageUrl: "https://example.com/honda-civic.jpg"
      },
      {
        vehicle: "Audi A4",
        type: "Sedan",
        color: "Black",
        fuel: "Gasoline",
        manufacturer: "Audi",
        mass: 1550,
        imageUrl: "https://example.com/audi-a4.jpg"
      },
      {
        vehicle: "Mercedes-Benz C-Class",
        type: "Sedan",
        color: "White",
        fuel: "Diesel",
        manufacturer: "Mercedes-Benz",
        mass: 1650,
        imageUrl: "https://example.com/mercedes-c-class.jpg"
      },
      {
        vehicle: "Volkswagen Golf",
        type: "Hatchback",
        color: "Blue",
        fuel: "Gasoline",
        manufacturer: "Volkswagen",
        mass: 1350,
        imageUrl: "https://example.com/vw-golf.jpg"
      },
      {
        vehicle: "Ford F-150",
        type: "Truck",
        color: "Red",
        fuel: "Gasoline",
        manufacturer: "Ford",
        mass: 3000,
        imageUrl: "https://example.com/ford-f150.jpg"
      },
      {
        vehicle: "Porsche 911",
        type: "Coupe",
        color: "Yellow",
        fuel: "Gasoline",
        manufacturer: "Porsche",
        mass: 1500,
        imageUrl: "https://example.com/porsche-911.jpg"
      },
      {
        vehicle: "Jeep Wrangler",
        type: "SUV",
        color: "Green",
        fuel: "Gasoline",
        manufacturer: "Jeep",
        mass: 2100,
        imageUrl: "https://example.com/jeep-wrangler.jpg"
      },
      {
        vehicle: "Nissan GT-R",
        type: "Coupe",
        color: "Gray",
        fuel: "Gasoline",
        manufacturer: "Nissan",
        mass: 1700,
        imageUrl: "https://example.com/nissan-gtr.jpg"
      },
      {
        vehicle: "Chevrolet Camaro",
        type: "Coupe",
        color: "Orange",
        fuel: "Gasoline",
        manufacturer: "Chevrolet",
        mass: 1800,
        imageUrl: "https://example.com/chevy-camaro.jpg"
      },
      {
        vehicle: "Hyundai Tucson",
        type: "SUV",
        color: "Blue",
        fuel: "Hybrid",
        manufacturer: "Hyundai",
        mass: 1900,
        imageUrl: "https://example.com/hyundai-tucson.jpg"
      },
      {
        vehicle: "Subaru Outback",
        type: "SUV",
        color: "Brown",
        fuel: "Gasoline",
        manufacturer: "Subaru",
        mass: 1800,
        imageUrl: "https://example.com/subaru-outback.jpg"
      },
      {
        vehicle: "Dodge Charger",
        type: "Sedan",
        color: "Red",
        fuel: "Gasoline",
        manufacturer: "Dodge",
        mass: 1900,
        imageUrl: "https://example.com/dodge-charger.jpg"
      },
      {
        vehicle: "Volvo XC90",
        type: "SUV",
        color: "Silver",
        fuel: "Diesel",
        manufacturer: "Volvo",
        mass: 2200,
        imageUrl: "https://example.com/volvo-xc90.jpg"
      },
      {
        vehicle: "Mazda MX-5",
        type: "Convertible",
        color: "White",
        fuel: "Gasoline",
        manufacturer: "Mazda",
        mass: 1100,
        imageUrl: "https://example.com/mazda-mx5.jpg"
      },
      {
        vehicle: "Toyota Land Cruiser",
        type: "SUV",
        color: "Black",
        fuel: "Diesel",
        manufacturer: "Toyota",
        mass: 2700,
        imageUrl: "https://example.com/toyota-landcruiser.jpg"
      },
      {
        vehicle: "Fiat 500",
        type: "Hatchback",
        color: "Red",
        fuel: "Electric",
        manufacturer: "Fiat",
        mass: 1200,
        imageUrl: "https://example.com/fiat-500.jpg"
      },
      {
        vehicle: "Lamborghini Huracan",
        type: "Coupe",
        color: "Green",
        fuel: "Gasoline",
        manufacturer: "Lamborghini",
        mass: 1422,
        imageUrl: "https://example.com/lamborghini-huracan.jpg"
      },
      {
        vehicle: "Ferrari F8",
        type: "Coupe",
        color: "Red",
        fuel: "Gasoline",
        manufacturer: "Ferrari",
        mass: 1435,
        imageUrl: "https://example.com/ferrari-f8.jpg"
      },
      {
        vehicle: "Bugatti Chiron",
        type: "Coupe",
        color: "Blue",
        fuel: "Gasoline",
        manufacturer: "Bugatti",
        mass: 1995,
        imageUrl: "https://example.com/bugatti-chiron.jpg"
      },
      {
        vehicle: "McLaren P1",
        type: "Coupe",
        color: "Orange",
        fuel: "Hybrid",
        manufacturer: "McLaren",
        mass: 1490,
        imageUrl: "https://example.com/mclaren-p1.jpg"
      },
      {
        vehicle: "Tesla Cybertruck",
        type: "Truck",
        color: "Silver",
        fuel: "Electric",
        manufacturer: "Tesla",
        mass: 3000,
        imageUrl: "https://example.com/tesla-cybertruck.jpg"
      },
      {
        vehicle: "Rivian R1T",
        type: "Truck",
        color: "Blue",
        fuel: "Electric",
        manufacturer: "Rivian",
        mass: 3100,
        imageUrl: "https://example.com/rivian-r1t.jpg"
      },
      {
        vehicle: "Lucid Air",
        type: "Sedan",
        color: "White",
        fuel: "Electric",
        manufacturer: "Lucid Motors",
        mass: 2050,
        imageUrl: "https://example.com/lucid-air.jpg"
      },
      {
        vehicle: "Peugeot 208",
        type: "Hatchback",
        color: "Yellow",
        fuel: "Gasoline",
        manufacturer: "Peugeot",
        mass: 1300,
        imageUrl: "http://localhost:3000/uploads/1742396639243-573263871.jpg"
      }
       
    
    ]
   
    
    await prisma.cars.createMany({
      data: cars,
    });
      
 
  ;  
  }
  
  console.log('Seeding completed! ✅');


main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
