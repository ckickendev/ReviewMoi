import React from 'react'
import "../Navigation/NavTop.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import {AiOutlineHome} from "react-icons/ai"
import {LiaUserFriendsSolid} from "react-icons/lia"
import {IoNotificationsOutline} from "react-icons/io5"
import {TbMessage} from "react-icons/tb"

import logo from '../../assets/logo.png';
import Profile from '../../Pages/Profile/Profile';
import { ButtonCm } from '../Common/ButtonCm';
import COLOR from '../Constant';

const NavTop = ({search,setSearch,setShowMenu,profileImg}) => {


  
  return (
    <nav>
        <div className="n-logo">
            <Link to="/home" className='logo' style={{color:"black",textDecoration:"none"}}>
              <img src={logo} width="100%" height="100%" />
            </Link>
        </div>

      <div className="n-form-button" >

        <form className='n-form' onSubmit={(e)=>e.preventDefault()} >
          <SearchIcon className='search-icon'/>
          <input type="text" 
          placeholder='Search product'
          id='n-search'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
        </form>
      </div>

       <div className="n-profile" >
          {/* <Link to="/profile"> 
            <img src={profileImg ? (profileImg) : Profile} className='n-img' style={{marginBottom:"-7px"}}/>
          </Link> */}
          <ButtonCm text="Login" color="black" background={COLOR.WHITE} border="1px solid black" />
          <ButtonCm text="Register" color="white" background={COLOR.RED} border="1px solid ff2b00" />
      </div>
  
    </nav>
  )
}

export default NavTop