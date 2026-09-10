import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang kamu cari tidak tersedia.</p>
      <Link href="/">← Kembali ke Beranda</Link>
    </div>
  );
}