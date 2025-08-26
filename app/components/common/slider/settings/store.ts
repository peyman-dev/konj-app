import { create } from "zustand";

interface IProps {
  setHook: (hook: object) => void;
  hook: object;
  getHook: () => object;
}

export const useSwiperStore = create<IProps>((set, get) => ({
  setHook: (hook: object) => set({ hook }),
  getHook() {
    return get().hook;
  },
  hook: () => {},
}));
