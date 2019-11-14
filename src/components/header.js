import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="bg-primary text-center">
    <div className="mx-auto pb-0 pt-8 px-6 max-w-md sm:max-w-xl md:max-w-6xl lg:pt-12">
        <nav className="flex justify-center text-white uppercase font-bold text-md md:text-md md:justify-end">
          <Link to="#work" className="link mx-3 sm:mx-4 md:mx-5">Work</Link>
          <Link to="#about" className="link mx-3 sm:mx-4 md:mx-5">About</Link>
          <Link to="#about" className="link mx-3 sm:mx-4 md:mx-5">Contact</Link>
        </nav>
    </div>
  </header>
)

export default Header
