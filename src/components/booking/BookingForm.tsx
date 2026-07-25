"use client";

import { useState } from "react";
import BookingSuccess from "./BookingSuccess";

export default function BookingForm() {
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
  const [bookingCompleted, setBookingCompleted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");

    if (formData.customerName.trim().length < 3) {
      setMessage("Please enter a valid name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.address.trim()) {
      setMessage("Please enter your address.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(formData.bookingDate);

    if (selectedDate < today) {
      setMessage("Booking date cannot be in the past.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          customerName: formData.customerName.trim(),
          address: formData.address.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setBookingCompleted(true);

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
        setMessage("Booking failed. Please try again.");
      }
    } catch {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (bookingCompleted) {
    return (
      <BookingSuccess
        onBookAnother={() => {
          setBookingCompleted(false);
          setMessage("");
        }}
      />
    );
  }

  return (
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
            min={new Date().toISOString().split("T")[0]}
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
        className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300 disabled:opacity-70"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>

      {message && (
        <p className="text-center font-medium text-red-400">
          {message}
        </p>
      )}
    </form>
  );
}