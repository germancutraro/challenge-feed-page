import { TweetsItem } from "./tweets-item";

interface TweetsListProps {
  tweets: Tweet[];
  shouldRedirect: boolean;
  showTopDate: boolean;
}

export function TweetsList({
  tweets,
  shouldRedirect,
  showTopDate,
}: TweetsListProps) {
  return (
    <div className="flex flex-col gap-2">
      {tweets.map((tweet) => (
        <TweetsItem
          key={tweet.id}
          tweet={tweet}
          shouldRedirect={shouldRedirect}
          showTopDate={showTopDate}
        />
      ))}
    </div>
  );
}
