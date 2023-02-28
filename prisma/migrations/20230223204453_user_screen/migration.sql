/*
  Warnings:

  - Added the required column `background_url` to the `User_screen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_screen` ADD COLUMN `background_url` VARCHAR(191) NOT NULL;
