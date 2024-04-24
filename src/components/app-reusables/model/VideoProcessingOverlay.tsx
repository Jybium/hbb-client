import React from 'react'
import { LocationIcon } from '../../svgs'

const VideoProcessingOverlay = () => {
    return (
        <div className='w-full h-full absolute top-0 left-0 backdrop-blur-lg bg-blend-overlay rounded-lg grid flex-1'>
            <div className="absolute inset-0 bg-overlay opacity-100 flex flex-1 h-full w-full"></div>
            <div className="grid justify-center items-center h-full w-full relative z-10 ">
                {/* Caller details */}
                <div className='grid justify-center items-center text-center'>
                    {/* Image */}
                    <p className='bg-profile h-[7rem] w-[7rem] rounded-full'></p>

                    {/* Name */}
                    <p>Samuel Etoo</p>

                    {/* Location */}
                    <p className='flex items-center gap-2'><LocationIcon /> Washington D.C</p>
                </div>

                {/* Connection progress slider */}
                <p>Joining live ...</p>

                {/* Progress Counter */}
                <p className='text-base text-[5rem]'>10</p>
            </div>
        </div>
    );
}

export default VideoProcessingOverlay;
