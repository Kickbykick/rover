"use client"

import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { TEmailSchema, emailSchema } from "@/lib/validations/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"

const DropListPage = () => {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm<TEmailSchema>({
        resolver: zodResolver(emailSchema),
      });
    
      const onSubmit = async (data: TEmailSchema) => {
        console.log("All the waitlist data: ", data)
        const response: Response = await fetch("/api/waitlist", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if(response.status == 200) {
            toast({ 
                description: "Thank you for joining our drop list.",
            })
            reset();
        } else if(response.status == 400) {
            const jsonResponse = await response.json();
            console.log(jsonResponse.message);
            toast({ 
                description: "Unable to join drop list. Please try again.",
            })
        }
    };

    return (
        <section id="newsletter" className="flex flex-col md:flex-row max-h-screen m-auto max-w-screen justify-between items-center">
            <div className='hidden md:block w-[30%] h-[97vh]'>
                <Image
                    src='/model_1.JPG'
                    alt='Dry Cleaning Winnipeg'
                    height={500}
                    width={500}
                    quality={100}
                    className='w-full h-full'
                    style={{
                        objectFit: "cover",
                    }}
                    priority={true}
                />
            </div>
            <div className="flex flex-col items-center max-w-1/3 mx-2">
                <Image
                    src='/rover_world.webp'
                    alt='Model 1'
                    height={200}
                    width={200}
                    quality={100}
                    className=''
                    priority={true}
                />

                <p className='text-xl text-[#A3A3A3]'>JOIN OUR DROP LIST</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex sm:flex-row flex-col items-center justify-center text-left">
                    <Input {...register("email")} id="email" className="rounded-none w-72 text-xl text-[#A3A3A3]" placeholder="YOUR EMAIL ADDRESS" type="email" />
                    <Button disabled={isSubmitting} className="bg-black text-xl my-2 sm:my-0 ml-2 text-[#A3A3A3] rounded-none" type="submit">
                        SUBSCRIBE
                    </Button>
                </form>
            </div>

            <div className='block md:hidden w-3/4 h-[500px] -m-2 xl:mt-0 mt-6 rounded-md bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-2 lg:rounded-2xl lg:p-2'>
                <Image
                    src='/model_2.JPG'
                    alt='Dry Cleaning Winnipeg'
                    height={500}
                    width={500}
                    quality={100}
                    className='rounded-md object-cover w-full h-full'
                    priority={true}
                />
            </div>

            <div className='hidden md:block w-[30%] h-[97vh]'>
                <Image
                    src='/model_2.JPG'
                    alt='Model 2'
                    height={500}
                    width={500}
                    quality={100}
                    style={{
                        objectFit: "cover",
                    }}
                    className='w-full h-full'
                    priority={true}
                />
            </div>
        </section>
    )
}

export default DropListPage