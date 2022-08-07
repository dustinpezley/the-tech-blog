const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'testuser1',
    email: 'testuser1@test.com',
    password: bcrypt.hashSync('testpassword#1', 10),
  },
  {
    username: 'testuser2',
    email: 'testuser2@test.com',
    password: bcrypt.hashSync('testpassword#2', 10),
  },
  {
    username: 'testuser3',
    email: 'testuser3@test.com',
    password: bcrypt.hashSync('testpassword#3', 10),
  },
  {
    username: 'testuser4',
    email: 'testuser4@test.com',
    password: bcrypt.hashSync('testpassword#4', 10),
  },
  {
    username: 'testuser5',
    email: 'testuser5@test.com',
    password: bcrypt.hashSync('testpassword#5', 10),
  },
  {
    username: 'testuser6',
    email: 'testuser6@test.com',
    password: bcrypt.hashSync('testpassword#6', 10),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
