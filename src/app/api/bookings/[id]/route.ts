import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = Promise<{
  id: string;
}>;

export async function PATCH(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const booking = await prisma.booking.update({
      where: {
        id,
      },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update booking status.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { id } = await params;

    await prisma.booking.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete booking.",
      },
      {
        status: 500,
      }
    );
  }
}