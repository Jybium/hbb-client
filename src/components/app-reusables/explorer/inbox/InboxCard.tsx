import { Button } from '@/src/components/ui/button'
import React from 'react'

const InboxCard = ({ type }: { type: string }) => {

    return (
        <div>


            <div className={` ${type === "actionRequired" ? "bg-background" : "bg-white/20" } w-full rounded-2xl p-[12px] md:p-[1rem] grid gap-y-[0.63rem] cursor-pointer`}>
                <div className="flex justify-between items-start">
                    <div className='flex gap-x-[0.75rem]'>
                        <p className="h-12 w-12 rounded-full bg-black"></p>
                        <div className="gap-y-[0.13rem]">
                            <p className='text-lg font-medium'>Claudia Maudi</p>
                            <p className='text-[1rem]'>Call request</p>
                        </div>
                    </div>
                    <p className="text-[0.75rem]">4:30pm</p>
                </div>

                {type !== "admin" && type !== "neutral" && (
                    <div className="md:flex md:justify-between grid gap-y-2 items-center h-content md:h-[3rem] px-[1rem] py-[0.5rem] rounded-[0.75rem] backdrop-blur-xl bg-borderWhite/20">
                        <p className='text-sm'>Request for a call</p>
                        <Button className={` ${type === "actionRequired" && "bg-tertiary"} ${type === "accepted" && "bg-green"} ${type === "rejected" && "bg-red"} h-[1.5rem] md:h-[2rem] px-[0.75rem] py-[0.38rem] w-fit text-black text-[0.88rem] rounded-[0.50rem] text-sm`} disabled={type === "accepted" || type === "rejected"}>{type === "actionRequired" && "Action required"} {type === "accepted" && "Accepted"} {type === "rejected" && "Rejected"}</Button>
                    </div>
                )}

            </div>

        </div>
    )
}

export default InboxCard