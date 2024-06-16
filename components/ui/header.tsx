import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="SimplyStraws">
              <span className="inline-flex items-center">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.96 11.04a3 3 0 0 0-4.24 0L36.12 23.64l-2.83-2.83L18.96 35.14l-4.94-4.94a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.24l4.94 4.94L2 57.46a3 3 0 1 0 4.24 4.24l11.72-11.72 4.94 4.94a3 3 0 0 0 4.24 0l4-4a3 3 0 0 0 0-4.24l-4.94-4.94 14.34-14.34 2.83 2.83 12.6-12.6a3 3 0 0 0 0-4.24l-4-4zm-32 36.4a1 1 0 0 1-1.41 0l-6-6a1 1 0 0 1 0-1.41l2-2a1 1 0 0 1 1.41 0l6 6a1 1 0 0 1 0 1.41l-2 2z"
                    fill="#ffffff"
                  />
                </svg>
                <h3
                  className="text-purple-600 h3 aos-init aos-animate"
                  data-aos="fade-down"
                >
                  Simply Straws
                </h3>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
