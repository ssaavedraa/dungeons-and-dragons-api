/*
  Warnings:

  - You are about to drop the column `passive_wisdom` on the `Character` table. All the data in the column will be lost.
  - Added the required column `passiveWisdom` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "passive_wisdom",
ADD COLUMN     "passiveWisdom" INTEGER NOT NULL;
