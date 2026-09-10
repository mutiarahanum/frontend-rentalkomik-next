import Link from 'next/link';
import KomikCard from './KomikCard';
import type { Komik } from '../types';

interface DaftarKomikProps {
  komiks: Komik[];
}

function DaftarKomik({ komiks }: DaftarKomikProps) {
  if (komiks.length === 0) {
    return <p>Belum ada komik.</p>;
  }

  return (
    <div className="grid-komik">
      {komiks.map((komik) => (
        <Link key={komik.id} href={`/komik/${komik.id}`}>
          <KomikCard komik={komik} />
        </Link>
      ))}
    </div>
  );
}

export default DaftarKomik;
