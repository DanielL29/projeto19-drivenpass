/*
  Warnings:

  - A unique constraint covering the columns `[registrationNumber]` on the table `Documents` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Documents_registrationNumber_key" ON "Documents"("registrationNumber");
