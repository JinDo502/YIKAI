import { redirect } from 'next/navigation';
import { ProductMenu } from '@/common/menu';

export default function Categories() {
  redirect(`/categories/${ProductMenu[0].name}`);
}
