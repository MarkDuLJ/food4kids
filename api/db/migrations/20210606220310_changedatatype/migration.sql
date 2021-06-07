/*
  Warnings:

  - You are about to alter the column `calories` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `fat` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `sodium` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `protein` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `price` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `carbs` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "servingsize" SET DATA TYPE BIGINT,
ALTER COLUMN "packsize" SET DEFAULT 0,
ALTER COLUMN "packsize" SET DATA TYPE BIGINT,
ALTER COLUMN "stock" SET DEFAULT 0,
ALTER COLUMN "stock" SET DATA TYPE BIGINT,
ALTER COLUMN "calories" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "fat" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "sodium" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "protein" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "carbs" SET DATA TYPE DECIMAL(65,30);
