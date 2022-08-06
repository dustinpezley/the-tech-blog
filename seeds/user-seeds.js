const { User } = require('../models');

const userData = [
  {
    username: 'testuser1',
    email: 'testuser1@test.com',
    password: 'testpassword#1',
  },
  {
    username: 'testuser2',
    email: 'testuser2@test.com',
    password: 'testpassword#2',
  },
  {
    username: 'testuser3',
    email: 'testuser3@test.com',
    password: 'testpassword#3',
  },
  {
    username: 'testuser4',
    email: 'testuser4@test.com',
    password: 'testpassword#4',
  },
  {
    username: 'testuser5',
    email: 'testuser5@test.com',
    password: 'testpassword#5',
  },
  {
    username: 'testuser6',
    email: 'testuser6@test.com',
    password: 'testpassword#6',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
