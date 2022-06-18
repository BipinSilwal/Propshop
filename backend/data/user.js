import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'bipin silwal',
    email: 'bpnsilwal12@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: ' biplov silwal',
    email: 'bpnsilwal14@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
