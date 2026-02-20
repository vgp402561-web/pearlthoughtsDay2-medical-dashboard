interface Props {
  schedule: { day: string; time: string }[];
}

export default function Availability({ schedule }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h3 className="text-xl font-semibold mb-2">Availability</h3>
      <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
        {schedule.map((slot, idx) => (
          <div key={idx} className="flex justify-between border-b py-1">
            <span>{slot.day}</span>
            <span>{slot.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}