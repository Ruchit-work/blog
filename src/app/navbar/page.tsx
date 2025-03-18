'use client'
import Link from "next/link"
import Script from "next/script"
import React,{ useEffect, useState } from "react"
export default function Navbar(){
    const [isactive , setActive] =  useState(false);
    function toggle(){
        setActive(!isactive)
    }    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    const scrollCheck = scroll ? "sticky-top " : "null";
  
    return<>
    <div className="container-fluid position-relative p-0 ">
        <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 nav_background ${scrollCheck }`} >
            <Link href="/" className="set_logo"  >
            <span className="navbar-brand P-0" ><h1 className="header_logo">  <i className="fa fa-computer-fa me-2"></i>Blog</h1></span>
          </Link>
            <button onClick={toggle}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className={` navbar-collapse ${isactive ?"collapse " :"" }`}  id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link href="/"><span className="nav-item nav-link active"> Home</span></Link> 
                    <Link href="/blog"><span className="nav-item nav-link"> Blog</span></Link>   
                    <Link href="/Individual_Blog"><span className="nav-item nav-link"> Individual Blog </span></Link>                  
                    <Link href="/about"><span className="nav-item nav-link">About Page </span></Link>          
                </div>
            </div>
        </nav>
        
      </div>
      <Script src="/demo.js"></Script>
</>
}


