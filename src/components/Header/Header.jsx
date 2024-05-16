import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Abdurahman/svg/Logo.svg'
import Container from '../../helpers/Container'


function Header() {
  return (
    <div>
        <Container>.
            <div>
                <div className="flex">
                <img src={logo} alt="" />
                <div className="">
                    <ul className="flex">
                    <Link to={"/all"}>
                        <li>ALL PRODUCTS</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>ABOUT SEEDRA</li>
                    </Link>
                    <Link to={"/blog"}>
                        <li>OUR BLOG</li>
                    </Link>
                    <Link to={"/contacts"}>
                        <li>CONTACTS</li>
                    </Link>
                    </ul>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header