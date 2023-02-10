-- CreateTable
CREATE TABLE `User_Files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_name` VARCHAR(150) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `size` INTEGER NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `User_Files_file_name_key`(`file_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Files` ADD CONSTRAINT `User_Files_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
