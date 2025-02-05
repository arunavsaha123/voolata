import React, { useState, useRef, useEffect } from 'react';
import search from '../assets/search-icon.svg';
import bin from '../assets/delete-icon.svg';
import plus from '../assets/plus.svg';
import profileicon from '../assets/profile-icon.svg';
import download from '../assets/download.svg';
import { GoPlusCircle } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";


const categories = ['All', 'Botany', 'Animal', 'Creator', 'Medical', 'Individual'];

const qrData = [
    { id: 1, name: 'David Storm', category: 'Botany', status: 'Active', type: 'Individual', quantity: 1, date: '07/08/2024', scans: 124 },
    { id: 2, name: 'Sarah White', category: 'Animal', status: 'Inactive', type: 'Organization', quantity: 5, date: '06/10/2024', scans: 200 },
    { id: 3, name: 'Michael Green', category: 'Creator', status: 'Active', type: 'Individual', quantity: 2, date: '05/20/2024', scans: 310 },
    { id: 4, name: 'Emma Brown', category: 'Medical', status: 'Active', type: 'Company', quantity: 10, date: '04/15/2024', scans: 89 },
    { id: 5, name: 'John Doe', category: 'Individual', status: 'Inactive', type: 'Individual', quantity: 1, date: '03/25/2024', scans: 150 },
];

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdownId, setActiveDropdownId] = useState(null);
    const dropdownRef = useRef(null);

    const filteredData = selectedCategory === 'All'
        ? qrData
        : qrData.filter(item => item.category === selectedCategory);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setActiveDropdownId(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="p-4 sm:p-6 lg:p-10">
            <div>
                <h1 className="text-2xl ml-10 mt-5 font-bold">Dashboard</h1>
                <form className="relative w-64 mt-5 ml-10 sm:w-72 lg:w-96">
                    <img src={search} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input
                        type="text"
                        className="border border-gray-500 rounded-full pl-10 pr-4 py-2 w-full h-10 focus:outline-none"
                        placeholder="Search..."
                    />
                </form>
            </div>

            <div className="flex justify-between items-center mx-10 mt-5 sm:mx-6">
                <h2 className="text-[24px] font-semibold">My QR Codes</h2>
                <div className="flex items-center gap-5 relative" ref={dropdownRef}>
                    <img src={bin} alt="Delete" className="w-6 h-6 cursor-pointer hover:opacity-75" />
                    <button
                        className="flex items-center justify-center bg-[#454545] text-white rounded-full w-10 h-10 lg:rounded-md lg:w-auto lg:h-auto px-5 py-2 text-sm font-medium hover:bg-gray-700 transition"
                        onClick={() => setIsDropdownOpen(prev => !prev)}
                    >
                        <GoPlusCircle size={24} className="text-green-500 " />

                        <span className="hidden lg:inline ml-2">Add</span>
                    </button>


                    <button>
                        <GoPlusCircle size={24} className="text-green-500 rounded-full sm:hidden bg-[#454545]" onClick={() => setIsDropdownOpen(perv => !perv)} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Create QR</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bulk QR</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Create Folder</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex font-semibold border-b border-[#E1E1E1] pb-2 mx-10 mt-5 sm:flex lg:justify-start lg:gap-8 overflow-x-auto">
                {categories.map(category => (
                    <div
                        key={category}
                        className="flex flex-col items-center cursor-pointer px-2 lg:px-4"
                        onClick={() => setSelectedCategory(category)}
                    >
                        <span className={`pb-1 ${selectedCategory === category ? 'text-blue-600' : ''}`}>
                            {category}
                        </span>
                        <div className={`h-[2px] w-full transition-all ${selectedCategory === category ? 'bg-blue-600' : 'bg-transparent '}`}></div>
                    </div>
                ))}
            </div>

            <div className="border rounded-[8px] h-full mx-10 mt-5 hidden md:block sm:mx-6">
                <div className="flex items-center justify-between px-5 py-3 bg-gray-100 border-b rounded border-black">
                    <div className="flex items-center gap-3 w-[20%]">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500" />
                        <div className="font-semibold text-sm sm:text-base">Username</div>
                    </div>
                    <div className=" items-center justify-between w-[60%] text-xs sm:text-sm font-semibold md:flex hidden">
                        <div className="w-1/5 text-center">Status</div>
                        <div className="w-1/5 text-center">Type</div>
                        <div className="w-1/5 text-center">Quantity</div>
                        <div className="w-1/5 text-center">Date</div>
                        <div className="w-1/5 text-center">Scans</div>
                    </div>
                    <div className="w-[10%] text-center font-semibold md:flex hidden">View QR</div>
                    <div className="w-[10%]   items-center justify-center md:flex hidden font-semibold">
                        Download
                    </div>
                </div>

                {filteredData.map(user => (
                    <div key={user.id} className="flex items-center justify-between px-5 py-3 border-t border-gray-300">
                        <div className="flex items-center gap-3 w-[20%]">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500" />
                            <img src={profileicon} alt="Profile Icon" className="w-6 h-6" />
                            <div className="font-medium text-sm sm:text-base">{user.name}</div>
                        </div>
                        <div className="flex items-center justify-between w-[60%] text-sm sm:text-base">
                            <div className="w-1/5 text-center border md:flex hidden border-gray-400 px-3 py-1 rounded-full">{user.status}</div>
                            <div className="w-1/5 text-center md:block hidden ">{user.type}</div>
                            <div className="w-1/5 text-center md:block hidden">{user.quantity}</div>
                            <div className="w-1/5 text-center md:block hidden">{user.date}</div>
                            <div className="w-1/5 text-center md:block hidden">{user.scans}</div>
                        </div>
                        <div className="w-[10%] text-center font-semibold cursor-pointer text-xs md:flex hidden sm:text-sm">View</div>
                        <div className="w-[10%] flex flex-col items-center justify-center">
                            <img src={download} alt="Download" className="w-6 h-6 md:flex hidden cursor-pointer hover:opacity-75 mt-1" />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className='sm:hidden'>
                    {filteredData.map(user => (
                        <div className="border  flex items-center gap-3 p-3 rounded-[8px] h-full mx-10 mt-5">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500" />
                            <img src={profileicon} alt="Profile Icon" className="w-[64px] h-[64px]" />

                            <div className="flex flex-col font-medium text-sm sm:text-base">
                                <div>{user.name}</div>
                                <div className="w-fit mt-1 text-center border border-gray-400 px-3 py-1 rounded-full">
                                    {user.status}
                                </div>
                            </div>
                            <botton className='ml-auto' onClick={() => setActiveDropdownId(activeDropdownId === user.id ? null : user.id)} >
                                <CiMenuKebab />
                            </botton>
                            {activeDropdownId === user.id && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                                    <ul className="py-2">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
