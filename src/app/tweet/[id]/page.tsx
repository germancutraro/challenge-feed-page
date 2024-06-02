import tweets from "@/app/_data/tweets.json";
import { TweetsItem } from "@/app/_components/tweets-item";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { TweetsComments } from "@/app/_components/tweets-comments";

interface TweetPageProps {
  params: Params;
}

export default function TweetPage({ params }: TweetPageProps) {
  const id = Number(params.id);
  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    return <h1>Not found</h1>;
  }

  return (
    <div>
      <TweetsItem tweet={tweet} shouldRedirect={false} />
      <TweetsComments comments={tweet.comments} />
    </div>
  );
}
