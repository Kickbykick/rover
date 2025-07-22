"use client"

import Link from "next/link";
import Image from 'next/image'
import { ClothItem } from "@/config/data";
import { Toggle } from "./ui/toggle";
import { useUserStore } from "@/lib/store";
import { Button } from "./ui/button";
import React, { useState, useEffect } from 'react';
import { Roboto } from "next/font/google";

const roboto = Roboto({weight: "500", subsets: ["latin", "latin-ext"]});

export default function ClothCard({clothItem, className} : {className?:string, clothItem: ClothItem}) {
    const { addClothItem, toggleSize, userInfo, incrementQuantity, decrementQuantity } = useUserStore();
    const isItemSelected = userInfo.selectedClothes.find((item) => item.id === clothItem.id);

    const handleToggleClick = (size: string) => {
        if (!isItemSelected) {
            addClothItem({ 
                name: clothItem.name, 
                id: clothItem.id, 
                amount: clothItem.amount, 
                size: size, 
                quantity: 1 
            });
            console.log("Size - ", size, "\n Item Selected - ", isItemSelected, userInfo.selectedClothes)
        } else {
            toggleSize(clothItem.id, size);
        }
    };

    const [isHovering, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Simple check: consider mobile if width <= 768px
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const onMouseEnter = () => {
        if (!isMobile) setIsHovered(true);
    };
    const onMouseLeave = () => {
        if (!isMobile) setIsHovered(false);
    };

    return (
        <div 
            className={className}
            style={{ position: 'relative' }}
        >
            {/* Flip Button only on mobile */}
            <Button
                type="button"
                variant="outline"
                className="absolute top-2 left-2 z-10 px-2 py-1 text-md w-[18] font-semibold bg-gray-100"
                aria-label="Flip image"
                onClick={() => setIsHovered((prev) => !prev)}
            >
                Flip
            </Button>
            {isHovering ? (
                <Image
                    src={`/images/${clothItem.backImage}`}
                    alt={clothItem.name}
                    className="rover_image rounded-lg"
                    width={400}
                    height={400}
                    quality={100}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
                ) : (
                    <Image
                    src={`/images/${clothItem.image}`}
                    alt={clothItem.name}
                    className={`rover_image rounded-lg transition-opacity duration-500`}
                    width={400}
                    height={400}
                    quality={100}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            )}
            
            <div className="col mt-2">
                <div className="flex flex-row text-[1.2rem] w-full justify-between mb-2">
                    <p className={`${roboto.className}`}>
                        {clothItem.name}
                    </p>
                    <p className="border-b-2 border-red-600 ">
                        ${clothItem.amount}.00
                    </p>
                </div>

                <div className="flex flex-row w-full justify-between">
                    <div className="space-x-1">
                        {clothItem.sizes.map((size, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className={`w-6 h-8 font-light	${isItemSelected?.size === size ? 'bg-gray-200' : 'transparent'}`}
                                aria-label="Toggle size"
                                onClick={() => handleToggleClick(size)}
                            >
                            {size}
                            </Button>
                        ))}
                    </div>

                    {isItemSelected &&
                        <div className="flex flex-row space-x-4 items-center">
                            <Button 
                                className="w-6 h-8"
                                variant="secondary"
                                onClick={() => decrementQuantity(isItemSelected.id)}
                            >
                                -
                            </Button>
                            
                            <p className="font-semibold">{isItemSelected.quantity}</p>
                            
                            <Button 
                                className="w-6 h-8"
                                variant="secondary" 
                                onClick={() => incrementQuantity(isItemSelected.id)}
                            >
                                +
                            </Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}