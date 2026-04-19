import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[radial-gradient(#e4ff6a,#98af32)] font-sans">
      <div className="flex flex-col w-[70vw] h-[90vh] gap-4">

        <div className="bg-[rgb(255,255,255,0.6)] h-1/4 flex rounded-[12px]">
        </div>

        <div className="border-2 border-white h-2/4 flex rounded-[12px]">
        </div>

        <div className="bg-[rgb(255,255,255,0.6)] h-1/4 flex rounded-[12px]">
        </div>

      </div>
    </div>
  );
}
