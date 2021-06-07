/*
  Warnings:

  - The values [MainFood] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `servingsize` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `packsize` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `fat` on the `Food` table. All the data in the column will be lost.
  - You are about to alter the column `stock` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `calories` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `sodium` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `protein` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `price` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `carbs` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - Added the required column `servingSize` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalFat` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('Fruit', 'Snack', 'CanMeat', 'CanVeg', 'Veg', 'Grains', 'Drink');
ALTER TABLE "Food" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Food" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
ALTER TABLE "Food" ALTER COLUMN "category" SET DEFAULT 'Fruit';
COMMIT;

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "servingsize",
DROP COLUMN "packsize",
DROP COLUMN "fat",
ADD COLUMN     "packSize" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "servingSize" INTEGER NOT NULL,
ADD COLUMN     "totalFat" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "stock" SET DEFAULT 0,
ALTER COLUMN "stock" SET DATA TYPE INTEGER,
ALTER COLUMN "calories" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "sodium" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "protein" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "carbs" SET DATA TYPE DOUBLE PRECISION;
