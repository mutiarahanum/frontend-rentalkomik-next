import Link from 'next/link';
import PageSection from '../components/PageSection';
import KategoriChip from '../components/KategoriChip';
import {
  getKategoriList,
  getKomikList,
  getAnggotaList,
  getPeminjamanList,
} from '../lib/api';

async function HalamanUtama() {
  const [kategoriList, komikList, anggotaList, peminjamanList] =
  await Promise.all([
    getKategoriList(),
    getKomikList(),
    getAnggotaList(),
    getPeminjamanList(),
  ]);

  return (
    <>
      <div className="statistik">
        <div>
          <strong>{komikList.length}</strong>
          <span>Komik</span>
        </div>

        <div>
          <strong>{anggotaList.length}</strong>
          <span>Anggota</span>
        </div>

        <div>
          <strong>{peminjamanList.length}</strong>
          <span>Peminjaman</span>
        </div>
      </div>

      <PageSection judul="Kategori">
        <div className="kategori-list">
          {kategoriList.map((kategori) => (
            <Link key={kategori.id} href="/komik">
              <KategoriChip nama={kategori.nama_kategori} />
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}

export default HalamanUtama;