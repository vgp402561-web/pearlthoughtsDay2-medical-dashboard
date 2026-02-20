interface Props {
  name: string;
  specialty: string;
  image?: string;
}

export default function DoctorHeader({ name, specialty, image }: Props) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow">
      <img
        src={image || '/images/doctor-placeholder.png'}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">{specialty}</p>
      </div>
    </div>
  );
}