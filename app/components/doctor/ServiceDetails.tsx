interface Props {
  services: string[];
}

export default function ServiceDetails({ services }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h3 className="text-xl font-semibold mb-2">Services</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm">
        {services.map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>
    </div>
  );
}