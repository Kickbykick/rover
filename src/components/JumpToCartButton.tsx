"use client"

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
};

const JumpToCartButton = () => {
  return (
    <div className="fixed bottom-5 right-5">
        <Link href="#waitlist" className='sm:ml-2' onClick={handleScroll}>
            <Button
                className='bg-black text-white hover:text-white'
            >
                Jump to Cart
            </Button>
        </Link>
    </div>
  );
};

export default JumpToCartButton;
