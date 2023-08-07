import React from "react";
import Image from "next/image";

import iconNureply from "../public/favicon.ico";

const Header = () => {
  return (
    <header className="flex p-3 justify-between items-center bg-gray-400 fixed top-0 left-0 right-0 z-50">
      <div className="items-center flex overflow-hidden">
        <Image style={{backgroundColor:"gray"}} src={iconNureply} width={56} height={60} alt="" />
        <h1 className="text-2xl font-medium text-default">
          Email Signatures
        </h1>
      </div>

      <button
        className="px-20 py-4 rounded bg-background-white bg-gray-200"
        disabled
      >
        CREATE SIGNATURE
      </button>
    </header>
  );
};

export default Header;
