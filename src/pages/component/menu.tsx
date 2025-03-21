import React from "react";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardDoubleArrowRight, MdStickyNote2 } from "react-icons/md";
import { LiaListAlt } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { PiStickerFill } from "react-icons/pi";
import { LuPlus } from "react-icons/lu";

const Menu = () => {
  return (
    <>
      <div className="h-full text-white bg-slate-900 w-2xs rounded-lg flex flex-col justify-between p-5">
        {/* Burger Menu */}
        <header className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h5 className="">Menu</h5>
          <IoIosMenu className="cursor-pointer text-2xl" />
        </header>
        {/* Search Field */}
        <div className="mt-3">
          <label className="input input-sm bg-blue-50 text-black">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input className="" type="search" required placeholder="Search" />
          </label>
        </div>
        <main className="h-full flex flex-col gap-5 pt-5">
          {/* Side Bar Group */}
          {/* Group 1 */}
          <div>
            <p className="text-xs py-2">TASKS</p>
            <div className="flex flex-col pl-2 space-y-3">
              <div className="flex">
                <button className="flex items-center w-full gap-4 cursor-pointer">
                  <MdKeyboardDoubleArrowRight className="text-2xl" />
                  Upcoming
                </button>
                <p>23</p>
              </div>
              <div className="flex">
                <button className="flex items-center w-full gap-4 cursor-pointer">
                  <LiaListAlt className="text-2xl" />
                  Today
                </button>
                <p>2</p>
              </div>
              <div className="flex">
                <button className="flex items-center w-full gap-4 cursor-pointer">
                  <IoCalendarOutline className="text-2xl" />
                  Calendar
                </button>
                <p></p>
              </div>
              <div className="flex">
                <button className="flex items-center w-full gap-4 cursor-pointer">
                  <MdStickyNote2 className="text-2xl" /> Sticky Wall
                </button>
                <p>3</p>
              </div>
            </div>
          </div>
          {/* Group 2 */}
          <div>
            <p className="text-xs py-2 pl-2">LIST</p>
            <div>
              <div className="flex flex-col pl-2 space-y-3">
                <div className="flex">
                  <button className="flex items-center w-full gap-4 cursor-pointer">
                    <PiStickerFill className="text-2xl text-amber-500" />{" "}
                    Personal
                  </button>
                  <p>3</p>
                </div>
                <div className="flex">
                  <button className="flex items-center w-full gap-4 cursor-pointer">
                    <PiStickerFill className="text-2xl text-pink-500" /> Work
                  </button>
                  <p></p>
                </div>
                <div className="flex">
                  <button className="flex items-center w-full gap-4 cursor-pointer">
                    <PiStickerFill className="text-2xl text-green-500" />
                    List 1
                  </button>
                  <p>3</p>
                </div>
                <div className="flex">
                  <button className="flex items-center w-full gap-4 cursor-pointer">
                    <LuPlus className="text-2xl" /> Add New List
                  </button>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
          {/* Group 3 */}
          <div>
            <p className="text-xs py-2">TAGS</p>
            <div className="flex flex-row items-align justify-center gap-5 text-black">
              <div className="bg-amber-100 rounded p-2">
                <p>Tag 1</p>
              </div>
              <div className="bg-amber-100 rounded p-2">
                <p>Tag 2</p>
              </div>
              <div className="flex bg-gray-100 rounded p-2 items-center cursor-pointer">
              <LuPlus className="text-sm" /> <p className="text-sm">Add Tag</p>
              </div>
            </div>
          </div>
          {/* Sidebar Group End */}
        </main>
        <footer className="footer">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-box"
              src="/j.jpeg"
              alt="Profile Picture"
            />
            <div>
              <p>ramz</p>
              <p>ramelopanisjr.06@gmail.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Menu;
