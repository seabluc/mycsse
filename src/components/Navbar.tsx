import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-pink-300">
      {/* <div className="bg-pink-300 max-w-full px-4 sm:px-6"> {/* pink background, takes up full width (ik divs are block elements, im just explicitly defining behavior) with padding-left padding-right of 4 and padding-left padding-right of 6 for users using screens >640px */}
      <div className="max-w-auto mx-auto px-4 sm:px-6"> {/* left/right padding of 6 (1.5rem) if user's screen width exceeds sm (640px). if smaller, then l/r padding of 44 (1rem) */}
        <div className="flex items-center justify-between h-12"> {/* flex container, all flex items centered in the cross-axis and evenly distributed in the main axis */}

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-white focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2">
                <Link href="/">logoo</Link>
              </div>
            </div>
          </div>

          <div className="ml-7 flex items-center gap-4 text-white"> {/* flex container that centers flex items on the cross-axis and evenly spaces each flex item by 1rem */}

            <Link
              href="/"
              className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
            >Home
            </Link>
            <Link
              href="/courses/core/css342"
              className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
            >CSS342
            </Link>
            <Link
              href="/courses/core/css343"
              className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
            >CSS343
            </Link>
            <Link
              href="/courses/core/css350"
              className="focus-within:bg-slate-500 hover:bg-slate-500 border-2 rounded-xl p-2"
            >CSS350
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;