import { TweetsList } from "./_components/tweets-list";
import tweets from "./_data/tweets.json";

export default async function Home() {
  return (
    <main>
      <TweetsList tweets={tweets} />
    </main>
  );
}
