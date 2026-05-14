import { create } from "zustand";

type AreaStore = {
  areas: any;
  center: {
    lat: number;
    lng: number;
  }[];

  appendAreas: (areas: any[]) => void;
  setCenter: (center: any[]) => void;
};

export const useAreaStore = create<AreaStore>((set) => ({
  areas: [],
  center: [
    {
      lat: 36.68,
      lng: 117.04,
    },
    {
      lat: 36.65,
      lng: 117.00,
    },
  ],
  appendAreas: (areas) => set(() => ({ areas: [...areas] })),
  setCenter: (center) => set(() => ({ center: [...center] })),
}));
