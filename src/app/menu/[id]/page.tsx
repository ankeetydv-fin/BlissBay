import { juices } from '@/data/juices';
import ClientMenuPage from './ClientMenuPage';

export async function generateStaticParams() {
  return juices.map((juice) => ({
    id: juice.id,
  }));
}

export default function JuiceDetailPage({ params }: { params: { id: string } }) {
  return <ClientMenuPage id={params.id} />;
}