"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import GoLiveCard from './GoLiveCard';
import data from '@/src/constants/goLive';
import { Button } from '../../ui/button';
import arrowLeft from "@/public/assests/arrowLeft.svg";
import arrowRight from "@/public/assests/arrowRight.svg";

const ITEMS_PER_PAGE = 8;

const GoLive = () => {
    // State to track the current page
    const [currentPage, setCurrentPage] = useState(0);

    // Calculate the starting and ending index for the current page
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Extract the items to display for the current page
    const currentItems = data.slice(startIndex, endIndex);

    // Handle going to the next page
    const goToNextPage = () => {
        if ((currentPage + 1) * ITEMS_PER_PAGE < data.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handle going to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='py-3 px-2'>
            <section className='grid md:grid-cols-4 grid-cols-1 gap-3 mx-auto'>
                {currentItems.map((item) =>
                    <div key={item.id}>
                        <GoLiveCard data={item} />
                    </div>
                )}
            </section>

            {/* Button group for navigation */}
            <div className="flex items-center gap-4 text-right justify-center mt-4">
                {/* Previous button */}
                <Button
                    size="sm"
                    onClick={goToPreviousPage}
                    className="backdrop-blur-sm p-2 rounded bg-buttonbg"
                    disabled={currentPage === 0}
                >
                    <Image src={arrowLeft} width={13.21} height={21} alt="arrow left" />
                </Button>

                {/* Next button */}
                <Button
                    size="sm"
                    onClick={goToNextPage}
                    className="backdrop-blur-sm p-2 rounded bg-base"
                    disabled={(currentPage + 1) * ITEMS_PER_PAGE >= data.length}
                >
                    <Image src={arrowRight} width={13.21} height={21} alt="arrow Right" />
                </Button>
            </div>
        </div>
    );
};

export default GoLive;
