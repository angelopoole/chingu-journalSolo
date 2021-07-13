import { UserInterface } from './UserInterface';

interface NoteInterface {
  user: UserInterface;
  title: string;
  body: string;
}

export type { NoteInterface };
