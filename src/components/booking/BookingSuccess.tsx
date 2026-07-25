type BookingSuccessProps = {
  onBookAnother: () => void;
};

export default function BookingSuccess({
  onBookAnother,
}: BookingSuccessProps) {
  return (
    <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-4xl">
        ✓
      </div>

      <h2 className="text-3xl font-bold text-white">
        Booking Confirmed!
      </h2>

      <p className="mt-4 text-gray-300">
        Thank you for choosing <span className="font-semibold text-yellow-400">ShineGo</span>.
      </p>

      <p className="mt-2 text-gray-400">
        We have received your booking request.
      </p>

      <p className="mt-2 text-gray-400">
        Our team will contact you shortly to confirm your preferred time.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <a
          href="/"
          className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
        >
          Back to Home
        </a>

        <button
          onClick={onBookAnother}
          className="rounded-xl border border-yellow-400 px-6 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          Book Another Wash
        </button>
      </div>
    </div>
  );
}