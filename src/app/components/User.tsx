'use client';
import Image from 'next/image';
import React from 'react';
import users from '../../../users.json';
import userProfilePhoto from '../../../public/vercel.svg';
import Link from 'next/link';

const User: React.FC = () => {
  // Bileşen içeriği buraya gelecek
  return (
    <main className='profile-page  '>
      <div className='container mx-auto px-4'>
        {users.map((user) => (
          <div
            key={user.id}
            className='relative  shadow-xl flex flex-col min-w-0 break-words bg-white w-full my-6  rounded-lg'
          >
            <div className='px-6'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'></div>
              </div>
              <div className='text-center mt-12'>
                <Image
                  src={user.profilePicture}
                  alt='profile-icon'
                  width={80}
                  height={80}
                  className='mx-auto rounded-md'
                ></Image>
                <h3 className='text-4xl font-semibold leading-normal text-blueGray-700 mb-2'>
                  {user.name}
                </h3>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                  {user.location}
                </div>
                <div className='mb-2 text-blueGray-600 mt-10'>
                  <i className='fas fa-briefcase mr-2 text-lg text-blueGray-400'></i>
                  {user.title}
                </div>
              </div>
              <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-9/12 px-4'>
                    <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                      {user.bio}
                    </p>
                  </div>
                </div>
                <Link
                  className='border hover:bg-slate-500 hover:text-white text-black p-2 rounded-xl'
                  href={`users/${user.slug}`}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default User;
