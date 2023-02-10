/*
  Warnings:

  - You are about to drop the `User_Files` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User_Files` DROP FOREIGN KEY `User_Files_user_id_fkey`;

-- DropTable
DROP TABLE `User_Files`;

-- CreateTable
CREATE TABLE `User_files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_name` VARCHAR(150) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `size` INTEGER NULL,
    `user_id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_files_file_name_key`(`file_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_files` ADD CONSTRAINT `User_files_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
