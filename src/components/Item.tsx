import Link from "next/link";
import Image from 'next/image'

export default function Items({image} : {image?:string}) {
    return (
        <Image
            src={`/images/${image}`}
            alt='Rover wa qautre'
            className="rover_image"
            width={500}
            height={500}
            quality={100}
        />
    )
}