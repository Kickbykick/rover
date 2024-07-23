import ClothCard from "@/components/ClothCard";
import DropListPage from "@/components/DropListPage";
import Items from "@/components/Item";
import JumpToCartButton from "@/components/JumpToCartButton";
import OrderSection from "@/components/OrderSection";
import { clothItems, imageName } from "@/config/data";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-6">
      
      <Image
        src={`/rover_world.webp`}
        alt="rover logo"
        className="pb-4"
        width={100}
        height={100}
        quality={100}
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {clothItems.map((clothItem, index) => (
            <ClothCard
              key={clothItem.id}
              clothItem={clothItem}
            />
        ))}
      </div>

      <OrderSection/>
      <JumpToCartButton />
    </main>
  );
}
