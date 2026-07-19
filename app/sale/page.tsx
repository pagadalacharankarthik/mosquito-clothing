import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Sale - MOSQUITO',
}

export default function SalePage() {
  redirect('/shop')
}
