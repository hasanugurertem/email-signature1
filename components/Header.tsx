import React from "react";
import Image from "next/image";

import iconNureply from "../assets/Nureply/logofull.png";

const Header = () => {
  const copyToClipboard = () => {
    let copyText = document.querySelector(".signaturetrying");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      console.log(successful ? "Success" : "Fail");
    } catch (err) {
      console.log("Fail");
    }
  };
  const handleGenerateClick = () => {
    copyToClipboard();
  };
  return (
    <header className="flex p-3 justify-between items-center bg-gray-400 fixed top-0 left-0 right-0 z-50">
      <div className="items-center flex overflow-hidden">
        <Image className="mx-2" src={iconNureply} width={200} alt="" />
        <h1 className="text-2xl font-medium text-default">
          Email Signatures
        </h1>
      </div>

      <button
        className="px-20 py-4 rounded bg-background-white bg-gray-200"
        onClick={handleGenerateClick}
      >
        CREATE SIGNATURE
      </button>
    </header>
  );
};

export default Header;
