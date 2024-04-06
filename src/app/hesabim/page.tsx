import { UserProfile } from '@/types/type';
import { useState } from 'react';

const AccountForm = (user: UserProfile) => {
  const [formData, setFormData] = useState({
    title: user.title || '',
    location: user.location || '',
    profilePicture: user.profilePicture || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-md'
    >
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
          Departman
        </label>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className='w-full px-3 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='location'
          className='block text-gray-700 font-bold mb-2'
        >
          Lokasyon
        </label>
        <input
          type='text'
          id='location'
          name='location'
          value={formData.location}
          onChange={handleChange}
          className='w-full px-3 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='profilePicture'
          className='block text-gray-700 font-bold mb-2'
        >
          Profil Fotoğrafı URL
        </label>
        <input
          type='text'
          id='profilePicture'
          name='profilePicture'
          value={formData.profilePicture}
          onChange={handleChange}
          className='w-full px-3 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none'
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
      >
        Save Changes
      </button>
    </form>
  );
};

export default AccountForm;
