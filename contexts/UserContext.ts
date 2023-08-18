import { createContext } from 'react';

export type User = {
  username: string
}

type UserContextProps = {
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextProps | null>(null);
