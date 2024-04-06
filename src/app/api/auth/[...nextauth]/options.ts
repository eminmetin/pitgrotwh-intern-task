import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import loginInfo from '../../../lib/login.json';
import md5 from 'md5';
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Kullanıcı Adı',
          type: 'text',
          placeholder: 'Kullanıcı Adı giriniz',
        },
        password: {
          label: 'Şifre',
          type: 'password',
          placeholder: 'Şifrenizi giriniz',
        },
      },
      async authorize(credentials) {
        let hash;
        if (credentials !== undefined) {
          hash = md5(credentials.password);
        }
        const user = {
          id: '1',
          name: 'John Doe',
          password: '81dc9bdb52d04dc20036dbd8313ed055',
          email: 'john.doe@example.com',
          image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        };
        if (loginInfo.data.user.name === user.name && hash === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
