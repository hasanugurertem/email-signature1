import { create } from "zustand";
import { ChangeEvent } from "react";

type ChangeOrMouseEvent = ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>;

type State = {
  customizationOutput: {
    fontSize: number;
    iconSize: number;
    imageSize: number;
    nameColor: string;
    textColor: string;
    linkColor: string;
  };
  setCustomizationOutput: (newCustomizationOutput: Partial<State["customizationOutput"]>) => void;
  handleChange: (event: ChangeOrMouseEvent) => void;
};

const useCustomizationStore = create<State>((set) => ({
  customizationOutput: {
    fontSize: 12,
    iconSize: 16,
    imageSize: 100,
    nameColor: "",
    textColor: "",
    linkColor: "",
  },
  setCustomizationOutput: (newCustomizationOutput) =>
    set((state) => ({
      customizationOutput: {
        ...state.customizationOutput,
        ...newCustomizationOutput,
      },
    })),
  handleChange: (event) => {
    const { name, value } = event.target as HTMLInputElement;
    set((state) => ({
      customizationOutput: { ...state.customizationOutput, [name]: value },
    }));
  },
}));

export default useCustomizationStore;
