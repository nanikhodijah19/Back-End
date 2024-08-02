"use client"

import React, { useEffect, useRef, useState } from 'react';
import { AvatarSideBar } from './avatar';
import { deleteCookie, navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';
import { UserState } from '@/types/user';
import { useAppSelector } from '@/redux/hooks';

export const MenuAvatarSideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);
    const user: UserState = useAppSelector((state) => state.user)
    
    const logOut = () => {
      deleteCookie('token')
      navigate('/')
      toast.info('Logout success')
    }
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <div className="relative inline-block text-left">
        {isOpen && (
            <div
                ref={menuRef}
                className="absolute top-[-100px] left-0 mt-2 w-72 rounded-md shadow-lg py-2 bg-black ring-[0.1px] ring-gray-300 ring-opacity-50 ring-offset-[0.05px] z-1-"
            >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div onClick={logOut} className='px-4 py-4 text-md font-bold cursor-pointer text-white hover:bg-gray-700'>Keluar dari {user.username}</div>
                </div>
            </div>
        )}
        <div ref={avatarRef} onClick={toggleMenu}>
            <AvatarSideBar user={user} />
        </div>
    </div>
  );
};
