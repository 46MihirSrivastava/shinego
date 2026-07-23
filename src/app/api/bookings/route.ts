import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const booking = await prisma.booking.create({
      data: {
        customerName: body.customerName,
        phone: body.phone,
        vehicleType: body.vehicleType,
        service: body.service,
        address: body.address,
        bookingDate: new Date(body.bookingDate),
        bookingTime: body.bookingTime,
      },
    });

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}