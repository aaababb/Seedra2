import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Abdurahman/svg/Logo.svg'
import insta from '../../assets/Abdurahman/svg/instagram.svg'
import facebook from '../../assets/Abdurahman/svg/facebook.svg'
import seach from '../../assets/Abdurahman/svg/search.svg'
import like from '../../assets/Abdurahman/svg/like.svg'
import cart from '../../assets/Abdurahman/svg/cart.svg'
import Container from '../../helpers/Container'


function Header() {
  return (
    <div>
        <Container>.
            <div className='flex h-[48px] items-center shadow-sm list-none'>
                <div className="flex gap-[54px] list-none">
                    <Link to={'/'}> 
                        <img src={logo} alt="" />
                    </Link>
                    <div className="">
                        <ul className="flex gap-[15px] list-none">
                            <Link to={"/"}>
                                <li className='border-r border-gray-200 w-[123px] h-[25px]'>ALL PRODUCTS</li>
                            </Link>
                            <Link to={"/about"}>
                                <li className='border-r border-gray-200 w-[125px] h-[25px]'>ABOUT SEEDRA</li>
                            </Link>
                            <Link to={"/blog"}>
                                <li className='border-r border-gray-200 w-[91px] h-[25px]'>OUR BLOG</li>
                            </Link>
                            <Link to={"/contacts"}>
                                <li className=' w-[91px] h-[25px]'>CONTACTS</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='flex ml-[34px] w-[56px] justify-between'> 
                    <img src={insta} alt="" />
                    <img src={facebook} alt="" />
                </div>
                <div className='ml-[14px] w-[280px] h-[45px] border border-gray-300 rounded-full flex py-3 pl-[30px] gap-4'>
                    <img className='w-[16px] h-[16px]' src={seach} alt="" />    
                    <input className='outline-none w-[200px]' type='text' placeholder='Search'/>
                </div>
                <div className='w-[72px] flex justify-between ml-[15px]'>
                    <img src={like} alt="" />
                    <img src={cart} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header