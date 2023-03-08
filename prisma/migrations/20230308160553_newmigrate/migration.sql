-- CreateTable
CREATE TABLE `Promotional_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `screen_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Promotional_products` ADD CONSTRAINT `Promotional_products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotional_products` ADD CONSTRAINT `Promotional_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `User_Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotional_products` ADD CONSTRAINT `Promotional_products_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `User_screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
