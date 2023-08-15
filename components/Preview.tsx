import Signature from "./Signature";

const Preview = () => {
  return (
    <div className="max-w-[75%] rounded-lg bg-gray border border-solid border-gray-100" style={{ borderRadius: 0 }}>
      <div className="w-full h-14 pt-3 bg-gray-100 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-[#ff0000] ml-3 mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#1626e1] mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2AC131] mt-2"></div>
      </div>
      <div className="pl-10 pt-3 h-14 border-t-2 border-gray-300">
        Send from: emma@woodpecker.com Emma Smith
      </div>
      <div className="pl-10 pt-3 h-14 border-y-2  border-gray-300">
        Subject: Get new company email signatures
      </div>

      <div className=" pl-10 pt-3">
        <div>{"Hi {{Name}},"}</div>
        <div>
          Apparently, email signatures can mess up deliverability. Did you know
          that? News to me.
        </div>
        <span>--</span>
      </div>
      <Signature />
    </div>
  );
};

export { Preview };
