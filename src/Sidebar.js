import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
        />
<SidebarRow Icon={EmojiFlagsIcon} title="pages"/>
<SidebarRow Icon={PeopleIcon} title="Friends"/>
<SidebarRow Icon={ChatIcon} title="Messenger"/>
<SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
<SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
<SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
    </div>
  )
}

export default Sidebar
