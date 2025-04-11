import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with fake car data...');

  const cars = [
    { vehicle: 'Model S', type: 'Sedan', color: 'Red', fuel: 'Electric', manufacturer: 'Tesla', mass: 2000, imageUrl: '/uploads/red.jpg', price: 79999, description: 'Luxury electric sedan with autopilot. Price: $79,999.', yearMade: 2023, horsePower: 670 },
    { vehicle: 'Civic', type: 'Sedan', color: 'Blue', fuel: 'Gasoline', manufacturer: 'Honda', mass: 1400, imageUrl: '/uploads/honda_civic.jpg', price: 25000, description: 'Reliable and fuel-efficient compact car. Price: $25,000.', yearMade: 2022, horsePower: 158 },
    { vehicle: 'F-150', type: 'Truck', color: 'Black', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2500, imageUrl: '/uploads/ford_f150.jpg', price: 45000, description: 'Best-selling pickup truck in the US. Price: $45,000.', yearMade: 2023, horsePower: 400 },
    { vehicle: 'Mustang', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Ford', mass: 1700, imageUrl: '/uploads/ford_mustang.jpg', price: 55000, description: 'American muscle car with high performance. Price: $55,000.', yearMade: 2023, horsePower: 480 },
    { vehicle: 'Camry', type: 'Sedan', color: 'White', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1600, imageUrl: '/uploads/toyota_camry.jpg', price: 32000, description: 'Comfortable and fuel-efficient sedan. Price: $32,000.', yearMade: 2022, horsePower: 208 },
    { vehicle: 'Accord', type: 'Sedan', color: 'Gray', fuel: 'Gasoline', manufacturer: 'Honda', mass: 1500, imageUrl: '/uploads/honda_accord.jpg', price: 35000, description: 'Spacious mid-size sedan with great features. Price: $35,000.', yearMade: 2023, horsePower: 252 },
    { vehicle: 'Rav4', type: 'SUV', color: 'Blue', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1700, imageUrl: '/uploads/toyota_rav4.jpg', price: 38000, description: 'Popular compact SUV with hybrid option. Price: $38,000.', yearMade: 2023, horsePower: 219 },
    { vehicle: 'Corvette', type: 'Sports', color: 'Red', fuel: 'Gasoline', manufacturer: 'Chevrolet', mass: 1600, imageUrl: '/uploads/chevrolet_corvette.jpg', price: 70000, description: 'High-performance American sports car. Price: $70,000.', yearMade: 2023, horsePower: 670 },
    { vehicle: 'Cherokee', type: 'SUV', color: 'Black', fuel: 'Diesel', manufacturer: 'Jeep', mass: 1800, imageUrl: '/uploads/jeep_cherokee.jpg', price: 40000, description: 'Off-road capable mid-size SUV. Price: $40,000.', yearMade: 2022, horsePower: 271 },
    { vehicle: 'Cayenne', type: 'SUV', color: 'White', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 2000, imageUrl: '/uploads/porsche_cayenne.jpg', price: 90000, description: 'Luxury performance SUV. Price: $90,000.', yearMade: 2023, horsePower: 541 },
    { vehicle: 'X5', type: 'SUV', color: 'Silver', fuel: 'Gasoline', manufacturer: 'BMW', mass: 2100, imageUrl: '/uploads/bmw_x5.jpg', price: 85000, description: 'Premium mid-size luxury SUV. Price: $85,000.', yearMade: 2023, horsePower: 523 },
    { vehicle: 'A4', type: 'Sedan', color: 'Black', fuel: 'Gasoline', manufacturer: 'Audi', mass: 1600, imageUrl: '/uploads/audi_a4.jpg', price: 40000, description: 'Luxury compact sedan with modern features. Price: $40,000.', yearMade: 2022, horsePower: 201 },
    { vehicle: 'Prius', type: 'Hatchback', color: 'Green', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1400, imageUrl: '/uploads/toyota_prius.jpg', price: 27000, description: 'Highly efficient hybrid vehicle. Price: $27,000.', yearMade: 2023, horsePower: 121 },
    { vehicle: 'Challenger', type: 'Coupe', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Dodge', mass: 1800, imageUrl: '/uploads/dodge_challenger.jpg', price: 60000, description: 'Powerful muscle car with aggressive styling. Price: $60,000.', yearMade: 2023, horsePower: 717 },
    { vehicle: 'Defender', type: 'SUV', color: 'Green', fuel: 'Diesel', manufacturer: 'Land Rover', mass: 2200, imageUrl: '/uploads/landrover_defender.jpg', price: 75000, description: 'Rugged off-road capable luxury SUV. Price: $75,000.', yearMade: 2023, horsePower: 395 },
    { vehicle: 'Taycan', type: 'Sedan', color: 'Blue', fuel: 'Electric', manufacturer: 'Porsche', mass: 2050, imageUrl: '/uploads/porsche_taycan.jpg', price: 110000, description: 'High-performance electric luxury sedan. Price: $110,000.', yearMade: 2023, horsePower: 750 },
    { vehicle: 'Bronco', type: 'SUV', color: 'Green', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2000, imageUrl: '/uploads/ford_bronco.jpg', price: 45000, description: 'Off-road capable adventure SUV. Price: $45,000.', yearMade: 2023, horsePower: 300 },
    { vehicle: 'Macan', type: 'SUV', color: 'White', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 1900, imageUrl: '/uploads/porsche_macan.jpg', price: 60000, description: 'Sporty compact luxury SUV. Price: $60,000.', yearMade: 2023, horsePower: 375 },
    { vehicle: 'G70', type: 'Sedan', color: 'Red', fuel: 'Gasoline', manufacturer: 'Genesis', mass: 1700, imageUrl: '/uploads/genesis_g70.jpg', price: 42000, description: 'Luxury sports sedan with sleek design. Price: $42,000.', yearMade: 2023, horsePower: 365 },
    { vehicle: 'Grand Cherokee', type: 'SUV', color: 'Black', fuel: 'Hybrid', manufacturer: 'Jeep', mass: 2300, imageUrl: '/uploads/jeep_grandcherokee.jpg', price: 58000, description: 'Spacious hybrid off-road SUV. Price: $58,000.', yearMade: 2023, horsePower: 375 },
    { vehicle: 'Ioniq 5', type: 'SUV', color: 'Silver', fuel: 'Electric', manufacturer: 'Hyundai', mass: 1800, imageUrl: '/uploads/hyundai_ioniq5.jpg', price: 48000, description: 'Futuristic electric crossover SUV. Price: $48,000.', yearMade: 2023, horsePower: 320 },
    { vehicle: 'Lucid Air', type: 'Sedan', color: 'White', fuel: 'Electric', manufacturer: 'Lucid Motors', mass: 1950, imageUrl: '/uploads/lucid_air.jpg', price: 120000, description: 'Luxury EV with an impressive range. Price: $120,000.', yearMade: 2023, horsePower: 1111 },
    { vehicle: 'Levante', type: 'SUV', color: 'Gray', fuel: 'Gasoline', manufacturer: 'Maserati', mass: 2100, imageUrl: '/uploads/maserati_levante.jpg', price: 88000, description: 'Exotic Italian luxury SUV. Price: $88,000.', yearMade: 2023, horsePower: 550 },
    { vehicle: 'GR Supra', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Toyota', mass: 1500, imageUrl: '/uploads/toyota_supra.jpg', price: 55000, description: 'Iconic Japanese sports car reborn. Price: $55,000.', yearMade: 2023, horsePower: 382 },
    { vehicle: 'EQB', type: 'SUV', color: 'Blue', fuel: 'Electric', manufacturer: 'Mercedes-Benz', mass: 1900, imageUrl: '/uploads/mercedes_eqb.jpg', price: 58000, description: 'Electric compact SUV with premium comfort. Price: $58,000.', yearMade: 2023, horsePower: 288 },
    { vehicle: 'Stinger', type: 'Sedan', color: 'Red', fuel: 'Gasoline', manufacturer: 'Kia', mass: 1750, imageUrl: '/uploads/kia_stinger.jpg', price: 51000, description: 'Performance-focused luxury sports sedan. Price: $51,000.', yearMade: 2023, horsePower: 368 },
    { vehicle: 'XC90', type: 'SUV', color: 'Black', fuel: 'Hybrid', manufacturer: 'Volvo', mass: 2200, imageUrl: '/uploads/volvo_xc90.jpg', price: 72000, description: 'Spacious, safe, and premium hybrid SUV. Price: $72,000.', yearMade: 2023, horsePower: 455 },
    { vehicle: 'Ranger Raptor', type: 'Truck', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2400, imageUrl: '/uploads/ford_ranger_raptor.jpg', price: 58000, description: 'High-performance off-road pickup. Price: $58,000.', yearMade: 2023, horsePower: 405 },
    { vehicle: 'e-Tron GT', type: 'Sedan', color: 'Gray', fuel: 'Electric', manufacturer: 'Audi', mass: 2100, imageUrl: '/uploads/audi_etron_gt.jpg', price: 104000, description: 'Sleek and powerful electric grand tourer. Price: $104,000.', yearMade: 2023, horsePower: 637 },
    { vehicle: 'Cybertruck', type: 'Truck', color: 'Silver', fuel: 'Electric', manufacturer: 'Tesla', mass: 3000, imageUrl: '/uploads/tesla_cybertruck.jpg', price: 69999, description: 'Futuristic electric pickup with armored glass. Price: $69,999.', yearMade: 2024, horsePower: 800 }
  ];

  await prisma.cars.createMany({
    data: cars,
  });

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