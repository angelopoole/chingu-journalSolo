import { v4 as uuidv4 } from 'uuid';

export const fetchUsers = async () => {
  return new Promise(resolve => setTimeout(resolve(users), 2000));
};

export const fetchJournalEntries = async () => {
  return new Promise(resolve => setTimeout(resolve(journalEntries), 2000));
};

const angeloId = uuidv4();
const jackId = uuidv4();
const tanId = uuidv4();

const users = [
  { _id: angeloId, username: 'angelo', pass: 123 },
  { _id: jackId, username: 'jack', pass: 234 },
  { _id: tanId, username: 'tan', pass: 345 },
];

const journalEntries = [
  {
    _id: `${angeloId}`,
    title: 'title',
    subTitle: 'subTitle',
    journalBody: 'journalBody',
    tags: ['misc', 'action', 'cool'],
    dueDate: null,
  },
  {
    _id: `${angeloId}`,
    title: 'title',
    subTitle: 'subTitle',
    journalBody: 'journalBody',
    tags: ['misc', 'action', 'cool'],
    dueDate: null,
  },
  {
    _id: `${jackId}`,
    title: 'title',
    subTitle: 'subTitle',
    journalBody: 'journalBody',
    tags: ['misc', 'action', 'cool'],
    dueDate: null,
  },
];
