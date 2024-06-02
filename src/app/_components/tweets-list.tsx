import { TweetsItem } from "./tweets-item";

interface TweetsListProps {
  tweets: Tweet[];
}

export function TweetsList({ tweets }: TweetsListProps) {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetsItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}
