import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path:'/main',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path:'/about',
        icon: <IoIcons.IoMdInformationCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Family List',
        path:'/listfamilymembers',
        icon: <IoIcons.IoIosPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Log Out',
        path:'/user',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    },
]