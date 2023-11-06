import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const[classname,setname] = useState(false)
    const[classname1,setname1] = useState(false)
    useEffect(() => {
        // Function to handle the scroll event and update the scroll position
        const handleScroll = () => {
          const windowHeight = window.innerHeight;
          const scrollHeight = window.scrollY;
          if(scrollHeight>200){
            setname(true)
          }
          else{
            setname(false)
          }
        };
    
        // Add the event listener for the scroll event
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <nav className={classname?"nav":''} >
        <div className="left">
            <img  src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" srcSet="" />
        </div>
        <div className="right">
            <div className="nav-item">
                <a>Home</a>
            </div>
            <div onClick={()=>setname1(!classname1)} className="nav-item">
               <a >Industies</a>
               <ul  className={classname1?"ul":""} >
                <li><a>Sustainability</a></li>
                <li><a>Mineral Processing</a></li>
                <li><a>Oil & Gas</a></li>
                <li><a>Mine-To-Mill-To-Mine  </a></li>
               </ul>
            </div>
            <div className="nav-item">
                <a >AI Software</a>
            </div>
            <div className="nav-item">
                <a>Blog</a>
            </div>
            <div className="nav-item">
                <a >Contact Us</a>
            </div>
        </div>
    </nav>
  )
}
