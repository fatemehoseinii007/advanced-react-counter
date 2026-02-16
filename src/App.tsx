import { useState } from "react";
import { PlusIcon, MinusIcon, ArrowPathIcon ,PlayIcon ,CursorArrowRippleIcon} from '@heroicons/react/24/outline';

const App:React.FC = () => {
return(
  <>
  <div className="min-h-screen flex justify-center items-center bg-background">
    <div className="h-auto p-9 rounded-sm bg-card shadow-[0_20px_25px_-5px_#00000075]">
      <div>
      <p className="text-3xl text-center text-[#1B211A] vazirmatn mb-7">کانتر من</p>
      <p className="font-extrabold text-8xl text-center text-[#254F22]">4</p>
      <div className="items-center justify-center flex gap-10 mt-10">
        <button className="rounded-full p-5 bg-[#A7E399]">
          <MinusIcon className="w-10 h-10"></MinusIcon>
        </button>
        <button className="bg-[#06923E] rounded-full py-6.5 px-8.5">
          <ArrowPathIcon className="inline w-7 h-7"></ArrowPathIcon>
          <span className="vazirmatn text-xl ml-1.5">ریست</span>
        </button>
        <button className="bg-[#A7E399] rounded-full p-5 ">
          <PlusIcon className=" w-10 h-10 "></PlusIcon>
        </button>
      </div>

      <div className="flex justify-between items-center mt-15">
        <button className="bg-gradient-to-tr from-[#328E6E] to-[#C1E59F] rounded-md p-5.5 flex justify-center items-center">
          <PlayIcon className="w-6 h-6 mr-0.5"></PlayIcon>
          <span className="vazirmatn text-xl">شروع خودکار</span>
        </button>
        <button className="flex justify-center items-center bg-gradient-to-tr from-[#C1E59F] to-[#328E6E] rounded-md p-5.5">
          <CursorArrowRippleIcon className="w-6 h-6 mr-1"></CursorArrowRippleIcon>
          <span className="vazirmatn text-xl">عدد تصادفی</span>
        </button>
      </div>

      <div className="bg-[#D2DCB6] mt-8 rounded-md p-3">
        <p className="text-center mb-4 vazirmatn text-xl text-[#1a2816]">آخرین مقادیر:</p>
        <div className="text-center">
        <p className=" justify-center inline rounded-full py-1 px-2.5 bg-gradient-to-tr from-[#6D9E51] to-[#C0B87A] text-[#1B211A]">5</p>
        </div>
      </div>

      <div className="text-center mt-15">
        <p className="vazirmatn text-[#656763]">محدوده: 0 تا 20 | گام: 2</p>
      </div>

      </div>
    </div>
  </div>
  </>
) 

}
export default App;