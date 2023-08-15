import React from "react";
import clsx from "clsx";
import { useTemplateStore } from "@/store/templateStore";
import { AlignJustify, UserCircle } from "lucide-react";

const templateData = [
  {
    label: "Plain Text",
    id: "plainText",
  },
  {
    label: "Template 1 Left",
    id: "template1Left",
  },
  {
    label: "Template 1 Right",
    id: "template1Right",
  },
  {
    label: "Template 2 Left",
    id: "template2Left",
  },
  {
    label: "Template 2 Right",
    id: "template2Right",
  },
  {
    label: "Template 3 Top",
    id: "template3Top",
  },
  {
    label: "Template 3 Bottom",
    id: "template3Bottom",
  },
];

function Icons() {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="flex mt-5 gap-3 px-3">
      {numbers.map((item) => (
        <div key={item} className="w-4 h-4 bg-gray-500 rounded-full"></div>
      ))}
    </div>
  );
}

function templatePicker(type) {
  switch (type) {
    case "Plain Text":
      return (
        <div className="flex">
          <AlignJustify size={96} color="#CFD4DA" />
          <AlignJustify size={96} color="#CFD4DA" />
        </div>
      );
    case "Template 1 Left":
      return (
        <div className="flex justify-around p-4 align-center">
          <div className="flex justify-center mt-7 ml-5">
            <UserCircle size={60} color="#CFD4DA" />
          </div>
          <div>
            <div className="flex">
              <AlignJustify size={96} color="#CFD4DA" />
              <AlignJustify size={96} color="#CFD4DA" />
            </div>
            <Icons />
          </div>
        </div>
      );
    case "Template 1 Right":
      return (
        <div className="flex justify-around p-5 pl-10 align-center">
          <div>
            <div className="flex">
              <AlignJustify size={96} color="#CFD4DA" />
              <AlignJustify size={96} color="#CFD4DA" />
            </div>
            <Icons />
          </div>
          <div className="flex justify-center mt-5 mr-5">
            <UserCircle size={60} color="#CFD4DA" />
          </div>
        </div>
      );
    case "Template 2 Left":
      return (
        <div className="grid grid-cols-2 p-5">
          <div className="flex order-3">
            <AlignJustify size={96} color="#CFD4DA" />
            <AlignJustify size={96} color="#CFD4DA" />
          </div>
          <div>
            <UserCircle className="order-2 ml-5" size={60} color="#CFD4DA" />
            <div className="m-3 gap-2 flex order-1">
              <Icons />
            </div>
          </div>
        </div>
      );
    case "Template 2 Right":
      return (
        <div className="grid grid-cols-2 p-5">
          <div className="flex">
            <AlignJustify size={96} color="#CFD4DA" />
            <AlignJustify size={96} color="#CFD4DA" />
          </div>
          <div>
            <UserCircle className="ml-8" size={60} color="#CFD4DA" />
            <div className="m-3 gap-2 flex">
              <Icons />
            </div>
          </div>
        </div>
      );
    case "Template 3 Top":
      return (
        <div className="flex-col p-5 flex items-center">
          <UserCircle size={60} color="#CFD4DA" />
          <div className="flex">
            <AlignJustify size={96} color="#CFD4DA" />
            <AlignJustify size={96} color="#CFD4DA" />
          </div>
          <div className="m-3 gap-2 flex">
            <Icons />
          </div>
        </div>
      );
    case "Template 3 Bottom":
      return (
        <div className="flex-col p-5 flex items-center">
          <div className="flex">
            <AlignJustify size={96} color="#CFD4DA" />
            <AlignJustify size={96} color="#CFD4DA" />
          </div>
          <div className="m-3 gap-2 flex">
            <Icons />
          </div>
          <UserCircle size={60} color="#CFD4DA" />
        </div>
      );
    default:
      return null;
  }
}

const Template = () => {
  const { template, setTemplate } = useTemplateStore();

  return (
    <div>
      <h1 className="text-3xl font-bold m-4 p-1">Templates</h1>
      <p className="m-4 p-2">Choose a template to start building your email signature</p>
      {templateData.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setTemplate(item.id);
          }}
          className={clsx(
            "bg-gray-200 mt-10 rounded-lg text-center w-3/4 mx-auto cursor-pointer text-sm flex-auto border-2 border-gray-700",
            {
              "shadow-[0_0px_0px_3px_rgba(73,80,87,1)] font-semibold":
                item.id === template.id,
            }
          )}
        >
          {item.label}
          <div className="bg-window rounded-lg p-3 border-t-2 border-gray-700">
            {templatePicker(item.label)}
            {item.id === "plainText" && (
              <div className="border border-gray-500">
                <p className="text-gray-400">Use this template to recover your sender reputation</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Template;
