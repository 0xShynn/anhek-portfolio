import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="bg-white dark:bg-gray-900 text-center">
    <div className="mx-auto pb-0 pt-10 px-6 max-w-md sm:max-w-xl md:max-w-6xl lg:pt-12">
        <nav className="flex justify-center text-gray-800 dark:text-white uppercase font-bold text-md md:text-md md:justify-end">
          <Link to="/" className="link mx-3 sm:mx-4 md:mx-5 hover:text-secondary_dark">Work</Link>
          <Link to="/" className="link mx-3 sm:mx-4 md:mx-5 hover:text-secondary_dark">About</Link>
          <Link to="/" className="link mx-3 sm:mx-4 md:mx-5 hover:text-secondary_dark">Contact</Link>
        </nav>
    </div>
  </header>
)

export default Header
