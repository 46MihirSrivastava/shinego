"use client";

import { useState } from "react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    vehicleType: "CAR",
    service: "Basic Wash",
    address: "",
    bookingDate: "",
    bookingTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Booking submitted successfully!");

        setFormData({
          customerName: "",
          phone: "",
          vehicleType: "CAR",
          service: "Basic Wash",
          address: "",
          bookingDate: "",
          bookingTime: "",
        });
      } else {
        setMessage("❌ Failed to submit booking.");
      }
    } catch {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-bold">Book Your Wash</h1>

          <p className="mt-4 text-lg text-gray-400">
            Schedule your doorstep car or bike wash in just a few minutes.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8">
            <h2 className="mb-6 text-2xl font-bold text-yellow-400">
              Why Choose ShineGo?
            </h2>

            <ul className="space-y-5 text-gray-300">
              <li>✅ Professional doorstep service</li>
              <li>✅ Eco-friendly cleaning products</li>
              <li>✅ Affordable pricing</li>
              <li>✅ Easy online booking</li>
              <li>✅ Trusted service in Hajipur</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 lg:col-span-2">
            <h2 className="mb-6 text-3xl font-bold">Booking Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block">Full Name</label>

                <input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="mb-2 block">Phone Number</label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="9876543210"
                  className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-yellow-400"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block">Vehicle Type</label>

                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  >
                    <option value="CAR">Car</option>
                    <option value="BIKE">Bike</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block">Service</label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  >
                    <option>Basic Wash</option>
                    <option>Premium Wash</option>
                    <option>Interior Cleaning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block">Address</label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter your address"
                  className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block">Booking Date</label>

                  <input
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    required
                    type="date"
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  />
                </div>

                <div>
                  <label className="mb-2 block">Preferred Time</label>

                  <input
                    name="bookingTime"
                    value={formData.bookingTime}
                    onChange={handleChange}
                    required
                    type="time"
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>

              {message && (
                <p className="text-center text-lg font-medium">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}