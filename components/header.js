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
                        <div>
                        <button type="button" class="text-white w-32 justify-evenly	flex bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
Login
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd" />
</svg>
</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </nav>
    );
}