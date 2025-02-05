import React from 'react';
import profilecard from '../assets/profile-card.svg';
import profileicon from '../assets/profile-icon.svg';

const MedicalDesktop = () => {
    return (
        <div className='bg-[#E5EFF3] p-9 h-full'>
            <div className="flex justify-between items-center p-10">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <div className="flex gap-10">
                    <ul className="border rounded-full p-2">Individual</ul>
                    <ul className="border bg-[#1858F0] text-white rounded-full p-2">Medical</ul>
                    <ul className="border rounded-full p-2">Animal</ul>
                    <ul className="border rounded-full p-2">Creator</ul>
                    <ul className="border rounded-full p-2">Botany</ul>
                </div>
            </div>
            <div className='flex justify-between m-10'>
                <div className="relative h-fit w-fit ml-10 inline-block">
                    <img src={profilecard} alt="Profile Card" />

                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                        <img src={profileicon} alt="Profile Icon" className="w-[92px] h-[92px]" />
                        <div className="mt-2 font-semibold text-lg">David Storm</div>
                    </div>

                    <div className="absolute bottom-5 left-5 w-full px-5">
                        <div className="grid grid-cols-2 gap-x-10 text-gray-500 text-sm font-semibold">
                            <div className="flex flex-col gap-2">
                                <span>Gender</span>
                                <span>Age</span>
                                <span>Language</span>
                                <span>Height</span>
                                <span>Date of Birth</span>
                                <span>Phone Number</span>
                            </div>
                            <div className="flex flex-col gap-2 text-black">
                                <span>Male</span>
                                <span>27</span>
                                <span>ENG</span>
                                <span>6.3</span>
                                <span>01/01/1997</span>
                                <span>+917636459347</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white  p-9 h-[459px]  mx-10 rounded-[8px] '>
                    <h2 className='text-[20px] font-bold'>Address</h2>
                    <div className='pr-15 pt-3 text=[14px]'>
                        <p>Neo Apartments, Block A, 1802, Near Golf Course, Sector 76  </p>
                        <p>State -  New Delhi</p>
                        <p>Postal - 781005</p>
                    </div>
                    <h2 className='text-[20px] font-bold mt-2'>Previous Surgeries</h2>
                    <p className='border-b-1 mt-2 '>Nill</p>
                    <h2 className='text-[20px] font-bold mt-2'>Smoker</h2>
                    <p className='border-b-1 mt-2'>Nill</p>
                    <h2 className='text-[20px] font-bold mt-2'>Alcohol Consumption</h2>
                    <p className='border-b-1 mt-2'>Nill</p>
                    <h2 className='text-[20px] font-bold mt-2'>Exercise Routine</h2>
                    <p className='border-b-1  mt-2'>In the morning</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className="flex flex-col gap-5">
                        {/* Chronic Medical Conditions */}
                        <div className="bg-white p-5 w-[332px]  rounded-[8px] h-full">
                            <h2 className="text-[20px] font-bold mt-2">Chronic Medical Conditions</h2>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                    Diabetes
                                </span>
                                <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                    Lactose Intolerant
                                </span>
                                <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                    Protein-Energy Malnutrition
                                </span>
                            </div>
                        </div>

                        {/* Current Medication */}
                        <div className="bg-white w-[332px] p-5  rounded-[8px] ">
                            <h2 className="text-[20px] font-bold mt-2">Current Medication</h2>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                    Diabetes
                                </span>
                                <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                    Lactose Intolerant
                                </span>
                                <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                    Protein-Energy Malnutrition
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-[332px] p-5  rounded-[8px] ">
                        <h2 className="text-[20px] font-bold mt-2">Dietary Preferences</h2>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                Diabetes
                            </span>
                            <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                Lactose Intolerant
                            </span>
                            <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                                Protein-Energy Malnutrition
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex '>
                <div className="bg-white w-[332px] p-5 mx-20 rounded-[8px] ">
                    <h2 className="text-[20px] font-bold mt-2">Known Allergies</h2>
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                            Diabetes
                        </span>
                        <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                            Lactose Intolerant
                        </span>
                        <span className=" rounded-[5.44px] p-2 w-fit bg-[#E0EBFB] text-[#3567B0] flex items-center">
                            Protein-Energy Malnutrition
                        </span>
                    </div>
                </div>
                <div className='bg-white w-[520px] p-5 mx-10 rounded-[8px]'>
                    <h2 className='text-[20px] font-bold mt-2'>SOS</h2>
                    <div className='flex'>
                        <div className='w-[118px] h-[81px bg-white shadow-2xl  '></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalDesktop;
