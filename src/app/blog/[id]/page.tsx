import Link from 'next/link';
import { juices } from '@/data/juices';
import ClientBlogPage from './ClientBlogPage';

export async function generateStaticParams() {
  return juices.map((juice) => ({
    id: juice.id,
  }));
}

export default function BlogPage({ params }: { params: { id: string } }) {
  return <ClientBlogPage id={params.id} />;
}