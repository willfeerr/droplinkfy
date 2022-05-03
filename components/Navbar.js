import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center md:order-1">
                        Whats
                    </div>
                    <div className="flex items-center md:order-2">
                        Logo
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-3" id="mobile-menu-2">
                        Login
                    </div>
                </div>
            </nav>
        </>
    )
}