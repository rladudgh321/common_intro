'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { menuData } from './data'; // 데이터 파일 import
import { clsx } from 'clsx';
import CloseIcon from '@/app/icon/close';
import MenuIcon from '@/app/icon/menu';
import PhoneLogo from '@/app/icon/phone';

interface DropdownsProps {
    [key: string]: boolean;
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState<DropdownsProps>(
        menuData.reduce((acc, item) => ({ ...acc, [item.key]: false }), {})
    );

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const toggleDropdown = useCallback((key: string) => {
        setDropdowns((prev) => ({ ...prev, [key]: !prev[key],  }));
    }, []);

    console.log('dropdowns', dropdowns);

    return (
      <header className="bg-white shadow-md z-10">
            {/* 드롭바 열도록 하는 UI */}
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-transform duration-1000 ${isOpen ? '-translate-x-[70vw]' : 'translate-x-0'} overflow-hidden`}>
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        {/* 로고 */}
                        <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER as string}`}>
                          <PhoneLogo className="w-8 h-8" />
                        </a>
                    </div>
                    <h1 className='text-2xl font-semibold'>본오설비</h1>
                    <div className='flex gap-x-8 items-center'>
                        {/* 메뉴 버튼 */}
                        <button onClick={toggleMenu} className="text-lg focus:outline-none">
                            {isOpen ? (
                                <CloseIcon className={
                                  clsx(['w-6 h-6 transition-transform lg:hidden block text-black'], {
                                    ['animate-rotate']: isOpen
                                  })} />
                            ) : (
                              <MenuIcon />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Dimmed Background */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30" onClick={toggleMenu}></div>
            )}

            {/* Side Menu */}
            <div className={`fixed top-0 right-0 w-[70vw] bg-white shadow-lg transition-transform duration-1000 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} h-full`}>
                <nav className="flex flex-col p-4 h-full">
                    <div className="mb-4">
                      <h2 className='font-bold text-xl leading-8'>대전 본오설비를<br/>방문해주셔서 감사합니다</h2>
                    </div>
                    <div className="mb-4 border-b border-gray-300 py-2">
                      <h2 className='font-bold text-lg leading-6 float-right'>
                        <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>대표 김기혁<br/>010-4092-8204</a>
                      </h2>
                    </div>
                    <ul className="space-y-2">
                        {menuData.map(({ key, title, items }) => (
                            <li key={key} className="border-b border-gray-300 py-2">
                                <button 
                                    onClick={() => toggleDropdown(key)} 
                                    className="flex justify-between w-full text-left hover:text-blue-500 z-20"
                                >
                                    {title}
                                    {dropdowns[key] ? (
                                        <span>^</span>
                                    ) : (
                                        <span>v</span>
                                    )}
                                </button>
                                <div className={
                                  clsx(['transition-all', 'duration-700',
                                    {
                                    ['max-h-80 opacity-100 z-10']: dropdowns[key],
                                    ['max-h-0 opacity-0 z-0']: !dropdowns[key]
                                    }]
                                  )}>
                                    <ul className="ml-16 mt-2 space-y-1">
                                        {items.map(({ label, href }) => 
                                          (<li key={href} className={clsx(['py-1'])}>
                                            <Link href={href} className="block hover:text-blue-500 my-2">
                                              {label}
                                            </Link>
                                          </li>)
                                        )}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Nav;