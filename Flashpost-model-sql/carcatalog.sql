-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Ápr 12. 17:13
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `carcatalog`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `vehicle` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `color` varchar(191) NOT NULL,
  `fuel` varchar(191) NOT NULL,
  `manufacturer` varchar(191) NOT NULL,
  `mass` int(11) NOT NULL,
  `imageUrl` varchar(191) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(191) NOT NULL,
  `yearMade` int(11) NOT NULL,
  `horsePower` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `cars`
--

INSERT INTO `cars` (`id`, `vehicle`, `type`, `color`, `fuel`, `manufacturer`, `mass`, `imageUrl`, `price`, `description`, `yearMade`, `horsePower`) VALUES
(1, 'Model S', 'Sedan', 'Red', 'Electric', 'Tesla', 2159, '/uploads/tesla.jpg', 74999, 'Luxury electric sedan with autopilot. Price: $74,999.', 2023, 670),
(2, 'Civic', 'Sedan', 'Blue', 'Gasoline', 'Honda', 1400, '/uploads/civic.jpg', 25000, 'Reliable and fuel-efficient compact car. Price: $25,000.', 2022, 158),
(3, 'F-150', 'Truck', 'Black', 'Gasoline', 'Ford', 2500, '/uploads/ford_f150.jpg', 45000, 'Best-selling pickup truck in the US. Price: $45,000.', 2023, 400),
(4, 'Mustang', 'Coupe', 'Yellow', 'Gasoline', 'Ford', 1700, '/uploads/ford_mustang.jpg', 55000, 'American muscle car with high performance. Price: $55,000.', 2023, 480),
(5, 'Camry', 'Sedan', 'White', 'Hybrid', 'Toyota', 1600, '/uploads/toyota_camry.jpg', 32000, 'Comfortable and fuel-efficient sedan. Price: $32,000.', 2022, 208),
(6, 'Accord', 'Sedan', 'Gray', 'Gasoline', 'Honda', 1500, '/uploads/honda_accord.jpg', 35000, 'Spacious mid-size sedan with great features. Price: $35,000.', 2023, 252),
(7, 'Rav4', 'SUV', 'Blue', 'Hybrid', 'Toyota', 1700, '/uploads/toyota_rav4.jpg', 38000, 'Popular compact SUV with hybrid option. Price: $38,000.', 2023, 219),
(8, 'Corvette', 'Sports', 'Red', 'Gasoline', 'Chevrolet', 1600, '/uploads/chevrolet_corvette.jpg', 70000, 'High-performance American sports car. Price: $70,000.', 2023, 670),
(9, 'Cherokee', 'SUV', 'Black', 'Diesel', 'Jeep', 1800, '/uploads/jeep_cherokee.jpg', 40000, 'Off-road capable mid-size SUV. Price: $40,000.', 2022, 271),
(10, 'Cayenne', 'SUV', 'White', 'Gasoline', 'Porsche', 2000, '/uploads/porsche_cayenne.jpg', 90000, 'Luxury performance SUV. Price: $90,000.', 2023, 541),
(11, 'X5', 'SUV', 'White', 'Gasoline', 'BMW', 2100, '/uploads/bmw_x5.jpg', 85000, 'Premium mid-size luxury SUV. Price: $85,000.', 2023, 523),
(12, 'A4', 'Sedan', 'Black', 'Gasoline', 'Audi', 1600, '/uploads/audi_a4.jpg', 40000, 'Luxury compact sedan with modern features. Price: $40,000.', 2022, 201),
(13, 'Prius', 'Hatchback', 'Green', 'Hybrid', 'Toyota', 1400, '/uploads/toyota_prius.jpg', 27000, 'Highly efficient hybrid vehicle. Price: $27,000.', 2023, 121),
(14, 'Challenger', 'Coupe', 'Orange', 'Gasoline', 'Dodge', 1800, '/uploads/dodge_challenger.jpg', 60000, 'Powerful muscle car with aggressive styling. Price: $60,000.', 2023, 717),
(15, 'Defender', 'SUV', 'Gray', 'Diesel', 'Land Rover', 2200, '/uploads/landrover_defender.jpg', 75000, 'Rugged off-road capable luxury SUV. Price: $75,000.', 2023, 395),
(16, 'Taycan', 'Sedan', 'White', 'Electric', 'Porsche', 2050, '/uploads/porsche_taycan.jpg', 110000, 'High-performance electric luxury sedan. Price: $110,000.', 2023, 750),
(17, 'Bronco', 'SUV', 'Green', 'Gasoline', 'Ford', 2000, '/uploads/ford_bronco.jpg', 45000, 'Off-road capable adventure SUV. Price: $45,000.', 2023, 300),
(18, 'Macan', 'SUV', 'White', 'Gasoline', 'Porsche', 1900, '/uploads/porsche_macan.jpg', 60000, 'Sporty compact luxury SUV. Price: $60,000.', 2023, 375),
(19, 'G70', 'Sedan', 'Black', 'Gasoline', 'Genesis', 1700, '/uploads/genesis_g70.jpg', 42000, 'Luxury sports sedan with sleek design. Price: $42,000.', 2023, 365),
(20, 'Grand Cherokee', 'SUV', 'White', 'Hybrid', 'Jeep', 2300, '/uploads/jeep_grandcherokee.jpg', 58000, 'Spacious hybrid off-road SUV. Price: $58,000.', 2023, 375),
(21, 'Ioniq 5', 'SUV', 'Silver', 'Electric', 'Hyundai', 1800, '/uploads/hyundai_ioniq5.jpg', 48000, 'Futuristic electric crossover SUV. Price: $48,000.', 2023, 320),
(22, 'Lucid Air', 'Sedan', 'White', 'Electric', 'Lucid Motors', 1950, '/uploads/lucid_air.jpg', 120000, 'Luxury EV with an impressive range. Price: $120,000.', 2023, 1111),
(23, 'Levante', 'SUV', 'White', 'Gasoline', 'Maserati', 2100, '/uploads/maserati_levante.jpg', 88000, 'Exotic Italian luxury SUV. Price: $88,000.', 2023, 550),
(24, 'GR Supra', 'Coupe', 'Yellow', 'Gasoline', 'Toyota', 1500, '/uploads/toyota_supra.jpg', 55000, 'Iconic Japanese sports car reborn. Price: $55,000.', 2023, 382),
(25, 'EQB', 'SUV', 'Blue', 'Electric', 'Mercedes-Benz', 1900, '/uploads/mercedes_eqb.jpg', 58000, 'Electric compact SUV with premium comfort. Price: $58,000.', 2023, 288),
(26, 'Stinger', 'Sedan', 'Red', 'Gasoline', 'Kia', 1750, '/uploads/kia_stinger.jpg', 51000, 'Performance-focused luxury sports sedan. Price: $51,000.', 2023, 368),
(27, 'XC90', 'SUV', 'Black', 'Hybrid', 'Volvo', 2200, '/uploads/volvo_xc90.jpg', 72000, 'Spacious, safe, and premium hybrid SUV. Price: $72,000.', 2023, 455),
(28, 'Ranger Raptor', 'Truck', 'Orange', 'Gasoline', 'Ford', 2400, '/uploads/ford_ranger_raptor.jpg', 58000, 'High-performance off-road pickup. Price: $58,000.', 2023, 405),
(29, 'e-Tron GT', 'Sedan', 'Gray', 'Electric', 'Audi', 2100, '/uploads/audi_etron_gt.jpg', 104000, 'Sleek and powerful electric grand tourer. Price: $104,000.', 2023, 637),
(30, 'Cybertruck', 'Truck', 'Silver', 'Electric', 'Tesla', 3000, '/uploads/tesla_cybertruck.jpg', 69999, 'Futuristic electric pickup with armored glass. Price: $69,999.', 2024, 800),
(31, 'R1T', 'Truck', 'Blue', 'Electric', 'Rivian', 2700, '/uploads/rivian_r1t.jpg', 85000, 'Adventure-ready electric pickup truck. Price: $85,000.', 2024, 835),
(32, 'Emira', 'Coupe', 'Green', 'Gasoline', 'Lotus', 1400, '/uploads/lotus_emira.jpg', 96000, 'Lightweight sports car with superb handling. Price: $96,000.', 2023, 400),
(33, 'Polestar 3', 'SUV', 'White', 'Electric', 'Polestar', 2300, '/uploads/polestar_3.jpg', 83900, 'Futuristic electric luxury SUV. Price: $83,900.', 2024, 489),
(34, 'Purosangue', 'SUV', 'Red', 'Gasoline', 'Ferrari', 2033, '/uploads/ferrari_purosangue.jpg', 400000, 'Ferrari’s first luxury SUV. Price: $400,000.', 2023, 715),
(35, 'Lucid Gravity', 'SUV', 'Gray', 'Electric', 'Lucid Motors', 2300, '/uploads/lucid_gravity.jpg', 120000, 'High-performance electric luxury SUV. Price: $120,000.', 2024, 800),
(36, 'E-Type', 'Coupe', 'British Racing Green', 'Gasoline', 'Jaguar', 1250, '/uploads/jaguar_etype.jpg', 250000, 'Timeless British sports car. Price: $250,000.', 1965, 265),
(37, 'Bel Air', 'Sedan', 'Red/White', 'Gasoline', 'Chevrolet', 1497, '/uploads/chevrolet_belair.jpg', 2400, 'Classic American beauty from the 50s. Price: $2,400.', 1957, 185),
(38, 'GT40', 'Coupe', 'White/Blue Stripes', 'Gasoline', 'Ford', 980, '/uploads/ford_gt40.jpg', 10000000, 'Legendary Le Mans-winning race car. Price: $10,000,000.', 1968, 485),
(39, '300SL Gullwing', 'Coupe', 'Silver', 'Gasoline', 'Mercedes-Benz', 1295, '/uploads/mercedes_300sl.jpg', 1400000, 'Iconic luxury coupe with gullwing doors. Price: $1,400,000.', 1955, 240),
(40, '356 Speedster', 'Convertible', 'Light Blue', 'Gasoline', 'Porsche', 760, '/uploads/porsche_356.jpg', 450000, 'Elegant and lightweight classic Porsche. Price: $450,000.', 1956, 95),
(41, '911 Turbo S', 'Coupe', 'Yellow', 'Gasoline', 'Porsche', 1640, '/uploads/porsche_911_turbo_s.jpg', 210000, 'Super fast and luxurious sports coupe. Price: $210,000.', 2024, 640),
(42, 'Huracán Evo', 'Coupe', 'Orange', 'Gasoline', 'Lamborghini', 1422, '/uploads/lamborghini_huracan.jpg', 265000, 'Exotic Italian supercar with a V10. Price: $265,000.', 2023, 631),
(43, 'SF90 Stradale', 'Coupe', 'Rosso Corsa', 'Hybrid', 'Ferrari', 1570, '/uploads/ferrari_sf90.jpg', 507000, 'Hybrid supercar with extreme performance. Price: $507,000.', 2024, 986),
(44, 'GT-R Nismo', 'Coupe', 'White', 'Gasoline', 'Nissan', 1720, '/uploads/nissan_gtr_nismo.jpg', 220000, 'Japanese performance legend. Price: $220,000.', 2023, 600),
(45, 'Aston Martin Valkyrie', 'Coupe', 'Dark Green', 'Hybrid', 'Aston Martin', 1030, '/uploads/aston_martin_valkyrie.jpg', 3000000, 'Hypercar built with F1 technology. Price: $3,000,000.', 2024, 1160);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `text` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL,
  `carId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `favorite`
--

CREATE TABLE `favorite` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `carId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(191) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('USER','ADMIN') NOT NULL DEFAULT 'USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Comment_userId_fkey` (`userId`),
  ADD KEY `Comment_carId_fkey` (`carId`);

--
-- A tábla indexei `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Favorite_userId_carId_key` (`userId`,`carId`),
  ADD KEY `Favorite_carId_fkey` (`carId`);

--
-- A tábla indexei `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `Token_userId_fkey` (`userId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT a táblához `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT a táblához `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `Comment_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `Favorite_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
