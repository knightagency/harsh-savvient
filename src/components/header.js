import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Mackey from "../images/logo.svg";
import MackeySmall from "../images/small-logo.svg";

const Header = () => {
  const inputEl = useRef(null);
  const inputEl1 = useRef(null);
  const handleScroll = (event) => {
    //handle your event base on scroll in pixels or what ever for example : 
    if (window.screen.width > 991) {
      if (document.getElementsByClassName('small-logo').length > 0 && document.getElementsByClassName('over-nav').length > 0 && document.getElementsByClassName('below-nav').length > 0) {
        if (window.scrollY > 50) {
          document.getElementsByClassName('small-logo')[0].classList.add('d-flex')
          document.getElementsByClassName('over-nav')[0].classList.add('d-flex')
          document.getElementsByClassName('below-nav')[0].classList.add('d-none')
          document.getElementsByClassName('small-logo')[0].classList.remove('d-none')
          document.getElementsByClassName('over-nav')[0].classList.remove('d-none')
          document.getElementsByClassName('below-nav')[0].classList.remove('d-flex')
        } else {
          document.getElementsByClassName('small-logo')[0].classList.remove('d-flex')
          document.getElementsByClassName('over-nav')[0].classList.remove('d-flex')
          document.getElementsByClassName('below-nav')[0].classList.remove('d-none')
          document.getElementsByClassName('small-logo')[0].classList.add('d-none')
          document.getElementsByClassName('over-nav')[0].classList.add('d-none')
          document.getElementsByClassName('below-nav')[0].classList.add('d-flex')
        }
      }
    } else {
      document.getElementsByClassName('below-nav')[0].classList.remove('d-flex');
      document.getElementsByClassName('small-logo')[0].classList.remove('d-flex')
      document.getElementsByClassName('over-nav')[0].classList.remove('d-flex')
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, []);

  return <header>
    <nav className="navbar navbar-light bg-light position-fixed col-12 desktopNav">
      <div className="container">
        <Link className="navbar-brand small-logo d-none" to="/">
          <img src={MackeySmall} alt="logo" />
        </Link>
        <ul className="top-belt1 mb-0 me-auto over-nav d-none">
          <li className="nav-item p-3">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/expertsinbusiness/"> Services</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="p-2"><Link className="dropdown-item" to="/corporate-advisory/">Corporate Advisory</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/restructuring/">Restructuring</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/insolvency/">Insolvency</Link></li>
            </ul>
          </li>
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/insights/">Insights</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="p-2"><Link className="dropdown-item" to="/news/">News & articles</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/back-in-business/">Case studies</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/insights/#careers">Deal Hub</Link></li>
            </ul>
          </li>
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/mg-way/" tabIndex="-1" aria-disabled="true">The MG Way</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#people">People</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#about">About us</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#careers">Careers</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#community-support">Community support</Link></li>
            </ul>
          </li>
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/mg-academy/" tabIndex="-1" aria-disabled="true">MG Academy</Link>
            {/* <Link className="nav-link dropdown-toggle" to="/#services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MG Academy
            </Link> */}
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="p-2"><Link className="dropdown-item" to="/events/">Events</Link></li>
            </ul>
          </li>
          <li className="nav-item p-3">
            {/* <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</a> */}
            <Link className="nav-link" to="/contact/" aria-disabled="true">Contact</Link>
          </li>
        </ul>
        <ul className="top-belt d-flex ms-auto">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="tel:0292207100">{typeof window !== "undefined" && window.screen.width > 979 ? "Speak to our experts 02 9220 7100" : "Call 02 9220 7100"} <i className="fa fa-chevron-right"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/contact/">Get expert advice <i className="fa fa-chevron-right"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="https://core.ips-docs.com/">Creditor portal <i className="fa fa-chevron-right"></i></a>
          </li>
        </ul>
      </div>
    </nav>
    <nav className="navbar navbar-expand-lg below-nav navbar-light col-12 desktopNav d-flex d-none d-lg-block d-xl-nonee" style={{ paddingTop: "55px" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Mackey} alt="Mackey" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-banner mb-2 mb-lg-0">
            <li className="nav-item p-3">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); inputEl1.current.style.height = inputEl.current.offsetHeight; }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); inputEl1.current.style.height = 0 }}>
              <Link className="nav-link" to="/expertsinbusiness/"> Services</Link>
              <ul className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/corporate-advisory/">Corporate Advisory</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/restructuring/">Restructuring</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/insolvency/">Insolvency</Link></li>
              </ul>
            </li>
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
              <Link className="nav-link" to="/insights/">Insights</Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/news/">News & articles</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/back-in-business/">Case studies</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/insights/#careers">Deal Hub</Link></li>
              </ul>
            </li>
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
              <Link className="nav-link" to="/mg-way/" tabIndex="-1" aria-disabled="true">The MG Way</Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#people">People</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#about">About us</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#careers">Careers</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#community-support">Community support</Link></li>
              </ul>
            </li>
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
              <Link className="nav-link" to="/mg-academy/" tabIndex="-1" aria-disabled="true">MG Academy</Link>
              {/* <Link className="nav-link dropdown-toggle" to="/#services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MG Academy
              </Link> */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/events/">Events</Link></li>
              </ul>
            </li>
            <li className="nav-item p-3">
              <Link className="nav-link" to="/contact/" aria-disabled="true">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="mobileNav" className="light position-fixed">
      <div className="bg-light">
        <ul className="top-belt d-flex justify-content-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="tel:0292207100">{typeof window !== "undefined" && window.screen.width > 979 ? "Speak to our experts 02 9220 7100" : "Call 02 9220 7100"} <i className="fa fa-chevron-right"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/contact/">Get expert advice <i className="fa fa-chevron-right"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="https://core.ips-docs.com/">Creditor portal <i className="fa fa-chevron-right"></i></a>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="top-nav" />
      <div className="position-relative">
        <span className="hamburgerspan"></span>
        <span className="hamburgerspan"></span>
        <span className="hamburgerspan"></span>
      </div>

      <div className="mobile-logo black-logo text-center"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625504292/svg/logo-color.svg" alt="" /></div>


      <div id="menu-cont-1">
        <div className="top-mobile">
          <ul className="top-belt2 d-flex ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="tel:0292207100">{typeof window !== "undefined" && window.screen.width > 979 ? "Speak to our experts 02 9220 7100" : "Call 02 9220 7100"} <i className="fa fa-chevron-right"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/contact/">Get expert advice <i className="fa fa-chevron-right"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="https://core.ips-docs.com/">Creditor portal <i className="fa fa-chevron-right"></i></a>
            </li>
          </ul>
        </div>
        <div className="mobile-logo black-logo text-center"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="" /></div>
        <ul className="menu-ul">
          <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
          <li className="nav-item sub-menu"><Link className="nav-link" to="/expertsinbusiness/"> Services</Link>
            <input type="checkbox" id="menu-1" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="" /></div>
              <ul className="menu-ul">
                <label className="menu-label" htmlFor="menu-1">Menu</label>
                <li className="nav-item"><Link to="/corporate-advisory/">Corporate Advisory</Link></li>
                <li className="nav-item"><Link to="/restructuring/">Business Restructure and Turnaround</Link></li>
                <li className="nav-item"><Link to="/insolvency/">Insolvency</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item sub-menu"><Link className="nav-link" to="/insights/">Insights</Link>
            <input type="checkbox" id="menu-2" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="" /></div>
              <ul className="menu-ul">
                <label className="menu-label" htmlFor="menu-2">Menu</label>
                <li className="nav-item"><Link className="dropdown-item" to="/news/">News & articles</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/back-in-business/">Case studies</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/insights/#careers">Deal Hub</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item sub-menu"><Link className="nav-link" to="/mg-way/">The MG Way</Link>
            <input type="checkbox" id="menu-3" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="" /></div>
              <ul className="menu-ul">
                <label className="menu-label" htmlFor="menu-3">Menu</label>
                <li className="nav-item"><Link className="dropdown-item" to="/mg-way/#people">People</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/mg-way/#about">About us</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/mg-way/#careers">Careers</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/mg-way/#community-support">Community support</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item sub-menu"><Link className="nav-link" to="/mg-academy/"> MG Academy</Link>
            <input type="checkbox" id="menu-1" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="" /></div>
              <ul className="menu-ul">
                <label className="menu-label" htmlFor="menu-1">Menu</label>
                <li className="nav-item"><Link to="/events/">Events</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item"><Link className="nav-link" to="/contact/">Contact</Link></li>
        </ul>
      </div>
    </div>
    <div id="white" ref={inputEl1}></div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
