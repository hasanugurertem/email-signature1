import React from "react";
import Image from "next/image";

import iconNureply from "../public/favicon.ico";

const Header = () => {
  return (
    <header className="flex p-6 justify-between items-center bg-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="items-center flex overflow-hidden">
        <Image style={{backgroundColor:"gray"}} src={iconNureply} width={56} height={60} alt="" />
        <h1 className="text-2xl text-default">
          Email Signatures
        </h1>
      </div>

      <button
        className="px-20 py-4 rounded bg-background bg-gray-500"
        disabled
      >
        CREATE SIGNATURE
      </button>
    </header>
  );
};

export default Header;
