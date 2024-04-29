"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import GoLiveCard from './GoLiveCard';
import data from '@/src/constants/goLive';
import { Button } from '../../ui/button';
import arrowLeft from "@/public/assests/arrowLeft.svg";
import arrowRight from "@/public/assests/arrowRight.svg";
import GoLiveModal from './GoLiveModal';

const ITEMS_PER_PAGE = 8;

const GoLive = () => {
    // State to track the current page
    const [currentPage, setCurrentPage] = useState(0);


    // State to show the profile modal
    const [showModal, setShowModal] = useState(false);

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

    const modalControl = () => {
      setShowModal((prev) => !prev)
    };
   



    return (
        <div className='relative'>
        <div className='py-6 px-4'>
            <section className='grid md:grid-cols-4 grid-cols-1 gap-y-4 md:gap-y-3 mx-auto'>
                {currentItems.map((item) =>
                    <div key={item.id}>
                        <GoLiveCard data={item} hideModal={modalControl}/>
                    </div>
                )}
            </section>

            {/* Button group for navigation */}
            <div className="flex items-center gap-[3rem] text-right justify-center mt-4 py- lg:py- lg:pt-4">
                {/* Previous button */}
                <Button
                    size="sm"
                    onClick={goToPreviousPage}
                    className="backdrop-blur-sm p-2 rounded bg-buttonbg"
                    disabled={currentPage === 0}
                >
                    <Image src={arrowLeft} width={13} height={15} alt="arrow left" />
                </Button>

                {/* Next button */}
                <Button
                    size="sm"
                    onClick={goToNextPage}
                    className="backdrop-blur-sm p-2 rounded bg-base"
                    disabled={(currentPage + 1) * ITEMS_PER_PAGE >= data.length}
                >
                    <Image src={arrowRight} width={13} height={15} alt="arrow Right" />
                </Button>
            </div>
        </div>
        {/* {showModal && <GoLiveModal hideModal={modalControl}/>} */}

        </div>
    );
};

export default GoLive;
