import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with fake car data...');


     const cars = [ 
      { vehicle: 'Model S', type: 'Sedan', color: 'Red', fuel: 'Electric', manufacturer: 'Tesla', mass: 2000, imageUrl: 'http://localhost:3000/uploads/red.jpg', price: 79999, discription: 'Luxury electric sedan with autopilot.', yearMade: 2023, horsePower: 670 },
      { vehicle: 'Civic', type: 'Sedan', color: 'Blue', fuel: 'Gasoline', manufacturer: 'Honda', mass: 1400, imageUrl: 'http://localhost:3000/uploads/honda_civic.jpg', price: 25000, discription: 'Reliable and fuel-efficient compact car.', yearMade: 2022, horsePower: 158 },
      { vehicle: 'F-150', type: 'Truck', color: 'Black', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2500, imageUrl: 'http://localhost:3000/uploads/ford_f150.jpg', price: 45000, discription: 'Best-selling pickup truck in the US.', yearMade: 2023, horsePower: 400 },
      { vehicle: 'Mustang', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Ford', mass: 1700, imageUrl: 'http://localhost:3000/uploads/ford_mustang.jpg', price: 55000, discription: 'American muscle car with high performance.', yearMade: 2023, horsePower: 480 },
      { vehicle: 'Camry', type: 'Sedan', color: 'White', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1600, imageUrl: 'http://localhost:3000/uploads/toyota_camry.jpg', price: 32000, discription: 'Comfortable and fuel-efficient sedan.', yearMade: 2022, horsePower: 208 },
      { vehicle: 'Accord', type: 'Sedan', color: 'Gray', fuel: 'Gasoline', manufacturer: 'Honda', mass: 1500, imageUrl: 'http://localhost:3000/uploads/honda_accord.jpg', price: 35000, discription: 'Spacious mid-size sedan with great features.', yearMade: 2023, horsePower: 252 },
      { vehicle: 'Rav4', type: 'SUV', color: 'Blue', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1700, imageUrl: 'http://localhost:3000/uploads/toyota_rav4.jpg', price: 38000, discription: 'Popular compact SUV with hybrid option.', yearMade: 2023, horsePower: 219 },
      { vehicle: 'Corvette', type: 'Sports', color: 'Red', fuel: 'Gasoline', manufacturer: 'Chevrolet', mass: 1600, imageUrl: 'http://localhost:3000/uploads/chevrolet_corvette.jpg', price: 70000, discription: 'High-performance American sports car.', yearMade: 2023, horsePower: 670 },
      { vehicle: 'Cherokee', type: 'SUV', color: 'Black', fuel: 'Diesel', manufacturer: 'Jeep', mass: 1800, imageUrl: 'http://localhost:3000/uploads/jeep_cherokee.jpg', price: 40000, discription: 'Off-road capable mid-size SUV.', yearMade: 2022, horsePower: 271 },
      { vehicle: 'Cayenne', type: 'SUV', color: 'White', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 2000, imageUrl: 'http://localhost:3000/uploads/porsche_cayenne.jpg', price: 90000, discription: 'Luxury performance SUV.', yearMade: 2023, horsePower: 541 },
      { vehicle: 'X5', type: 'SUV', color: 'Silver', fuel: 'Gasoline', manufacturer: 'BMW', mass: 2100, imageUrl: 'http://localhost:3000/uploads/bmw_x5.jpg', price: 85000, discription: 'Premium mid-size luxury SUV.', yearMade: 2023, horsePower: 523 },
      { vehicle: 'A4', type: 'Sedan', color: 'Black', fuel: 'Gasoline', manufacturer: 'Audi', mass: 1600, imageUrl: 'http://localhost:3000/uploads/audi_a4.jpg', price: 40000, discription: 'Luxury compact sedan with modern features.', yearMade: 2022, horsePower: 201 },
      { vehicle: 'Prius', type: 'Hatchback', color: 'Green', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1400, imageUrl: 'http://localhost:3000/uploads/toyota_prius.jpg', price: 27000, discription: 'Highly efficient hybrid vehicle.', yearMade: 2023, horsePower: 121 },
      { vehicle: 'Challenger', type: 'Coupe', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Dodge', mass: 1800, imageUrl: 'http://localhost:3000/uploads/dodge_challenger.jpg', price: 60000, discription: 'Powerful muscle car with aggressive styling.', yearMade: 2023, horsePower: 717 },
      { vehicle: 'Defender', type: 'SUV', color: 'Green', fuel: 'Diesel', manufacturer: 'Land Rover', mass: 2200, imageUrl: 'http://localhost:3000/uploads/landrover_defender.jpg', price: 75000, discription: 'Rugged off-road capable luxury SUV.', yearMade: 2023, horsePower: 395 },
      { vehicle: 'Taycan', type: 'Sedan', color: 'Blue', fuel: 'Electric', manufacturer: 'Porsche', mass: 2050, imageUrl: 'http://localhost:3000/uploads/porsche_taycan.jpg', price: 110000, discription: 'High-performance electric luxury sedan.', yearMade: 2023, horsePower: 750 },
      { vehicle: 'Bronco', type: 'SUV', color: 'Green', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2000, imageUrl: 'http://localhost:3000/uploads/ford_bronco.jpg', price: 45000, discription: 'Off-road capable adventure SUV.', yearMade: 2023, horsePower: 300 },
      { vehicle: 'Macan', type: 'SUV', color: 'White', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 1900, imageUrl: 'http://localhost:3000/uploads/porsche_macan.jpg', price: 60000, discription: 'Sporty compact luxury SUV.', yearMade: 2023, horsePower: 375 },
      { vehicle: 'G70', type: 'Sedan', color: 'Red', fuel: 'Gasoline', manufacturer: 'Genesis', mass: 1700, imageUrl: 'http://localhost:3000/uploads/genesis_g70.jpg', price: 42000, discription: 'Luxury sports sedan with sleek design.', yearMade: 2023, horsePower: 365 },
      { vehicle: 'Grand Cherokee', type: 'SUV', color: 'Black', fuel: 'Hybrid', manufacturer: 'Jeep', mass: 2300, imageUrl: 'http://localhost:3000/uploads/jeep_grandcherokee.jpg', price: 58000, discription: 'Spacious hybrid off-road SUV.', yearMade: 2023, horsePower: 375 },
      { vehicle: 'Ioniq 5', type: 'SUV', color: 'Silver', fuel: 'Electric', manufacturer: 'Hyundai', mass: 1800, imageUrl: 'http://localhost:3000/uploads/hyundai_ioniq5.jpg', price: 48000, discription: 'Futuristic electric crossover SUV.', yearMade: 2023, horsePower: 320 },
      { vehicle: 'Lucid Air', type: 'Sedan', color: 'White', fuel: 'Electric', manufacturer: 'Lucid Motors', mass: 1950, imageUrl: 'http://localhost:3000/uploads/lucid_air.jpg', price: 120000, discription: 'Luxury EV with an impressive range.', yearMade: 2023, horsePower: 1111 },
      { vehicle: 'Levante', type: 'SUV', color: 'Gray', fuel: 'Gasoline', manufacturer: 'Maserati', mass: 2100, imageUrl: 'http://localhost:3000/uploads/maserati_levante.jpg', price: 88000, discription: 'Exotic Italian luxury SUV.', yearMade: 2023, horsePower: 550 },
      { vehicle: 'GR Supra', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Toyota', mass: 1500, imageUrl: 'http://localhost:3000/uploads/toyota_supra.jpg', price: 55000, discription: 'Iconic Japanese sports car reborn.', yearMade: 2023, horsePower: 382 },
      { vehicle: 'EQB', type: 'SUV', color: 'Blue', fuel: 'Electric', manufacturer: 'Mercedes-Benz', mass: 1900, imageUrl: 'http://localhost:3000/uploads/mercedes_eqb.jpg', price: 58000, discription: 'Electric compact SUV with premium comfort.', yearMade: 2023, horsePower: 288 },
      { vehicle: 'Stinger', type: 'Sedan', color: 'Red', fuel: 'Gasoline', manufacturer: 'Kia', mass: 1750, imageUrl: 'http://localhost:3000/uploads/kia_stinger.jpg', price: 51000, discription: 'Performance-focused luxury sports sedan.', yearMade: 2023, horsePower: 368 },
      { vehicle: 'XC90', type: 'SUV', color: 'Black', fuel: 'Hybrid', manufacturer: 'Volvo', mass: 2200, imageUrl: 'http://localhost:3000/uploads/volvo_xc90.jpg', price: 72000, discription: 'Spacious, safe, and premium hybrid SUV.', yearMade: 2023, horsePower: 455 },
      { vehicle: 'Ranger Raptor', type: 'Truck', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2400, imageUrl: 'http://localhost:3000/uploads/ford_ranger_raptor.jpg', price: 58000, discription: 'High-performance off-road pickup.', yearMade: 2023, horsePower: 405 },
      { vehicle: 'e-Tron GT', type: 'Sedan', color: 'Gray', fuel: 'Electric', manufacturer: 'Audi', mass: 2100, imageUrl: 'http://localhost:3000/uploads/audi_etron_gt.jpg', price: 104000, discription: 'Sleek and powerful electric grand tourer.', yearMade: 2023, horsePower: 637 },
      { vehicle: 'Cybertruck', type: 'Truck', color: 'Silver', fuel: 'Electric', manufacturer: 'Tesla', mass: 3000, imageUrl: 'http://localhost:3000/uploads/tesla_cybertruck.jpg', price: 69999, discription: 'Futuristic electric pickup with armored glass.', yearMade: 2024, horsePower: 800 }

    
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
