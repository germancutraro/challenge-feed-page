import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface TweetPageProps {
  params: Params;
}

export default function TweetPage({ params }: TweetPageProps) {
  return <h1>Tweet info {params.id}</h1>;
}
