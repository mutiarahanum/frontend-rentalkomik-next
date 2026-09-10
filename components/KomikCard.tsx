import StatusBadge from './StatusBadge';
import KategoriChip from './KategoriChip';
import type { Komik } from '../types';

interface KomikCardProps {
  komik: Komik;
}

function KomikCard({ komik }: KomikCardProps) {
  return (
    <article className="card">
      <h3>{komik.judul}</h3>
      <p>oleh {komik.penulis}</p>
      <KategoriChip nama={komik.nama_kategori} />
      <StatusBadge status={komik.status} />
      <p>Stok: {komik.stok}</p>
    </article>
  );
}

export default KomikCard;