"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import LikedCard from './LikedCard';
import data from '@/src/constants/goLive';
import { Button } from '../../ui/button';
import arrowLeft from "@/public/assests/arrowLeft.svg";
import arrowRight from "@/public/assests/arrowRight.svg";
import GoLiveModal from './GoLiveModal';



const Liked = () => {


    return (
        <div className='relative scrollable lg:h-[calc(100vh-100px)] overflow-y-auto'>
            <div className='lg:px-2 lg:mx-0 mx-4 pl-0 py-[2rem]'>
                <p className='text-lg font-bold px-2'>200 <span className='font-extralight'>Likes</span></p>
                <section className='grid md:grid-cols-4 grid-cols-1 gap-y-5 lg:gap-y-5 lg:gap-x-5 mx-auto mt-2'>
                    {data.map((item) =>
                        <div key={item.id}>
                            <LikedCard data={item} />
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
};

export default Liked;
