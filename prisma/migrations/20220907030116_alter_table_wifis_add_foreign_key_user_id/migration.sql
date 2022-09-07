/*
  Warnings:

  - Added the required column `userId` to the `Wifis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wifis" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Wifis" ADD CONSTRAINT "Wifis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
