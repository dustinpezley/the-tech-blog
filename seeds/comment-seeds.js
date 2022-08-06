const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
    post_id: 2,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
    post_id: 5,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
    post_id: 6,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 7,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 8,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
    post_id: 8,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
    post_id: 9,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 2,
    post_id: 9,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 9,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
    post_id: 10,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 5,
    post_id: 10,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
    post_id: 11,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 13,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 4,
    post_id: 15,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 1,
    post_id: 28,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 3,
    post_id: 30,
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adip',
    user_id: 6,
    post_id: 30,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;
