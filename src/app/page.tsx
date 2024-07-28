import ClothCard from "@/components/ClothCard";
import JumpToCartButton from "@/components/JumpToCartButton";
import OrderSection from "@/components/OrderSection";
import { clothItems, imageName } from "@/config/data";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 mx-auto mt-20">
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
