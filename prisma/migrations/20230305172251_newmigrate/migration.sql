-- AlterTable
ALTER TABLE `User_screen` ADD COLUMN `color` VARCHAR(191) NOT NULL DEFAULT '#FFFFFF',
    ADD COLUMN `color_title` VARCHAR(191) NOT NULL DEFAULT '#FFFFFF',
    MODIFY `font_family_title` VARCHAR(191) NOT NULL DEFAULT '''Lilita One'', cursive';
