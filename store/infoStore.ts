import { create } from "zustand";
import { ChangeEvent } from "react";

interface State {
  signOff: string;
  fullName: string;
  jobTitle: string;
  company: string;
  workAddress: string;
  phoneNumber: string;
  workEmail: string;
  website: string;
  LinkedInLink: string;
  YouTubeLink: string;
  TwitterLink: string;
  FacebookLink: string;
  InstagramLink: string;
  image: string;

  setInfoOutput: (newInfoOutput: Partial<State>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useInfoStore = create<State>((set) => ({
  signOff: "Best regards,",
  fullName: "Emma Smith",
  jobTitle: "Project Manager",
  company: "Woodpecker",
  workAddress: "Krakowska 29D, Wrocław",
  phoneNumber: "500-730-530",
  workEmail: "emma@woodpecker.co",
  website: "https://woodpecker.co/",
  LinkedInLink: "https://linkedin.com/company/woodpecker-co/",
  YouTubeLink: "https://youtube.com/c/Woodpeckerco/",
  TwitterLink: "https://twitter.com/Woodpeckerapp/",
  FacebookLink: "https://facebook.com/woodpeckerapp/",
  InstagramLink: "https://instagram.com/woodpeckerapp/",
  image: "/initialIcon.png",

  setInfoOutput: (newInfoOutput) => {
    set((state) => ({ ...state, ...newInfoOutput }));
  },

  handleChange: (e) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    set((state) => ({
      ...state,
      [name]: value,
    }));
  },

  onImageChange: (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      set((state) => ({
        ...state,
        image: URL.createObjectURL(file),
      }));
    }
  },
}));

export default useInfoStore;
