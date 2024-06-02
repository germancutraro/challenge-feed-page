import { format } from "date-fns";
import Image from "next/image";

interface TweetsItemProps {
  tweet: Tweet;
}

export function TweetsItem({ tweet }: TweetsItemProps) {
  return (
    <div className="bg-gray-300 py-5 mb-5 flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Image
          src={tweet.user.avatar}
          alt="avatar"
          width={35}
          height={35}
          className="rounded-full"
        />
        <p>{tweet.user.firstName}</p>
        <p>{tweet.user.lastName}</p>
        <p>{tweet.user.nickname}</p>
        <p>{format(new Date(tweet.createdAt), "MMM dd")}</p>
      </div>
      <div>
        <p>{tweet.content}</p>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
            className="w-6 h-6 text-gray-800 dark:text-white"
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
            className="w-6 h-6 text-gray-800 dark:text-white"
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
  );
}
