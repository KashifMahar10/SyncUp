import { User } from "lucide-react";

export default function header() {
  return (
     <>
        <nav className="border-gray-200"style={{ backgroundColor: '#2a2a2b' }}>
            <div className="flex flex-wrap items-center justify-between p-2">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">Sync Up</span>
                </a>
                <div id="navbar-default">
                    <div className="search-bar">
                        <form>   
                             <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                            <div className="relative w-96">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input 
                                type="search" 
                                id="default-search" 
                                className="block w-full max-w-2xl p-2 pl-12 text-sm border-none  rounded-full focus:ring-blue-500 focus:border-blue-50 dark:placeholder-gray-400" 
                                placeholder="Search" 
                                style={{backgroundColor:'#565557'}}
                                required 
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="user-section">
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" 
                        data-dropdown-trigger="hover" 
                        className="bg-blue-200 rounded-lg text-sm px-2 py-1 text-center inline-flex items-center" 
                         type="button"> <User/> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                            </ul>
                        </div>
                </div>
            </div>
        </nav>
    </>
  )
}
