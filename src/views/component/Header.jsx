import React from "react";
import Brand from "./../../assets/image/image_brand.png";

function Header(props) {
    return (
        <header className="d-flex container flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <a href="" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={Brand} width={131} height={49} alt="" />
            </a>

            <ul className="nav my-menu col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 me-5 link-active">Home</a></li>
                <li><a href="#" className="nav-link px-2 me-5 link-dark">Partner</a></li>
                <li><a href="#" className="nav-link px-2 me-5 link-dark">Layanan</a></li>
                <li><a href="#" className="nav-link px-2 me-5 link-dark">Hubungi Kami</a></li>
            </ul>

            <div className="col-md-3 text-end d-none d-xl-block">
                <a href="#" className="my-account-name">Jhon Doe</a>
            </div>
        </header>
    );
}

export default Header;