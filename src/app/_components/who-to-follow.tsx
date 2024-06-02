import data from "@/app/_data/who-to-follow.json";
import Image from "next/image";
import { UserAvatar } from "./user-avatar";

export function WhoToFollow() {
  return (
    <div className="flex flex-col gap-3 mt-2">
      {data.map((user) => (
        <div key={user.id} className="py-3">
          <div className="flex gap-2">
            <UserAvatar avatar={user.avatar} />
            <div className="flex flex-col">
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div className="text-slate-500 text-xs">{user.nickname}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
