import Link from 'next/link';

function Navigasi() {
  return (
    <nav>
      <Link href="/">Beranda</Link>
      <Link href="/komik">Komik</Link>
      <Link href="/anggota">Anggota</Link>
      <Link href="/peminjaman">Peminjaman</Link>
    </nav>
  );
}

export default Navigasi;