import type { Metadata } from 'next';
import SpinnyWarrantyClient from './SpinnyWarrantyClient';

export const metadata: Metadata = {
  title: 'Spinny Warranty Resolution | Mudit Garg',
  description:
    'How redesigning the warranty ticket data model cut duplicate tickets by 40%, raised CSAT from 55 to 72, and sped up turnaround by 10 hours across 2,100 monthly cases.',
};

export default function SpinnyWarrantyPage() {
  return <SpinnyWarrantyClient />;
}
