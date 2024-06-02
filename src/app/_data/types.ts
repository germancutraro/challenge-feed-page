interface TweetUser {
  firstName: string;
  lastName: string;
  avatar: string;
  nickname: string;
}

interface Tweet {
  id: number;
  user: TweetUser;
  content: string;
  createdAt: string;
  likes: number;
  retweets: number;
  comments: number;
}
