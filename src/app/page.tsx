import Image from "next/image";
import { BsPaperclip } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { PiMicrophoneFill, PiPaperPlaneTiltLight } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/4 min-w-[350px] h-full flex flex-col gap-0 border-e border-[#303030] px-6">
        <div className="flex flex-col gap-6 pt-5 pb-6">
          <div className="flex justify-start items-center capitalize font-semibold text-[#00A3FF] gap-[14px]">
            <Image src='./Images/logo.svg' height={40} width={40} alt="logo" />
            <h1 className="text-[22px]">chat app</h1>
          </div>
          <div>
            <form action="" className="flex items-center gap-3">
              <input type="text" className='p-3 rounded-[16px] border border-[#CCCFD0]' placeholder="Search messages, people" />
              <button className='bg-[#00A3FF] h-full rounded-[12px] cursor-pointer p-3'>
                <GoPlus size={24} />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 hover:bg-[#00A3FF30]">
            <div className="bg-[#00A3FF] size-[58px] rounded-full shrink-0"></div>
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[18px]/[14px] font-semibold text-[#F0F0F0]">
                  Liam Anderson
                </p>
                <p className="text-[#E0E0E0] text-[14px]/[10px] font-normal">
                  Hey, how's it going?
                </p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <p className="text-[#E0E0E0] text-[14px]/[10px] font-normal text-end">
                  04:50 PM
                </p>
                <div className="w-[24px] h-[20px] rounded-full bg-[#00A3FF] flex items-center justify-center text-white text-[12px]/[12px]">
                  10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col justify-between">
        <div className="flex justify-between items-center px-10 py-4 border-b border-[#303030]">
          <div className="flex items-center gap-4">
            <div className="size-[40px] bg-[#434343] rounded-full"></div>
            <div className="flex flex-col gap-2">
              <p className="text-[20px]/[20px] font-medium text-[#F0F0F0] capitalize">
                Liam Anderson
              </p>
              <p className="text-[#00A3FF] text-[14px]/[10px] font-normal capitalize">
                online
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <FaPhoneAlt size={24} color="#AOAOAO" />
            <FaVideo size={24} color="#AOAOAO" />
            <CiMenuKebab size={24} color="#AOAOAO" />
          </div>
        </div>
        {/* chats screen */}
        <div className="bg-[#181818] h-full flex flex-col gap-5 px-10 overflow-x-hidden overflow-y-scroll">
          <div className="flex gap-3">
            <div className="size-10 rounded-full bg-[#4E4E4E]"></div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <p className="text-[#DADADA] text-[16px]/[16px] font-medium">
                  Grace Miller
                </p>
                <p className="text-[#A0A0A0] text-[12px]/[12px] font-medium">
                  10:30 AM
                </p>
              </div>
              <div className="bg-[#292929] py-4 px-6 rounded-[16px] !rounded-tl-0">
                Hi Jack! I'm doing well, thanks. Can't wait for the weekend!
              </div>
            </div>
          </div>
        </div>
        {/* message box */}
        <div className="flex justify-between items-center px-10 py-3 border-t border-[#303030]">
          <form action="" className="flex w-full justify-between gap-2">
            <input type="text" name="" id="" className="outline-none border-none w-full" placeholder="Type message..." />
            <div className="flex items-center gap-5">
              <PiMicrophoneFill size={24} color="#AOAOAO" />
              <label
                htmlFor="fileUpload"
                className="cursor-pointer"
              >
                <BsPaperclip size={24} color="#AOAOAO" />
              </label>
              <input type="file" id="fileUpload" name="fileUpload" className="hidden" />
              <button className="bg-[#00A3FF] rounded-[16px] capitalize cursor-pointer text-white text-[20px]/[20px] font-medium px-4 py-3 flex gap-1 items-center">
                send
                <PiPaperPlaneTiltLight color="#AOAOAO" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
