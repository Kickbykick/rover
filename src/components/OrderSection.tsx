"use client"

import { TOrderSchema, orderSchema } from "@/lib/validations/types";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from 'sonner'
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    FormControl,
} from "@/components/ui/form"
import React, { useState } from 'react';
import { useUserStore } from "@/lib/store";
import { provinces } from "@/config/data";
import OrderDisplay from "./OrderDisplay";
import { Separator } from "./ui/separator";
import { Roboto } from "next/font/google";
import Image from 'next/image'

const roboto = Roboto({weight: "700", subsets: ["latin", "latin-ext"]});

export default function OrderSection({className}:{className?: string}) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm<TOrderSchema>({
        resolver: zodResolver(orderSchema),
    });

    const { userInfo } = useUserStore();
    const { province, setProvince, resetSelectedClothes } = useUserStore((state) => ({
        province: state.userInfo.province,
        setProvince: state.setProvince,
        resetSelectedClothes: state.resetSelectedClothes,
    })); 

    const handleProvinceChange = (value: string) => {
        setProvince(value);
    };
    
    const onSubmit = async (data: TOrderSchema) => {
        const dataWithClothes = {
            ...data,
            order: userInfo.selectedClothes,
        };
        
        const response: Response = await fetch("/api/order", {
            method: "POST",
            body: JSON.stringify(dataWithClothes),
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if(response.status == 200) {
            toast.info('Thank you for ordering. We will get intouch soon on the next steps.');
            reset();
            resetSelectedClothes();
        } else if(response.status == 400) {
            const jsonResponse = await response.json();
            console.log(jsonResponse.message);
            toast.error('Unable to order. Please try again.');
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="waitlist" className={className ?? "w-full py-12 md:py-24 lg:py-24 xl:py-24"}>
            <Toaster richColors/>

            <div className="px-2 md:px-4">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-4 text-center">
                        <div className="flex flex-col items-center mb-4">
                            <h3 className={`break-all text-3xl ${roboto.className} font-bold min-h-[5rem] sm:text-5xl xl:text-4xl/none`}>
                                Size Chart
                            </h3>
                            <button
                                type="button"
                                aria-label="Open size chart larger"
                                className="focus:outline-none"
                                onClick={() => setIsModalOpen(true)}
                                style={{ background: 'none', border: 'none', padding: 0 }}
                            >
                                <Image src={`/images/size_chart.png`} width={1000}
                                    height={1000}
                                    quality={100} 
                                    alt="Size Chart" className="rounded-lg max-w-full h-auto cursor-zoom-in"  />
                            </button>
                            {isModalOpen && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <div
                                        className="relative max-w-full max-h-full flex items-center justify-center p-2 sm:p-8"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <button
                                            className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
                                            onClick={() => setIsModalOpen(false)}
                                            aria-label="Close size chart"
                                        >
                                            &times;
                                        </button>
                                        <div className="overflow-auto max-h-[90vh] max-w-[95vw] flex items-center justify-center">
                                            <Image
                                                src="/images/size_chart.png"
                                                width={1000}
                                                height={1000}
                                                quality={100}
                                                alt="Size Chart Zoomed"
                                                className="rounded-lg w-auto h-auto max-h-[80vh] max-w-[90vw] object-contain"
                                                style={{ touchAction: 'pan-x pan-y' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="">
                            <h1 className={`break-all text-3xl ${roboto.className} font-bold min-h-[5rem] sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500`}>
                                Proceed To Submit Order
                            </h1>
                            <p className="max-w-[600px] text-black-200 md:text-xl mx-auto">
                                Submit new order for every new size selected
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center text-left ">
                            <Card className="mx-auto mt-5 py-10 sm:px-10 maxlsm:px-5 w-full max-w-[900px]">
                                <CardContent>
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <div className="grid sm:grid-cols-2 max-sm:grid-row-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="first-name">First name</Label>
                                                    <Input {...register("first_name")} id="first_name" placeholder="Enter your first name" />
                                                    {errors.first_name && (
                                                        <p className="text-red-500">{`${errors.first_name.message}`}</p>
                                                    )}
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="last_name">Last name</Label>
                                                    <Input {...register("last_name")} id="last_name" placeholder="Enter your last name" />
                                                    {errors.last_name && (
                                                        <p className="text-red-500">{`${errors.last_name.message}`}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 max-sm:grid-row-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input {...register("email")} id="email" placeholder="Enter your email" type="email" />
                                                    {errors.email && (
                                                        <p className="text-red-500">{`${errors.email.message}`}</p>
                                                    )}
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phoneNumber">Phone Number</Label>
                                                    <Input {...register("phoneNumber")} id="last_name" placeholder="Enter your phone number" />
                                                    {errors.phoneNumber && (
                                                        <p className="text-red-500">{`${errors.phoneNumber.message}`}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="deliveryAddress">Delivery Address</Label>
                                                <Input {...register("deliveryAddress")} id="deliveryAddress" placeholder="Enter your delivery address" type="deliveryAddress" />
                                                {errors.deliveryAddress && (
                                                    <p className="text-red-500">{`${errors.deliveryAddress.message}`}</p>
                                                )}
                                            </div>

                                            <div className="grid sm:grid-cols-2 max-sm:grid-row-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="city">City</Label>
                                                    <Input {...register("city")} id="city" placeholder="Enter your city" type="city" />
                                                    {errors.city && (
                                                        <p className="text-red-500">{`${errors.city.message}`}</p>
                                                    )}
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="province">Province</label>
                                                    <Select value={province} onValueChange={handleProvinceChange}>
                                                        <SelectTrigger>
                                                        <SelectValue placeholder="Select your province" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                        {provinces.map((province) => (
                                                            <SelectItem key={province} value={province}>
                                                            {province}
                                                            </SelectItem>
                                                        ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            {userInfo.selectedClothes.length === 0 && (
                                                <p className="text-red-500">{`Please select at least one item.`}</p>
                                            )}

                                            {userInfo.selectedClothes.length > 0 &&
                                                (
                                                    <>
                                                        {/* <Separator className="bg-black" /> */}
                                                        <OrderDisplay/>
                                                    </>
                                                )
                                            }
                                                            
                                            <div className="w-full flex justify-center">
                                                <Button disabled={isSubmitting || userInfo.selectedClothes.length === 0} className="bg-gray-800 text-white items-center" type="submit">
                                                    Place Order
                                                </Button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

