-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('HEALTHY', 'SICK', 'PREGNANT', 'SOLD', 'DECEASED');

-- CreateTable
CREATE TABLE "Cattle" (
    "id" TEXT NOT NULL,
    "tagNumber" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cattle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cattle_tagNumber_key" ON "Cattle"("tagNumber");
