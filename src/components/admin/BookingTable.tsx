"use client";

import { useMemo, useState } from "react";

type Booking = {
  id: string;
  customerName: string;
  phone: string;
  vehicleType: string;
  service: string;
  bookingDate: string | Date;
  bookingTime: string;
  status: string;
};

export default function BookingTable({
  bookings,
}: {
  bookings: Booking[];
}) {
  const [search, setSearch] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filteredBookings = useMemo(() => {
    const value = search.toLowerCase();

    return bookings.filter(
      (booking) =>
        booking.customerName.toLowerCase().includes(value) ||
        booking.phone.includes(value)
    );
  }, [bookings, search]);

  async function updateStatus(id: string, status: string) {
    setUpdatingId(id);

    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to update booking status.");
    } finally {
      setUpdatingId(null);
    }
  }

  async function deleteBooking(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking");
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to delete booking.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by customer name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-zinc-800">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Vehicle</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="py-8 text-center text-zinc-400"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-t border-zinc-800 hover:bg-zinc-900/50"
                >
                  <td className="px-4 py-4">{booking.customerName}</td>

                  <td className="px-4 py-4">{booking.phone}</td>

                  <td className="px-4 py-4">{booking.vehicleType}</td>

                  <td className="px-4 py-4">{booking.service}</td>

                  <td className="px-4 py-4">
                    {new Date(booking.bookingDate).toLocaleDateString(
                      "en-IN"
                    )}
                  </td>

                  <td className="px-4 py-4">{booking.bookingTime}</td>

                  <td className="px-4 py-4">
                    <select
                      value={booking.status}
                      disabled={
                        updatingId === booking.id ||
                        deletingId === booking.id
                      }
                      onChange={(e) =>
                        updateStatus(booking.id, e.target.value)
                      }
                      className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-yellow-400 disabled:opacity-50"
                    >
                      <option value="PENDING">Pending</option>
                      <option value="CONFIRMED">Confirmed</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </td>

                  <td className="px-4 py-4">
                    <button
                      type="button"
                      onClick={() => deleteBooking(booking.id)}
                      disabled={
                        updatingId === booking.id ||
                        deletingId === booking.id
                      }
                      className="rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20 disabled:opacity-50"
                    >
                      {deletingId === booking.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}