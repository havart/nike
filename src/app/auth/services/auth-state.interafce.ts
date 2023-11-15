import { User } from 'firebase/auth';

export interface IAuthState {
  user: User | null | undefined;
}
