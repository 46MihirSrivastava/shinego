type DashboardStatsProps = {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
};

export default function DashboardStats({
  total,
  pending,
  confirmed,
  completed,
}: DashboardStatsProps) {
  const cards = [
    {
      title: "Total Bookings",
      value: total,
      color: "text-yellow-400",
    },
    {
      title: "Pending",
      value: pending,
      color: "text-orange-400",
    },
    {
      title: "Confirmed",
      value: confirmed,
      color: "text-green-400",
    },
    {
      title: "Completed",
      value: completed,
      color: "text-blue-400",
    },
  ];

  return (
    <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-sm text-zinc-400">{card.title}</p>

          <h2 className={`mt-2 text-4xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}