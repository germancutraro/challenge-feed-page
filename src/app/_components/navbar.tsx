export function Navbar() {
  return (
    <div className="flex flex-col gap-3 py-6">
      <span className="font-bold" role="button">
        Home
      </span>
      <span role="button">Explore</span>
      <span role="button">Message</span>
      <span role="button">Profile</span>
      <button
        className="bg-sky-400 rounded-lg text-white flex justify-center items-center w-60 h-7"
        role="button"
      >
        Tweet
      </button>
    </div>
  );
}
