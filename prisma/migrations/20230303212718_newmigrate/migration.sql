-- AlterTable
ALTER TABLE `User_screen` ADD COLUMN `price_position` VARCHAR(191) NOT NULL DEFAULT 'center',
    ADD COLUMN `product_position` VARCHAR(191) NOT NULL DEFAULT 'center';
