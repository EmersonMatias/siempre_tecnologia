-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(250) NULL DEFAULT 'Endereço não fornecido',
    `price` INTEGER NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `account_type` ENUM('user', 'admin') NOT NULL DEFAULT 'user',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_name` VARCHAR(150) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `size` INTEGER NULL,
    `user_id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `screen_id` INTEGER NOT NULL,

    UNIQUE INDEX `User_files_file_name_key`(`file_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `product` VARCHAR(150) NOT NULL,
    `type` VARCHAR(150) NOT NULL,
    `price` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_screen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `screen_name` VARCHAR(150) NOT NULL,
    `background_url` VARCHAR(191) NOT NULL,
    `show_counter` BOOLEAN NOT NULL DEFAULT true,
    `show_productstable` BOOLEAN NOT NULL DEFAULT true,
    `show_banner` BOOLEAN NOT NULL DEFAULT true,
    `table_lines` INTEGER NOT NULL DEFAULT 5,
    `space_lines` INTEGER NOT NULL DEFAULT 1,
    `font_size` INTEGER NOT NULL DEFAULT 2,
    `font_family` VARCHAR(191) NOT NULL DEFAULT '''Roboto'', sans-serif;',
    `color_lines` VARCHAR(191) NOT NULL DEFAULT '',
    `width_table` INTEGER NOT NULL DEFAULT 78,
    `price_position` VARCHAR(191) NOT NULL DEFAULT 'center',
    `product_position` VARCHAR(191) NOT NULL DEFAULT 'center',
    `background_color_title` VARCHAR(191) NOT NULL DEFAULT '',
    `font_family_title` VARCHAR(191) NOT NULL DEFAULT '''Lilita One'', cursive',
    `color` VARCHAR(191) NOT NULL DEFAULT '#FFFFFF',
    `color_title` VARCHAR(191) NOT NULL DEFAULT '#FFFFFF',
    `banner_time` INTEGER NOT NULL DEFAULT 3000,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_screen_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `screen_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotional_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `screen_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_files` ADD CONSTRAINT `User_files_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_files` ADD CONSTRAINT `User_files_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `User_screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Products` ADD CONSTRAINT `User_Products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_screen` ADD CONSTRAINT `User_screen_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_screen_products` ADD CONSTRAINT `User_screen_products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_screen_products` ADD CONSTRAINT `User_screen_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `User_Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_screen_products` ADD CONSTRAINT `User_screen_products_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `User_screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotional_products` ADD CONSTRAINT `Promotional_products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotional_products` ADD CONSTRAINT `Promotional_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `User_Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotional_products` ADD CONSTRAINT `Promotional_products_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `User_screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
