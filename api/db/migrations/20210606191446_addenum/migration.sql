/*
  Warnings:

  - The `category` column on the `Food` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Fruit', 'Snack', 'CanMeat', 'CanVeg', 'Veg', 'MainFood', 'Drink');

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL DEFAULT E'Fruit',
ALTER COLUMN "imgurl" DROP NOT NULL;
