export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  patients: number;
  experience: number; // years
  rating: number;     // out of 5
  description: string;
  services: string[];
  schedule: { day: string; time: string }[];
  image?: string;
}

export const doctorData: Doctor[] = [
  {
    id: '1',
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    patients: 320,
    experience: 15,
    rating: 4.8,
    description:
      'Dr. John Smith is a highly experienced cardiologist specializing in heart health, preventive care, and minimally invasive procedures.',
    services: ['Heart Checkup', 'ECG', 'Stress Test', 'Cardiac Consultation'],
    schedule: [
      { day: 'Monday', time: '9am - 5pm' },
      { day: 'Tuesday', time: '10am - 4pm' },
      { day: 'Wednesday', time: '9am - 5pm' },
      { day: 'Friday', time: '10am - 3pm' },
    ],
    image: '/images/doctor1.jpg',
  },
  {
    id: '2',
    name: 'Dr. Emily Davis',
    specialty: 'Dermatologist',
    patients: 210,
    experience: 8,
    rating: 4.6,
    description:
      'Dr. Emily Davis specializes in skin care, acne treatment, and cosmetic dermatology with a patient-centered approach.',
    services: ['Skin Checkup', 'Acne Treatment', 'Laser Therapy', 'Cosmetic Consultation'],
    schedule: [
      { day: 'Tuesday', time: '11am - 5pm' },
      { day: 'Thursday', time: '10am - 4pm' },
      { day: 'Friday', time: '9am - 2pm' },
    ],
    image: '/images/doctor2.jpg',
  },
  {
    id: '3',
    name: 'Dr. Michael Lee',
    specialty: 'Pediatrician',
    patients: 150,
    experience: 12,
    rating: 4.9,
    description:
      'Dr. Michael Lee is a caring pediatrician focused on child health, immunizations, and developmental milestones.',
    services: ['Child Checkup', 'Vaccination', 'Growth Monitoring', 'Nutrition Advice'],
    schedule: [
      { day: 'Monday', time: '9am - 3pm' },
      { day: 'Wednesday', time: '10am - 4pm' },
      { day: 'Friday', time: '9am - 2pm' },
    ],
    image: '/images/doctor3.jpg',
  },
];