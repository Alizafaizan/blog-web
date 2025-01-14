// import Link from 'next/link'

// export default function Header() {
//   return (
//     <header className="bg-white shadow-sm">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-gray-900">
//           Parenting Spectrum

//           </Link>
//           <div className="flex space-x-4">
//             <Link href="/" className="text-gray-700 hover:text-gray-900">
//               Home
//             </Link>
//             <Link href="/contactUs" className="text-gray-700 hover:text-gray-900">
//               ContactUs
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }
"use client"
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Branding Section */}
          <Link href="/" className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-800 transition duration-200">
            Parenting Spectrum
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition duration-200">
              Home
            </Link>
            <Link href="/contactUs" className="text-gray-700 hover:text-gray-900 transition duration-200">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <HiX className="w-8 h-8 text-gray-800" />
              ) : (
                <HiMenuAlt3 className="w-8 h-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-gray-900 transition duration-200">
              Home
            </Link>
            <Link href="/contactUs" className="block text-gray-700 hover:text-gray-900 transition duration-200">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
