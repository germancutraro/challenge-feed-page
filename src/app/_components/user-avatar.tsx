import Image from "next/image";

interface UserAvatarProps {
  avatar: string;
}

export function UserAvatar({ avatar }: UserAvatarProps) {
  return (
    <Image
      src={avatar}
      alt="avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}
