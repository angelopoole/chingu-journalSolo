interface JournalEntrie {
  _id: number;
  title: string;
  subTitle: string;
  journalBody: string;
  tags: string[];
  dueDate: null | number;
}

interface UserData {
  user: {
    _id: number;
    title: string;
    subTitle: string;
    journalBody: string;
    tags: string[];
    dueDate: null | number;
  };
  posts: JournalEntrie[];
}

export type { JournalEntrie, UserData };
