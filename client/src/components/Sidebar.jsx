import React from "react";
import { useNavigate } from "react-router-dom";
import assets, { userDummyData } from "../assets/assets";
const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        {/* Top Left sidebar */}
        <div className="flex justify-between items-center">
          <img src={assets.logo} className="max-w-40" />
          <div className="relative group py-2">
            <img src={assets.menu_icon} className="max-h-5 cursor-pointer" />

            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray100 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p
                onClick={() => navigate("/")}
                className="cursor-pointer text-sm"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* Search Area */}
        <div className="flex items-center gap-2 bg-[#282142] py-3 px-4 mt-5 rounded-full">
          <img src={assets.search_icon} className="w-3" />
          <input
            type="text"
            placeholder="Search User..."
            className="bg-transparent outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            onClick={() => {
              setSelectedUser(user);
            }}
            key={index}
            className={`relative flex items-center gap-2 pl-4 p-2 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user.id && "bg-[#282142]/50"
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              className="w-[35px] rounded-full aspect-[1/1] "
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text xs">Offline</span>
              )}
            </div>

            {index > 2 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 justify-center items-center flex rounded-full bg-violet-500/50">
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
