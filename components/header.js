import Image from 'next/image'  

export default function Header({isAuthenticated, user: {name}}) {
    return (
        <nav className="bg-purple-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex items-center justify-center filter drop-shadow-md items-center h-20">
                            <Image className="block h-16 w-auto lg:hidden" width="500" height="500" src="/../public/images/logo_branco_s.png" alt="SciTec Jr."/>
                            <Image className="hidden h-16 w-auto lg:block" width="500" height="500" src="/../public/images/logo_branco_s.png" alt="SciTec Jr."/>
                        </div>
                    </div>
                    <div>
                    <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>

                    </div>
                </div>
            </div>
        </nav>
    );
}