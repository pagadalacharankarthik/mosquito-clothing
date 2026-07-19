import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Best Sellers - MOSQUITO',
}

export default function BestSellersPage() {
  redirect('/shop')
}
