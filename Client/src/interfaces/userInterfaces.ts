interface User {
  _id: number;
  name: string;
  email: string;
  token: string;
}

type Stateuser = User | false;

export type { User, Stateuser };
