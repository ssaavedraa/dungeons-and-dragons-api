/*
  Warnings:

  - You are about to drop the column `preception` on the `Skills` table. All the data in the column will be lost.
  - Added the required column `perception` to the `Skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "preception",
ADD COLUMN     "perception" INTEGER NOT NULL;
