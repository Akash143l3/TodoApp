"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar2() {
    const pathname = usePathname();
 
    return (
        <>
    <div className='py-2 border-b flex fixed bg-white w-screen gap-4 shadow shadow-black text-2xl  '>

    <div className="relative inline-block group ml-4"><Link href={"/food/a"}>
       <span
            className={
              pathname === "/food/a" ? "underline underline-offset-4" : "no-underline"
            }
          >A</span></Link>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/b"}>
       <span
            className={
              pathname === "/food/b" ? "underline underline-offset-4" : "no-underline"
            }
          >B</span></Link>
        
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/food/c"}>
       <span
            className={
              pathname === "/food/c" ? "underline underline-offset-4" : "no-underline"
            }
          >C</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/d"}>
       <span
            className={
              pathname === "/food/d" ? "underline underline-offset-4" : "no-underline"
            }
          >D</span></Link>
        
    </div>
    
    <div className="relative inline-block group ml-4"><Link href={"/food/e"}>
       <span
            className={
              pathname === "/food/e" ? "underline underline-offset-4" : "no-underline"
            }
          >E</span></Link>
        
    </div>

<div className="relative inline-block group ml-4"><Link href={"/food/f"}>
       <span
            className={
              pathname === "/food/f" ? "underline underline-offset-4" : "no-underline"
            }
          >F </span></Link>
        
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/food/g"}>
       <span
            className={
              pathname === "/food/g" ? "underline underline-offset-4" : "no-underline"
            }
          >G</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/h"}>
       <span
            className={
              pathname === "/food/h" ? "underline underline-offset-4" : "no-underline"
            }
          >H</span></Link>
    </div>

    <div className="relative inline-block group ml-4"><Link href={"/food/i"}>
       <span
            className={
              pathname === "/food/i" ? "underline underline-offset-4" : "no-underline"
            }
          >I</span></Link>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/j"}>
       <span
            className={
              pathname === "/food/j" ? "underline underline-offset-4" : "no-underline"
            }
          >J</span></Link>
        
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/food/k"}>
       <span
            className={
              pathname === "/food/k" ? "underline underline-offset-4" : "no-underline"
            }
          >K</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/l"}>
       <span
            className={
              pathname === "/food/l" ? "underline underline-offset-4" : "no-underline"
            }
          >L</span></Link>
        
    </div>
    
    <div className="relative inline-block group ml-4"><Link href={"/food/m"}>
       <span
            className={
              pathname === "/food/m" ? "underline underline-offset-4" : "no-underline"
            }
          >M</span></Link>
        
    </div>

<div className="relative inline-block group ml-4"><Link href={"/food/n"}>
       <span
            className={
              pathname === "/food/n" ? "underline underline-offset-4" : "no-underline"
            }
          >N</span></Link>
        
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/food/o"}>
       <span
            className={
              pathname === "/food/o" ? "underline underline-offset-4" : "no-underline"
            }
          >O</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/p"}>
       <span
            className={
              pathname === "/food/p" ? "underline underline-offset-4" : "no-underline"
            }
          >P</span></Link>
    </div>

    <div className="relative inline-block group ml-4"><Link href={"/food/q"}>
       <span
            className={
              pathname === "/food/q" ? "underline underline-offset-4" : "no-underline"
            }
          >Q</span></Link>
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/r"}>
       <span
            className={
              pathname === "/food/r" ? "underline underline-offset-4" : "no-underline"
            }
          >R</span></Link>
        
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/food/s"}>
       <span
            className={
              pathname === "/food/s" ? "underline underline-offset-4" : "no-underline"
            }
          >S</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/t"}>
       <span
            className={
              pathname === "/food/t" ? "underline underline-offset-4" : "no-underline"
            }
          >T</span></Link>
        
    </div>
    
    <div className="relative inline-block group ml-4"><Link href={"/food/u"}>
       <span
            className={
              pathname === "/food/u" ? "underline underline-offset-4" : "no-underline"
            }
          >U</span></Link>
        
    </div>

<div className="relative inline-block group ml-4"><Link href={"/food/v"}>
       <span
            className={
              pathname === "/food/v" ? "underline underline-offset-4" : "no-underline"
            }
          >V</span></Link>
        
    </div>
    <div className="relative inline-block group ml-4"><Link href={"/food/w"}>
       <span
            className={
              pathname === "/food/w" ? "underline underline-offset-4" : "no-underline"
            }
          >W</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/x"}>
       <span
            className={
              pathname === "/food/x" ? "underline underline-offset-4" : "no-underline"
            }
          >X</span></Link>
    </div>

    <div className="relative inline-block group ml-4"><Link href={"/food/y"}>
       <span
            className={
              pathname === "/food/y" ? "underline underline-offset-4" : "no-underline"
            }
          >Y</span></Link>
        
    </div>


    <div className="relative inline-block group ml-4"><Link href={"/food/z"}>
       <span
            className={
              pathname === "/food/z" ? "underline underline-offset-4" : "no-underline"
            }
          >Z</span></Link>
    </div>
        
        
        
        
        
        
        
        
        
        </div>
    
    
    </>

  )
}
