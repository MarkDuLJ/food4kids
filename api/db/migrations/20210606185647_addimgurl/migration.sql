/*
  Warnings:

  - Added the required column `imgurl` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbs` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regular` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "imgurl" TEXT NOT NULL,
ADD COLUMN     "carbs" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "regular" BOOLEAN NOT NULL;
