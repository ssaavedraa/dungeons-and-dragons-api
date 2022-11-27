/*
  Warnings:

  - A unique constraint covering the columns `[statisticsId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[skillsId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `skillsId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statisticsId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "skillsId" INTEGER NOT NULL,
ADD COLUMN     "statisticsId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Character_statisticsId_key" ON "Character"("statisticsId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_skillsId_key" ON "Character"("skillsId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_statisticsId_fkey" FOREIGN KEY ("statisticsId") REFERENCES "Statistics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
