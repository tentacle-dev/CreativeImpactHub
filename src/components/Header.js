import { Lobster } from 'next/font/google'  
import services from "@/data/services";


const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
})


export default function Header(){
return (
      <div className="navbar md:fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-1 mt-3 -ml-2 shadow rounded-r-lg">
              <li className='py-4'><a href='#about-us'>About Us</a></li>
              <li>
                <a>Services</a>
                <ul className="p-4">
                 {services.map((service) => {
                    return(
                      <div className='flex py-2 hover:bg-gray-200 hover:text-black rounded-lg' key={service.id}>
                        <p className='px-4'>{service.icon}</p><li className='px-4'>{service.title}</li>
                      </div>
                    )
                  })}
                </ul>
              </li>
              <li className='py-4'><a>Contact Us</a></li>
            </ul>
          </div>
          <a className={`btn btn-ghost text-xl text-[#FE5D26] lead ${lobster.className}`}>
            Creative Impact Hub
          </a>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#about-us'>About Us</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="text-lg max-w-xl">
                  {services.map((service) => {
                    return(
                      <div className='flex py-4 hover:bg-gray-200 hover:text-black rounded-lg'key={service.id}>
                        <p className='px-4'>{service.icon}</p><li className='px-4'>{service.title}</li>
                      </div>
                    )
                  })}
                </ul>
              </details>
            </li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact</a>
        </div>
      </div>
)
}