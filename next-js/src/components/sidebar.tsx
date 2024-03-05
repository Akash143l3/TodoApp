import{ Album,BellRing,Contact,Github,LogOut,Trash2 ,Wallpaper,Twitter } from 'lucide-react'
import Link from "next/link";

export default function Sidebar() {
 
    return (
        <>
    <div className='h-fit w-16 border-r  flex '>
        <div className='flex flex-col fixed gap-10 pt-5'>

    <div className="relative inline-block group ml-4"><Link href={"/dashboard/album"}>
        <div className="text-2xl cursor-pointer"><Album /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs ml-3 px-2 py-1 rounded whitespace-nowrap group-hover:block">
        Album
            </div>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/dashboard/notification"}>
        <div className="text-2xl cursor-pointer"><BellRing /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs  ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
           Notification
        </div>
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/dashboard/contact"}>
        <div className="text-2xl cursor-pointer"><Contact /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs  ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
        Contact
            </div>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/dashboard/github"}>
        <div className="text-2xl cursor-pointer"> <Github /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs  ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
        Github
        </div>
    </div>
    
    <div className="relative inline-block group ml-4"><Link href={"/dashboard/twitter"}>
        <div className="text-2xl cursor-pointer"><Twitter /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
        Twitter
            </div>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/dashboard/wallpaper"}>
        <div className="text-2xl cursor-pointer"><Wallpaper /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
        Wallpaper
        </div>
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/dashboard/trash"}>
        <div className="text-2xl cursor-pointer"><Trash2 /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
        Trash
            </div>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/dashboard/logOut"}> 
        <div className="text-2xl cursor-pointer"><LogOut /></div></Link>
        <div className="absolute hidden left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs ml-3  px-2 py-1 rounded whitespace-nowrap group-hover:block">
        LogOut
        </div>
    </div>
        
        
        
        
        
        
    </div>  
        
        
        </div>
    
    
    </>

  )
}
