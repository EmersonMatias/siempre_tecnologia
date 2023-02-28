/*
  Warnings:

  - Added the required column `screen_id` to the `User_files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_files` ADD COLUMN `screen_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User_files` ADD CONSTRAINT `User_files_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `User_screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
