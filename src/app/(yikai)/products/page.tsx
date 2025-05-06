import { redirect } from 'next/navigation';
import { ProductMenu } from '@/common/menu';

export default function Products() {
  redirect(`/products/${ProductMenu[0].name}`);
}
