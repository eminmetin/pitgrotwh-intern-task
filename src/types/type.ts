export interface UserProfile {
  id: string | undefined | null;
  name: string | undefined | null;
  title: string | undefined | null;
  location: string | undefined | null;
  bio: string | undefined | null;
  profilePicture: string | undefined | null;
  likes: number[] | undefined | null;
  slug: string | undefined | null;
}
