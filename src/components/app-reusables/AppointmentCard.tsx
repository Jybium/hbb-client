import React from 'react'
import AppointmentCardProps from '@/src/types/appointment';
import { Button } from '../ui/button'
import { LocationIcon, TimeIcon } from '../svgs'





const AppointmentCard: React.FC<AppointmentCardProps> = ({ item }) => {
    return (
        <div>
            {item.map((item) => (
                <div key={item.id} className='flex gap-[0.75rem] rounded-lg my-2 shadow-md w-full'>
                    <div className='bg-base w-1/6 rounded-l-lg grid justify-center items-center content-center'>
                        <p>{item.date.day}</p>
                        <p>{item.date.no}</p>
                    </div>
                    <div className='p-[0.5rem] w-full'>
                        <div className='flex gap-4 border-b items-center border-white pb-2'>
                            {/* Image */}
                            <div className='h-3 p-3 bg-base rounded-full'></div>
                            {/* Name and Location */}
                            <div>
                                <p>{item.details.name}</p>
                                <p className='flex gap-1 items-center text-xs'>
                                    <span><LocationIcon className='text-xs w-3/4' /></span>
                                    {item.details.location}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pt-2 text-xs'>
                            {/* Time */}
                            <p className='flex gap-1 items-center'>
                                <span><TimeIcon className='w-4/5' /></span>
                                {item.time}
                            </p>
                            {/* Button or Cancelled text */}
                            {item.appointment ? (
                                <Button className='bg-green-500 h-8 md:h-6 md:px-2 w-auto md:text-[10px] rounded-md' variant="ghost">
                                    Connect to call
                                </Button>
                            ) : (
                                <p className='text-red'>Cancelled</p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default AppointmentCard