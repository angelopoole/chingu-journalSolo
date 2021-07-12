interface Note {
  _id: string;
  author: string;
  title: string;
  body: string;
}

interface User {
  _id: number;
  name: string;
  email: string;
  token: string;
}

type Stateuser = User | false;

export type { Note, User, Stateuser };

// tags: string[];
// dueDate: null | number;

// interface UserData {
//   user: {
//     _id: number;
//     title: string;
//     subTitle: string;
//     journalBody: string;
//     tags: string[];
//     dueDate: null | number;
//   };
//   posts: JournalEntrie[];
// }
