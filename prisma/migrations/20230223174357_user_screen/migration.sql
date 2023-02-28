-- CreateTable
CREATE TABLE `User_screen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `screen_number` INTEGER NOT NULL,
    `screen_name` VARCHAR(150) NOT NULL,
    `show_counter` BOOLEAN NOT NULL DEFAULT true,
    `show_productstable` BOOLEAN NOT NULL DEFAULT true,
    `show_banner` BOOLEAN NOT NULL DEFAULT true,
    `table_lines` INTEGER NOT NULL DEFAULT 1,
    `space_lines` INTEGER NOT NULL DEFAULT 1,
    `font_size` INTEGER NOT NULL DEFAULT 1,
    `font_family` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_screen` ADD CONSTRAINT `User_screen_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
