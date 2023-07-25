import { create } from "zustand";
import { ChangeEvent } from "react";
import { validateLink } from "../utils/validation";

type State = {
  infoOutput: {
    textInput: string;

    signOff: string;

    fullName: string;
    occupation: string;
    jobTitle: string;
    company: string;
    workAddress: string;
    phoneNumber: string;
    workEmail: string;
    website: string;

    LinkedInLink: string;
    GitHubLink: string;
    YouTubeLink: string;
    TwitterLink: string;
    FacebookLink: string;
    InstagramLink: string;

    image: string;
  };
  setInfoOutput: (newInfoOutput: Partial<State["infoOutput"]>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValidLink: (linkName: string) => boolean;
};

const useInfoStore = create<State>((set) => ({
  infoOutput: {
    textInput: "",
    signOff: "Regards",

    fullName: "Emma Smith",
    occupation: "Occupation",
    jobTitle: "Project Manager",
    company: "Woodpecker",
    workAddress: "Krakowska 29D, Wrocław",
    phoneNumber: "500-730-530",
    workEmail: "emma@woodpecker.co",
    website: "https://woodpecker.co/",

    LinkedInLink: "https://linkedin.com/company/woodpecker-co/",
    GitHubLink: " ",
    YouTubeLink: "https://youtube.com/c/Woodpeckerco/",
    TwitterLink: "https://twitter.com/Woodpeckerapp/",
    FacebookLink: "https://facebook.com/woodpeckerapp/",
    InstagramLink: "https://instagram.com/woodpeckerapp/",

    image: "/initialIcon.png",
  },
  setInfoOutput: (newInfoOutput) =>
    set((state) => ({ infoOutput: { ...state.infoOutput, ...newInfoOutput } })),
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({ infoOutput: { ...state.infoOutput, [name]: value } }));
  },
  onImageChange: (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      set((state) => ({
        infoOutput: { ...state.infoOutput, image: URL.createObjectURL(file) },
      }));
    }
  },
  isValidLink(linkValue) {
    return validateLink(linkValue); 
  },
}));

export default useInfoStore;
