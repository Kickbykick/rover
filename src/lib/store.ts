import create from 'zustand';

export interface ClothItemSelected {
  name: string;
  id: number;
  amount: number;
  size: string;
  quantity: number;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  deliveryAddress: string;
  city: string;
  province: string;
  selectedClothes: ClothItemSelected[];
  total: number;
}

interface UserStore {
  userInfo: UserInfo;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setDeliveryAddress: (deliveryAddress: string) => void;
  setCity: (city: string) => void;
  setProvince: (province: string) => void;
  addSelectedCloth: (cloth: ClothItemSelected) => void;
  removeSelectedCloth: (id: number) => void;
  calculateTotal: () => void;
  addClothItem: (clothItem: ClothItemSelected) => void;
  toggleSize: (clothId: number, size: string) => void;
  incrementQuantity: (clothId: number) => void;
  decrementQuantity: (clothId: number) => void;
  resetSelectedClothes: () => void; 
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    deliveryAddress: '',
    city: '',
    province: '',
    selectedClothes: [],
    total: 0,
  },
  setFirstName: (firstName) => set((state) => ({ userInfo: { ...state.userInfo, firstName } })),
  setLastName: (lastName) => set((state) => ({ userInfo: { ...state.userInfo, lastName } })),
  setEmail: (email) => set((state) => ({ userInfo: { ...state.userInfo, email } })),
  setPhoneNumber: (phoneNumber) => set((state) => ({ userInfo: { ...state.userInfo, phoneNumber } })),
  setDeliveryAddress: (deliveryAddress) => set((state) => ({ userInfo: { ...state.userInfo, deliveryAddress } })),
  setCity: (city) => set((state) => ({ userInfo: { ...state.userInfo, city } })),
  setProvince: (province) => set((state) => ({ userInfo: { ...state.userInfo, province } })),
  addSelectedCloth: (cloth) => set((state) => {
    const updatedClothes = [...state.userInfo.selectedClothes, cloth];
    const total = updatedClothes.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
    return {
      userInfo: {
        ...state.userInfo,
        selectedClothes: updatedClothes,
        total,
      },
    };
  }),
  removeSelectedCloth: (id) => set((state) => {
    const updatedClothes = state.userInfo.selectedClothes.filter((item) => item.id !== id);
    const total = updatedClothes.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
    return {
      userInfo: {
        ...state.userInfo,
        selectedClothes: updatedClothes,
        total,
      },
    };
  }),
  calculateTotal: () => set((state) => ({
    userInfo: {
      ...state.userInfo,
      total: state.userInfo.selectedClothes.reduce((sum, item) => sum + (item.amount * item.quantity), 0),
    },
  })),
  addClothItem: (item) => {
    set((state) => {
      const updatedClothes = [...state.userInfo.selectedClothes, item];
      const total = updatedClothes.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
      return {
        userInfo: {
          ...state.userInfo,
          selectedClothes: updatedClothes,
          total,
        },
      };
    });
  },
  toggleSize: (clothId, size) => set((state) => {
    const updatedClothes = state.userInfo.selectedClothes.map((item) => {
      if (item.id === clothId) {
        return { ...item, size: size };
      }
      return item;
    });
    
    return {
      userInfo: {
        ...state.userInfo,
        selectedClothes: updatedClothes,
      },
    };
  }),
  incrementQuantity: (clothId) => {
    set((state) => {
      const updatedClothes = state.userInfo.selectedClothes.map((item) =>
        item.id === clothId ? { ...item, quantity: item.quantity + 1 } : item
      );
      const total = updatedClothes.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
      return {
        userInfo: {
          ...state.userInfo,
          selectedClothes: updatedClothes,
          total,
        },
      };
    });
  },
  decrementQuantity: (clothId) => {
    set((state) => {
      const updatedClothes = state.userInfo.selectedClothes.map((item) => {
        if (item.id === clothId) {
          const newQuantity = item.quantity - 1;
          if (newQuantity <= 0) {
            return undefined; // Remove this item
          } else {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      });

      const filteredClothes = updatedClothes.filter((item) => item !== undefined) as ClothItemSelected[];
      const total = filteredClothes.reduce((sum, item) => sum + (item.amount * item.quantity), 0);

      return {
        userInfo: {
          ...state.userInfo,
          selectedClothes: filteredClothes,
          total,
        },
      };
    });
  },
  resetSelectedClothes: () => set((state) => ({
    userInfo: {
      ...state.userInfo,
      selectedClothes: [],
      total: 0,
    },
  })),
}));
