import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YIKAI',
  description:
    'Zhejiang YIKAI Import and Export Co., Ltd. specializes in hydraulic systems for construction machinery, focusing on supplying core components such as pumps, cylinders, and control valves for dump trucks, forklifts, and excavators. We have established a global hydraulic system service network covering research and development, production, and sales, with business extending to over 30 countries worldwide.',
};

export default function Root() {
  redirect('/home');
}
