import DoctorHeader from '../../../components/doctor/DoctorHeader';
import DoctorStats from '../../../components/doctor/DoctorStats';
import AboutDoctor from '../../../components/doctor/AboutDoctor';
import ServiceDetails from '../../../components/doctor/ServiceDetails';
import Availability from '../../../components/doctor/Availability';
import { doctorData } from '../../../features/doctor/doctor.data';

interface Props {
  params: { id: string };
}

export default function DoctorPage({ params }: Props) {
  const doctor = doctorData.find(d => d.id === params.id);
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="p-4 space-y-4">
      <DoctorHeader name={doctor.name} specialty={doctor.specialty} />
      <DoctorStats patients={doctor.patients || 120} experience={doctor.experience || 10} rating={doctor.rating || 4.5} />
      <AboutDoctor description={doctor.description || "Experienced doctor providing excellent healthcare services."} />
      <ServiceDetails services={doctor.services || ["Consultation", "Follow-up", "Online advice"]} />
      <Availability schedule={doctor.schedule || [{ day: "Mon-Fri", time: "9am - 5pm" }]} />
    </div>
  );
}