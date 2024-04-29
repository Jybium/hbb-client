import React from 'react'
import Liked from "@/src/components/app-reusables/explorer/Liked";

const page = () => {
    return (
        <main className="w-full bg-pink md:max-h-screen rounded-lg overflow-y-auto">
            <Liked />
        </main>
    )
}

export default page