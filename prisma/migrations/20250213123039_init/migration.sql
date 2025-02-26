/*
  Warnings:

  - You are about to drop the column `model` on the `cars` table. All the data in the column will be lost.
  - Added the required column `mass` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cars` DROP COLUMN `model`,
    ADD COLUMN `mass` INTEGER NOT NULL;
