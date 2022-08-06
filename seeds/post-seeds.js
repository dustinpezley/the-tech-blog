const { Post } = require('../models');

const postData = [
  {
    title: 'Test Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
  },
  {
    title: 'Test Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
  },
  {
    title: 'Test Post 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
  },
  {
    title: 'Test Post 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
  },
  {
    title: 'Test Post 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
  },
  {
    title: 'Test Post 6',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
  },
  {
    title: 'Test Post 7',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
  },
  {
    title: 'Test Post 8',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
  },
  {
    title: 'Test Post 9',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
  },
  {
    title: 'Test Post 10',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
  },
  {
    title: 'Test Post 11',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
  },
  {
    title: 'Test Post 12',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
  },
  {
    title: 'Test Post 13',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
  },
  {
    title: 'Test Post 14',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
  },
  {
    title: 'Test Post 15',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
  },
  {
    title: 'Test Post 16',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
  },
  {
    title: 'Test Post 17',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
  },
  {
    title: 'Test Post 18',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
  },
  {
    title: 'Test Post 19',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
  },
  {
    title: 'Test Post 20',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
  },
  {
    title: 'Test Post 21',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
  },
  {
    title: 'Test Post 22',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
  },
  {
    title: 'Test Post 23',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
  },
  {
    title: 'Test Post 24',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
  },
  {
    title: 'Test Post 25',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
  },
  {
    title: 'Test Post 26',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
  },
  {
    title: 'Test Post 27',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
  },
  {
    title: 'Test Post 28',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
  },
  {
    title: 'Test Post 29',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
  },
  {
    title: 'Test Post 30',
    content: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
  },
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;
