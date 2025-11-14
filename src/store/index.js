import { create } from "zustand";

// export let domain = "http://localhost:1337";
export let domain = "https://refined-animal-a9eda0bb65.strapiapp.com";

export const userCart = create((set) => ({
  value: [],
  addToCart: (newOpj) => set((state) => ({ value: [...state.value, newOpj] })),
  removeFromCart: (id) =>
    set((state) => ({ value: state.value.filter((it) => it.id !== id) })),
}));

export const selectCats = create((set) => ({
  value: null,
  selectedCategory: (category) => set(() => ({ value: category })),
}));

export const increase = create((set) => ({
  count: {},
  inc: (id) =>
    set((state) => {
      const currentCount = state.count[id] || 1;
      return {
        count: { ...state.count, [id]: currentCount + 1 },
      };
    }),
  dec: (id) =>
    set((state) => {
      const currentCount = state.count[id] || 1;
      const newCount = Math.max(1, currentCount - 1)
      return {
        count: { ...state.count, [id]: newCount,}
    }}),
}));

