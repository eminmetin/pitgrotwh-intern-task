import { User, getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <nav className='bg-blue-800 p-4'>
      <ul className='flex gap-2 justify-evenly text-m text-zinc-100'>
        <li>
          <Link href='/'>Anasayfa</Link>
        </li>
        {session ? (
          <Link href='/users'>Bağlantılar</Link>
        ) : (
          <Link href='api/auth/signin'>Giriş Yap</Link>
        )}
        {session ? (
          <li>
            <Link href='api/auth/signout'>Çıkış Yap</Link>
          </li>
        ) : null}
        {session ? (
          <li>
            <Link href='hesabim'>Hesabım</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
