import React, { useState } from 'react';
 import "./Header.css";
 import SearchIcon from '@mui/icons-material/Search';
 import HomeIcon from '@mui/icons-material/Home';
 import FlagIcon from '@mui/icons-material/Flag';
 import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
 import StoreFrontOutLinedIcon from '@mui/icons-material/Store';
 import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ForumIcon from '@mui/icons-material/Forum';
import { useStateValue } from './StateProvider';


function Header() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="header">
        <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358" alt="loading!!" />
          <div className="header__input">
            <SearchIcon/>
            <input placeholder="Search Facebook" type="text" />

          </div>
        </div>
        <div className="header__center">
          <div className="header__option header__option--active">
          <HomeIcon fontSize="large"/>
          </div>
          <div className="header__option">
          <FlagIcon fontSize="large"/>
          </div>
          <div className="header__option">
          <SubscriptionsIcon fontSize="large"/>
          </div>
          <div className="header__option">
          <StoreFrontOutLinedIcon fontSize="large"/>
          </div>
          <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"/>
          </div>
      
        </div>
        
        <div className="header__right">
          <div className="header__info">
          <AccountCircleIcon />
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
          </div>
        </div>
          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
    </div>
  )
}

export default Header
