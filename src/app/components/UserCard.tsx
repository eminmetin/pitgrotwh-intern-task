import { UserProfile } from '@/types/type';
import users from '../../../users.json';
import Image from 'next/image';

type User = UserProfile | undefined;

type Props = {
  user: User;
  pagetype: string;
};
export default function UserCard({ user }: Props) {
  const girisYap = user?.name ? <div>Merhaba {user.name}!</div> : null;

  if (!user) {
    return null;
  }

  return (
    <div
      id='container'
      className='p-20 w-auto flex px-24 bg-blue-300   justify-center relative'
    >
      <div
        id='container'
        className='p-20 bg-blue-100 rounded-lg sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative'
      >
        <div className='mr-10 text-center '>
          <Image
            className='rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto'
            src={user.profilePicture || 'https://example.com'}
            alt='image of myself'
            width={300}
            height={300}
          />
        </div>
        <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[50%]'>
          <h1 className='text-slate-900 font-bold text-3xl mt-6 mb-8'>
            Hey its me, {user?.name}
          </h1>

          <p className='text-slate-600 w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10'>
            {user?.bio}
          </p>

          <div className=''></div>
        </div>
      </div>
    </div>
  );
}
