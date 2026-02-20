interface Props {
  patients: number;
  experience: number; // years
  rating: number;     // out of 5
}

export default function DoctorStats({ patients, experience, rating }: Props) {
  return (
    <div className="flex justify-around bg-white p-4 rounded-xl shadow mt-4">
      <div className="text-center">
        <p className="text-lg font-bold">{patients}</p>
        <p className="text-gray-500 text-sm">Patients</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">{experience} yrs</p>
        <p className="text-gray-500 text-sm">Experience</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">{rating} ⭐</p>
        <p className="text-gray-500 text-sm">Rating</p>
      </div>
    </div>
  );
}