import { useState } from "react";
import { PlusIcon, MinusIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const App:React.FC = () => {
return(
  <>
  <div className="min-h-screen flex justify-center items-center bg-background">
    <div className="h-auto p-5 rounded-sm bg-card shadow-[0_20px_25px_-5px_#00000075]">
      <div>
      <p className="text-3xl text-center text-[#1B211A] vazirmatn mb-7">کانتر من</p>
      <p className="font-extrabold text-8xl text-center text-[#254F22]">4</p>
      <div className="items-center justify-center flex gap-10 mt-10">
        <button className="rounded-full p-5 bg-[#72BF78]">
          <MinusIcon className="w-10 h-10"></MinusIcon>
        </button>
        <button className="bg-[#78B3CE] rounded-full py-6.5 px-8.5">
          <ArrowPathIcon className="inline w-7 h-7"></ArrowPathIcon>
          <span className="vazirmatn text-xl ml-1.5">ریست</span>
        </button>
        <button className="bg-[#FF8989] rounded-full p-5 ">
          <PlusIcon className=" w-10 h-10 "></PlusIcon>
        </button>
      </div>
      </div>
    </div>
  </div>
  </>
) 

}
export default App;