import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with fake car data...');


     const cars = 
     [
      
        { vehicle: 'Model S', type: 'Sedan', color: 'Red', fuel: 'Electric', manufacturer: 'Tesla', mass: 2000, imageUrl: 'http://localhost:3000/uploads/tesla.jpg', price: 79999, description: 'Luxury electric sedan with autopilot. Price: $79,999.', yearMade: 2023, horsePower: 670 },
        { vehicle: 'Civic', type: 'Sedan', color: 'Blue', fuel: 'Gasoline', manufacturer: 'Honda', mass: 1400, imageUrl: 'http://localhost:3000/uploads/civic.jpg', price: 25000, description: 'Reliable and fuel-efficient compact car. Price: $25,000.', yearMade: 2022, horsePower: 158 },
        { vehicle: 'F-150', type: 'Truck', color: 'Black', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2500, imageUrl: 'http://localhost:3000/uploads/ford_f150.jpg', price: 45000, description: 'Best-selling pickup truck in the US. Price: $45,000.', yearMade: 2023, horsePower: 400 },
        { vehicle: 'Mustang', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Ford', mass: 1700, imageUrl: 'http://localhost:3000/uploads/ford_mustang.jpg', price: 55000, description: 'American muscle car with high performance. Price: $55,000.', yearMade: 2023, horsePower: 480 },
        { vehicle: 'Camry', type: 'Sedan', color: 'White', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1600, imageUrl: 'http://localhost:3000/uploads/toyota_camry.jpg', price: 32000, description: 'Comfortable and fuel-efficient sedan. Price: $32,000.', yearMade: 2022, horsePower: 208 },
        { vehicle: 'Accord', type: 'Sedan', color: 'Gray', fuel: 'Gasoline', manufacturer: 'Honda', mass: 1500, imageUrl: 'http://localhost:3000/uploads/honda_accord.jpg', price: 35000, description: 'Spacious mid-size sedan with great features. Price: $35,000.', yearMade: 2023, horsePower: 252 },
        { vehicle: 'Rav4', type: 'SUV', color: 'Blue', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1700, imageUrl: 'http://localhost:3000/uploads/toyota_rav4.jpg', price: 38000, description: 'Popular compact SUV with hybrid option. Price: $38,000.', yearMade: 2023, horsePower: 219 },
        { vehicle: 'Corvette', type: 'Sports', color: 'Red', fuel: 'Gasoline', manufacturer: 'Chevrolet', mass: 1600, imageUrl: 'http://localhost:3000/uploads/chevrolet_corvette.jpg', price: 70000, description: 'High-performance American sports car. Price: $70,000.', yearMade: 2023, horsePower: 670 },
        { vehicle: 'Cherokee', type: 'SUV', color: 'Black', fuel: 'Diesel', manufacturer: 'Jeep', mass: 1800, imageUrl: 'http://localhost:3000/uploads/jeep_cherokee.jpg', price: 40000, description: 'Off-road capable mid-size SUV. Price: $40,000.', yearMade: 2022, horsePower: 271 },
        { vehicle: 'Cayenne', type: 'SUV', color: 'White', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 2000, imageUrl: 'http://localhost:3000/uploads/porsche_cayenne.jpg', price: 90000, description: 'Luxury performance SUV. Price: $90,000.', yearMade: 2023, horsePower: 541 },
        { vehicle: 'X5', type: 'SUV', color: 'Silver', fuel: 'Gasoline', manufacturer: 'BMW', mass: 2100, imageUrl: 'http://localhost:3000/uploads/bmw_x5.jpg', price: 85000, description: 'Premium mid-size luxury SUV. Price: $85,000.', yearMade: 2023, horsePower: 523 },
        { vehicle: 'A4', type: 'Sedan', color: 'Black', fuel: 'Gasoline', manufacturer: 'Audi', mass: 1600, imageUrl: 'http://localhost:3000/uploads/audi_a4.jpg', price: 40000, description: 'Luxury compact sedan with modern features. Price: $40,000.', yearMade: 2022, horsePower: 201 },
        { vehicle: 'Prius', type: 'Hatchback', color: 'Green', fuel: 'Hybrid', manufacturer: 'Toyota', mass: 1400, imageUrl: 'http://localhost:3000/uploads/toyota_prius.jpg', price: 27000, description: 'Highly efficient hybrid vehicle. Price: $27,000.', yearMade: 2023, horsePower: 121 },
        { vehicle: 'Challenger', type: 'Coupe', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Dodge', mass: 1800, imageUrl: 'http://localhost:3000/uploads/dodge_challenger.jpg', price: 60000, description: 'Powerful muscle car with aggressive styling. Price: $60,000.', yearMade: 2023, horsePower: 717 },
        { vehicle: 'Defender', type: 'SUV', color: 'Green', fuel: 'Diesel', manufacturer: 'Land Rover', mass: 2200, imageUrl: 'http://localhost:3000/uploads/landrover_defender.jpg', price: 75000, description: 'Rugged off-road capable luxury SUV. Price: $75,000.', yearMade: 2023, horsePower: 395 },
        { vehicle: 'Taycan', type: 'Sedan', color: 'Blue', fuel: 'Electric', manufacturer: 'Porsche', mass: 2050, imageUrl: 'http://localhost:3000/uploads/porsche_taycan.jpg', price: 110000, description: 'High-performance electric luxury sedan. Price: $110,000.', yearMade: 2023, horsePower: 750 },
        { vehicle: 'Bronco', type: 'SUV', color: 'Green', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2000, imageUrl: 'http://localhost:3000/uploads/ford_bronco.jpg', price: 45000, description: 'Off-road capable adventure SUV. Price: $45,000.', yearMade: 2023, horsePower: 300 },
        { vehicle: 'Macan', type: 'SUV', color: 'White', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 1900, imageUrl: 'http://localhost:3000/uploads/porsche_macan.jpg', price: 60000, description: 'Sporty compact luxury SUV. Price: $60,000.', yearMade: 2023, horsePower: 375 },
        { vehicle: 'G70', type: 'Sedan', color: 'Red', fuel: 'Gasoline', manufacturer: 'Genesis', mass: 1700, imageUrl: 'http://localhost:3000/uploads/genesis_g70.jpg', price: 42000, description: 'Luxury sports sedan with sleek design. Price: $42,000.', yearMade: 2023, horsePower: 365 },
        { vehicle: 'Grand Cherokee', type: 'SUV', color: 'Black', fuel: 'Hybrid', manufacturer: 'Jeep', mass: 2300, imageUrl: 'http://localhost:3000/uploads/jeep_grandcherokee.jpg', price: 58000, description: 'Spacious hybrid off-road SUV. Price: $58,000.', yearMade: 2023, horsePower: 375 },
        { vehicle: 'Ioniq 5', type: 'SUV', color: 'Silver', fuel: 'Electric', manufacturer: 'Hyundai', mass: 1800, imageUrl: 'http://localhost:3000/uploads/hyundai_ioniq5.jpg', price: 48000, description: 'Futuristic electric crossover SUV. Price: $48,000.', yearMade: 2023, horsePower: 320 },
        { vehicle: 'Lucid Air', type: 'Sedan', color: 'White', fuel: 'Electric', manufacturer: 'Lucid Motors', mass: 1950, imageUrl: 'http://localhost:3000/uploads/lucid_air.jpg', price: 120000, description: 'Luxury EV with an impressive range. Price: $120,000.', yearMade: 2023, horsePower: 1111 },
        { vehicle: 'Levante', type: 'SUV', color: 'Gray', fuel: 'Gasoline', manufacturer: 'Maserati', mass: 2100, imageUrl: 'http://localhost:3000/uploads/maserati_levante.jpg', price: 88000, description: 'Exotic Italian luxury SUV. Price: $88,000.', yearMade: 2023, horsePower: 550 },
        { vehicle: 'GR Supra', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Toyota', mass: 1500, imageUrl: 'http://localhost:3000/uploads/toyota_supra.jpg', price: 55000, description: 'Iconic Japanese sports car reborn. Price: $55,000.', yearMade: 2023, horsePower: 382 },
        { vehicle: 'EQB', type: 'SUV', color: 'Blue', fuel: 'Electric', manufacturer: 'Mercedes-Benz', mass: 1900, imageUrl: 'http://localhost:3000/uploads/mercedes_eqb.jpg', price: 58000, description: 'Electric compact SUV with premium comfort. Price: $58,000.', yearMade: 2023, horsePower: 288 },
        { vehicle: 'Stinger', type: 'Sedan', color: 'Red', fuel: 'Gasoline', manufacturer: 'Kia', mass: 1750, imageUrl: 'http://localhost:3000/uploads/kia_stinger.jpg', price: 51000, description: 'Performance-focused luxury sports sedan. Price: $51,000.', yearMade: 2023, horsePower: 368 },
        { vehicle: 'XC90', type: 'SUV', color: 'Black', fuel: 'Hybrid', manufacturer: 'Volvo', mass: 2200, imageUrl: 'http://localhost:3000/uploads/volvo_xc90.jpg', price: 72000, description: 'Spacious, safe, and premium hybrid SUV. Price: $72,000.', yearMade: 2023, horsePower: 455 },
        { vehicle: 'Ranger Raptor', type: 'Truck', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Ford', mass: 2400, imageUrl: 'http://localhost:3000/uploads/ford_ranger_raptor.jpg', price: 58000, description: 'High-performance off-road pickup. Price: $58,000.', yearMade: 2023, horsePower: 405 },
        { vehicle: 'e-Tron GT', type: 'Sedan', color: 'Gray', fuel: 'Electric', manufacturer: 'Audi', mass: 2100, imageUrl: 'http://localhost:3000/uploads/audi_etron_gt.jpg', price: 104000, description: 'Sleek and powerful electric grand tourer. Price: $104,000.', yearMade: 2023, horsePower: 637 },
        { vehicle: 'Cybertruck', type: 'Truck', color: 'Silver', fuel: 'Electric', manufacturer: 'Tesla', mass: 3000, imageUrl: 'http://localhost:3000/uploads/tesla_cybertruck.jpg', price: 69999, description: 'Futuristic electric pickup with armored glass. Price: $69,999.', yearMade: 2024, horsePower: 800 },
        { vehicle: 'R1T', type: 'Truck', color: 'Blue', fuel: 'Electric', manufacturer: 'Rivian', mass: 2700, imageUrl: 'http://localhost:3000/uploads/rivian_r1t.jpg', price: 85000, description: 'Adventure-ready electric pickup truck. Price: $85,000.', yearMade: 2024, horsePower: 835 },
        { vehicle: 'Emira', type: 'Coupe', color: 'Green', fuel: 'Gasoline', manufacturer: 'Lotus', mass: 1400, imageUrl: 'http://localhost:3000/uploads/lotus_emira.jpg', price: 96000, description: 'Lightweight sports car with superb handling. Price: $96,000.', yearMade: 2023, horsePower: 400 },
        { vehicle: 'Polestar 3', type: 'SUV', color: 'Silver', fuel: 'Electric', manufacturer: 'Polestar', mass: 2300, imageUrl: 'http://localhost:3000/uploads/polestar_3.jpg', price: 83900, description: 'Futuristic electric luxury SUV. Price: $83,900.', yearMade: 2024, horsePower: 489 },
        { vehicle: 'Purosangue', type: 'SUV', color: 'Red', fuel: 'Gasoline', manufacturer: 'Ferrari', mass: 2033, imageUrl: 'http://localhost:3000/uploads/ferrari_purosangue.jpg', price: 400000, description: 'Ferrari’s first luxury SUV. Price: $400,000.', yearMade: 2023, horsePower: 715 },
        { vehicle: 'Lucid Gravity', type: 'SUV', color: 'Black', fuel: 'Electric', manufacturer: 'Lucid Motors', mass: 2300, imageUrl: 'http://localhost:3000/uploads/lucid_gravity.jpg', price: 120000, description: 'High-performance electric luxury SUV. Price: $120,000.', yearMade: 2024, horsePower: 800 },
        { vehicle: 'E-Type', type: 'Coupe', color: 'British Racing Green', fuel: 'Gasoline', manufacturer: 'Jaguar', mass: 1250, imageUrl: 'http://localhost:3000/uploads/jaguar_etype.jpg', price: 250000, description: 'Timeless British sports car. Price: $250,000.', yearMade: 1965, horsePower: 265 },
        { vehicle: 'Bel Air', type: 'Sedan', color: 'Red/White', fuel: 'Gasoline', manufacturer: 'Chevrolet', mass: 1600, imageUrl: 'http://localhost:3000/uploads/chevrolet_belair.jpg', price: 90000, description: 'Classic American beauty from the 50s. Price: $90,000.', yearMade: 1957, horsePower: 283 },
        { vehicle: 'GT40', type: 'Coupe', color: 'White/Blue Stripes', fuel: 'Gasoline', manufacturer: 'Ford', mass: 980, imageUrl: 'http://localhost:3000/uploads/ford_gt40.jpg', price: 1000000, description: 'Legendary Le Mans-winning race car. Price: $10,000,000.', yearMade: 1968, horsePower: 485 },
        { vehicle: '300SL Gullwing', type: 'Coupe', color: 'Silver', fuel: 'Gasoline', manufacturer: 'Mercedes-Benz', mass: 1295, imageUrl: 'http://localhost:3000/uploads/mercedes_300sl.jpg', price: 1400000, description: 'Iconic luxury coupe with gullwing doors. Price: $1,400,000.', yearMade: 1955, horsePower: 240 },
        { vehicle: '356 Speedster', type: 'Convertible', color: 'Light Blue', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 760, imageUrl: 'http://localhost:3000/uploads/porsche_356.jpg', price: 450000, description: 'Elegant and lightweight classic Porsche. Price: $450,000.', yearMade: 1956, horsePower: 95 },
        { vehicle: '911 Turbo S', type: 'Coupe', color: 'Yellow', fuel: 'Gasoline', manufacturer: 'Porsche', mass: 1640, imageUrl: 'http://localhost:3000/uploads/porsche_911_turbo_s.jpg', price: 210000, description: 'Super fast and luxurious sports coupe. Price: $210,000.', yearMade: 2024, horsePower: 640 },
        { vehicle: 'Huracán Evo', type: 'Coupe', color: 'Orange', fuel: 'Gasoline', manufacturer: 'Lamborghini', mass: 1422, imageUrl: 'http://localhost:3000/uploads/lamborghini_huracan.jpg', price: 265000, description: 'Exotic Italian supercar with a V10. Price: $265,000.', yearMade: 2023, horsePower: 631 },
        { vehicle: 'SF90 Stradale', type: 'Coupe', color: 'Rosso Corsa', fuel: 'Hybrid', manufacturer: 'Ferrari', mass: 1570, imageUrl: 'http://localhost:3000/uploads/ferrari_sf90.jpg', price: 507000, description: 'Hybrid supercar with extreme performance. Price: $507,000.', yearMade: 2024, horsePower: 986 },
        { vehicle: 'GT-R Nismo', type: 'Coupe', color: 'White', fuel: 'Gasoline', manufacturer: 'Nissan', mass: 1720, imageUrl: 'http://localhost:3000/uploads/nissan_gtr_nismo.jpg', price: 220000, description: 'Japanese performance legend. Price: $220,000.', yearMade: 2023, horsePower: 600 },
        { vehicle: 'Aston Martin Valkyrie', type: 'Coupe', color: 'Dark Green', fuel: 'Hybrid', manufacturer: 'Aston Martin', mass: 1030, imageUrl: 'http://localhost:3000/uploads/aston_martin_valkyrie.jpg', price: 3000000, description: 'Hypercar built with F1 technology. Price: $3,000,000.', yearMade: 2024, horsePower: 1160 }
      
      
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
