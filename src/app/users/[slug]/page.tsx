'use client';
import { UserProfile } from '@/types/type';
import Users from '../../../../users.json';
import UserCard from '@/app/components/UserCard';

export default function User({ params }: { params: UserProfile }) {
  console.log(slug);
  const slug = params.slug;
  const filteredUser = Users.find((user) => user.slug === slug);
  return <UserCard user={filteredUser} pagetype={``} />;
}
