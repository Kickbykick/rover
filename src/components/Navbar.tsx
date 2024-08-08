import Link from "next/link";
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='sticky inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <Link
                href='/'
                className='flex z-40 font-semibold py-6 justify-center'>
                <Image
                    src='/images/logo.png'
                    alt='Rover wa qautre'
                    width={100}
                    height={100}
                    quality={100}
                />
            </Link>
        </nav>
    )
}