// src/store.js
import create from 'zustand';

export const useStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));
