-- CreateEnum
CREATE TYPE "DocumentTypes" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "registrationNumber" VARCHAR(12) NOT NULL,
    "issuingBody" VARCHAR(2) NOT NULL,
    "type" "DocumentTypes" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
