import Link from "next/link";
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <Link
                href='/'
                className='flex z-40 font-semibold'>
                <Image
                    src='/images/Rover-wa-Quatre.png'
                    alt='Rover wa qautre'
                    width={300}
                    height={300}
                    quality={100}
                />
            </Link>
        </nav>
    )
}