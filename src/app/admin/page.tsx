import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BookingTable from "@/components/admin/BookingTable";
import DashboardStats from "@/components/admin/DashboardStats";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "PENDING"
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "CONFIRMED"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "COMPLETED"
  ).length;

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">
              ShineGo Admin Dashboard
            </h1>

            <p className="mt-2 text-zinc-400">
              Manage your customer bookings
            </p>
          </div>

          <LogoutButton />
        </div>

        <DashboardStats
          total={totalBookings}
          pending={pendingBookings}
          confirmed={confirmedBookings}
          completed={completedBookings}
        />

        <BookingTable bookings={bookings} />
      </div>
    </main>
  );
}