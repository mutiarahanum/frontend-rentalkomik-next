import type { Anggota } from '../types';

interface AnggotaCardProps {
  anggota: Anggota;
}

function AnggotaCard({ anggota }: AnggotaCardProps) {
  return (
    <article className="card">
      <h3>{anggota.nama}</h3>
      <p>{anggota.no_hp}</p>
      <p>{anggota.alamat}</p>
      <p>Terdaftar sejak {anggota.tanggal_daftar}</p>
    </article>
  );
}

export default AnggotaCard;