-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('CAR', 'BIKE');

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "vehicleType" "VehicleType" NOT NULL,
    "service" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "bookingTime" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
