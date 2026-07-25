import BookingForm from "@/components/booking/BookingForm";

export default function BookPage() {
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
          {/* Left Side */}
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

          {/* Right Side */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 lg:col-span-2">
            <h2 className="mb-6 text-3xl font-bold">
              Booking Form
            </h2>

            <BookingForm />
          </div>
        </div>
      </div>
    </main>
  );
}