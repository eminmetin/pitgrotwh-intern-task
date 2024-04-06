import { getServerSession } from 'next-auth';
import UserCard from './components/UserCard';
import User from './users/[slug]/page';

export default async function Home() {
  const session: any = await getServerSession();

  console.log(session?.user);
  return (
    <main className='flex w-full h-full flex-col items-center justify-center p-24'>
      <h2>PitGrowth Intern Task -A nasayfa</h2>
      <UserCard user={session} pagetype='' />
    </main>
  );
}
