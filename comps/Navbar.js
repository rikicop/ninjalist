
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { MenuList } from './MenuList';
import { useState } from 'react';



const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const router = useRouter();
    const menuList = MenuList.map(({url,title}, index)=>{
      return(
        <li key={index}>
          <Link href={url}>
            <a className={router.pathname == url ? "active" : ""}>
              {title}
            </a>
          </Link>
        </li>
      )
    })
    const handleClick = () =>{
      setClicked(!clicked);
    } 
    return (
        <nav>
             <div className="logo">
               <Image src="/logo.png"  width={128} height={77}/>
             </div>
             <div className="menu-icon" onClick={handleClick}>
                { clicked ?  <FaTimes/> : <FaBars/>}              
             </div>
             <ul className={ clicked ? "menu-list": "menu-list close"} onClick={handleClick}>
               {menuList}
             </ul>
        </nav>
       
    )
}

export default Navbar
