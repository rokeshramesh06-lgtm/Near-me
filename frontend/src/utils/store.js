import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),

  setUser: (user) => set({ user }),
  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export const useLocationStore = create((set) => ({
  latitude: null,
  longitude: null,
  address: null,

  setLocation: (latitude, longitude, address) =>
    set({ latitude, longitude, address }),
  getCurrentLocation: () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            set({ latitude, longitude });
            resolve({ latitude, longitude });
          },
          (error) => reject(error)
        );
      } else {
        reject(new Error('Geolocation not available'));
      }
    });
  },
}));

export const useShoppingStore = create((set) => ({
  items: [],
  lists: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  updateItem: (itemId, updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      ),
    })),
  setLists: (lists) => set({ lists }),
}));
