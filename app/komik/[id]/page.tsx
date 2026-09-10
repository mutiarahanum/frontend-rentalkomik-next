import { notFound } from 'next/navigation';
import Link from 'next/link';
import StatusBadge from '../../../components/StatusBadge';
import KategoriChip from '../../../components/KategoriChip';
import { getKomikById } from '../../../lib/api';

interface HalamanDetailKomikProps {
  params: Promise<{ id: string }>;
}

async function HalamanDetailKomik({ params }: HalamanDetailKomikProps) {
  const { id } = await params;
  const komik = await getKomikById(id);

  if (!komik) {
    notFound();
  }

  return (
    <article className="komik-detail">
      <Link href="/komik">← Kembali ke Daftar Komik</Link>

      <h2>{komik.judul}</h2>

      <p>oleh {komik.penulis}</p>

      <KategoriChip nama={komik.nama_kategori} />

      <StatusBadge status={komik.status} />

      <p>Stok tersedia: {komik.stok}</p>
    </article>
  );
}

export default HalamanDetailKomik;