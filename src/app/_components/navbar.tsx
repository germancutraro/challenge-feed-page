export function Navbar() {
  return (
    <div className="flex flex-col gap-3 py-6">
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        height="20"
        width="30"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="-89.00934757 -46.8841404 643.93723344 446.8841404"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359"
          fill="#1da1f2"
          fillRule="nonzero"
        />
      </svg>
      <span className="flex items-center gap-1 font-bold" role="button">
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
          />
        </svg>
        Home
      </span>
      <span role="button">Explore</span>
      <span role="button">Message</span>
      <span role="button">Profile</span>
      <button
        className="bg-[#08a0e9] rounded-xl text-white flex justify-center items-center w-60 h-7"
        role="button"
      >
        Tweet
      </button>
    </div>
  );
}
