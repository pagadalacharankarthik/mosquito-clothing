import { redirect } from 'next/navigation'

export const metadata = {
  title: 'New Arrivals - MOSQUITO',
}

export default function NewArrivalsPage() {
  redirect('/shop')
}
