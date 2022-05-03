import { Contact } from './CallToAction'
import logo from "../public/imgs/drop_link_fy.png"
import Link from 'next/link'

export default function Navbar({ children }) {
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto pt-5">
          <div className="hidden md:flex md:order-1 w-1/3">
            <div className='w-3/4'>
              <Contact />

            </div>
          </div>
          <div className="flex w-1/3 items-center md:order-2">
            <img className='md:ml-0 ml-10' src={logo.src} />
          </div>
          <div className="flex w-1/3 justify-between md:flex md:w-auto md:order-3" id="mobile-menu-2">
            <Link href="https://app.droplinkfy.com/login/">
              <button className='bg-gradient-to-b from-[#33dba3] to-[#25c7ca] px-5 text-white py-2 rounded-full'>
                Fazer Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}