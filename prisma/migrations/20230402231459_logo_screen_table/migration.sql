-- CreateTable
CREATE TABLE `logo_screen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `screen_id` INTEGER NOT NULL,
    `original_name` VARCHAR(150) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `size` INTEGER NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `logo_screen_screen_id_key`(`screen_id`),
    UNIQUE INDEX `logo_screen_file_name_key`(`file_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `logo_screen` ADD CONSTRAINT `logo_screen_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `User_screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
