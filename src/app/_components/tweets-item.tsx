import { format } from "date-fns";
import Image from "next/image";

interface TweetsItemProps {
  tweet: Tweet;
}

export function TweetsItem({ tweet }: TweetsItemProps) {
  return (
    <div className="bg-white py-5 px-4 border-2 flex gap-4 text-slate-500">
      <div className="flex flex-col items-center">
        <Image
          src={tweet.user.avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 flex-grow">
        <div className="flex items-center gap-1">
          <p className="font-bold text-black">{tweet.user.firstName}</p>
          <p className="font-bold text-black">{tweet.user.lastName}</p>
          <p>{tweet.user.nickname} · </p>
          <p>{format(new Date(tweet.createdAt), "MMM dd")}</p>
          <p className="ml-auto "> ··· </p>
        </div>
        <div className="text-black">
          <p>{tweet.content}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
              />
            </svg>
            {tweet.comments}
          </div>
          <div className="flex gap-1">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
              />
            </svg>

            {tweet.retweets}
          </div>
          <div className="flex gap-1">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            {tweet.likes}
          </div>
        </div>
      </div>
    </div>
  );
}
