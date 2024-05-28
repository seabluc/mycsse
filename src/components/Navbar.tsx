import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-pink-300">
      {/* <div className="bg-pink-300 max-w-full px-4 sm:px-6"> {/* pink background, takes up full width (ik divs are block elements, im just explicitly defining behavior) with padding-left padding-right of 4 and padding-left padding-right of 6 for users using screens >640px */}
      <div className="max-w-auto mx-auto px-4 sm:px-6"> {/* left/right padding of 6 (1.5rem) if user's screen width exceeds sm (640px). if smaller, then l/r padding of 44 (1rem) */}
        <div className="flex items-center justify-between h-12"> {/* flex container, all flex items centered in the cross-axis and evenly distributed in the main axis */}
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-white focus-within:bg-slate-500 bg-neutral-400 hover:bg-slate-500 border-2 rounded-xl p-2">logo</div> {/* replace w/ Link component */}
            </div>
          </div>
          
            <div className="flex items-center gap-4"> {/* flex container that centers flex items on the cross-axis and evenly spaces each flex item by 1rem */}
              <div className="text-white">home</div> {/* replace w/ Link component */}
              <div className="text-white">item2</div> {/* replace w/ Link component */}
              <div className="text-white">item3</div> {/* replace w/ Link component */}
            </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;