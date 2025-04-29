import { redirect } from 'next/navigation';
import { menu } from '@/public/ProductsConstant/menu';

export default function Products() {
  redirect(`/products/${menu[0].name}`);
}
