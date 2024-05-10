import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import subcription from "@/src/constants/subcriptionCard"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Check, X } from 'lucide-react'


// type CardProps = React.ComponentProps<typeof Card>

const SubscriptionCard = ({ className, type, click }: any) => {

    const styles = `py-[1.50rem] px-[0.75rem] ${className}`
    return (
        <div>
            <Card className={styles} onClick={() => click(type)}>
                <CardHeader className='px-3 py-1 gap-y-2'>
                    <div className='flex justify-between'>
                        <p>{type}</p>
                        <Button className=' bg-white/20
                     backdrop-blur-lg text-white h-6 py-1 px-3' variant="link">
                            $000/ <span className='text-xs font-thin'>Monthly</span>
                        </Button>
                    </div>
                    <Button className='shadow-custom-shadow w-fit h-8 bg-tertiary text-sm text-black'>
                        current plan
                    </Button>
                </CardHeader>
                <hr className='my-2' />
                <CardContent className='text-[0.88rem] px-3'>
                    <p className='flex gap-2'><Check className='mr-1' size={20} color='#EFD378' />{subcription.call} {type == "free" && "(Limited)"}</p>
                    <p className='flex gap-2'>{type === "free" ? <X className='mr-1' size={20} color='#E688A3' /> : <Check className='mr-1' size={20} color='#EFD378'/>}{subcription.discover}</p>
                    <p className='flex gap-2'>{type !== "free" ? <Check className='mr-1' size={20} color='#EFD378' /> : <X className='mr-1' size={20} color='#E688A3' />}{subcription.like}</p>
                    <p className='flex gap-2'>{type !== "premium" ? <X className='mr-1' size={20} color='#E688A3' /> : <Check className='mr-1' size={20} color='#EFD378' />}{subcription.request}</p>
                </CardContent>
              
            </Card>

        </div>
    )
}

export default SubscriptionCard