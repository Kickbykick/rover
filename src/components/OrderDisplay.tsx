import React from 'react'
import { Separator } from './ui/separator'
import { ClothItemSelected, useUserStore } from '@/lib/store';
import { clothItems } from '@/config/data';

export default function OrderDisplay() {
  const { userInfo } = useUserStore();

  return (
    <div className="flex  flex-wrap justify-between items-start gap-6 pt-8">
      {userInfo.selectedClothes.map((item: ClothItemSelected) => {
        const selectedCloth = clothItems.find(cloth => cloth.id === item.id);
        
        return   (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={`/images/${selectedCloth?.image}`}
              alt={item.name}
              width={100}
              height={100}
              className="object-cover rounded-md"
            />
            <div className="grid gap-2">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Quantity: {item.quantity}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Size: {item.size}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex items-center w-full justify-between gap-2 text-muted-foreground">
        <p className='text-2xl'>Total:</p>
        <p className='text-2xl'>${userInfo.total}</p>
      </div>
    </div>
  )
}
