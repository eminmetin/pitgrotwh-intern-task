'use client';
import { UserProfile } from '@/types/type';
import Users from '../../../../users.json';
import UserCard from '@/app/components/UserCard';

export default function User({ params }: { params: UserProfile }) {
  const slug = params.slug;
  console.log(slug);
  const filteredUser = Users.find((user) => user.slug === slug);
  return <UserCard user={filteredUser} pagetype={``} />;
}
