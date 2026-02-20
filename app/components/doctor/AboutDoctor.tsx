interface Props {
  description: string;
}

export default function AboutDoctor({ description }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h3 className="text-xl font-semibold mb-2">About Doctor</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}