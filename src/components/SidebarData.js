import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {
  FaTh,
  FaBars,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { FaPeopleCarry } from "react-icons/fa";

import { BiBookContent, BiLogInCircle } from "react-icons/bi";
export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <FaTh/>
  },
  {
    title: 'Workers',  //reports
    path: '/reports',
    icon: <SlPeople />,
    
  },
  {
    title: 'Coordinator', //products
    path: '/products',
    icon: <FaPeopleCarry />
  },
 
  {
    title: 'Stock', //messages
    path: '/messages',
    icon: <AiOutlineStock/>,
  },
  {
    title: 'Logout',  //support
    path: '/Support',
    icon: <BiLogInCircle/>
  }
];
