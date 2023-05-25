"useClient";
import Card from "@/components/card";
import { useGetListQuery } from "@/redux/apiReducer";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { data, error, isLoading } = useGetListQuery()
  const userDetails = useSelector((state) => state.user.userData)
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  console.log(userDetails)
  return (
    <div className="w-full bg-[#15202b] overflow-hidden h-auto md:h-[100vh] flex flex-col md:flex-row items-center justify-center gap-4 md:py-24 py-4">
      <div className="md:w-[40%] w-[90%] container py-1 px-1 h-[100%]">
        <div className="text-center py-6 bg-[#15202b]">
          <h2>USERS LIST</h2>
        </div>
        <div className="h-[500px] flex flex-col justify-center">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="sound-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center">No data to show</div>
          ) : (
            <div>
              {/* Render your data here */}
              {data && (
                <ul className="flex flex-col h-[480px] gap-4 px-2 overflow-y-scroll" id="scroll">
                  {data.map(item => (
                    <Card data={item} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="md:w-[40%] w-[95%] container h-[100%] px-1">
        <div className="text-center py-6 bg-[#15202b]">
          <h2>USERS DETAILS</h2>
        </div>
        <div className="py-3">
          {userDetails ?
            <div className="flex flex-col justify-center items-center gap-2 mt-3">
              {!imageLoaded && <img src="download.png" alt="Default" className="w-[20%] rounded-full" />}
              <img
                src={userDetails.avatar}
                onLoad={handleImageLoaded}
                onError={({ currentTarget }) => {
                  const fallbackImage = new Image();
                  fallbackImage.src = "download.png";
                  currentTarget.src = fallbackImage.src;
                  setImageLoaded(true);
                }}
                style={{ display: imageLoaded ? "block" : "none" }}
                className="w-[20%] rounded-full"
              />
              <p>@{userDetails.profile.username}</p>
              <p className="bg-[#15202b]/50 px-1 py-3 w-[80%]">{userDetails.Bio}</p>
              <div className="w-[80%] mt-3 flex gap-1 flex-col">
                <p className="w-[100%] text-left text-[13px] text-white">Full Name</p>
                <p className="bg-[#15202b]/50 px-1 py-3 w-[100%]">{userDetails.profile.firstName + " " + userDetails.profile.lastName}</p>
              </div>
              <div className="w-[80%] flex gap-1 flex-col">
                <p className="w-[100%] text-left text-[13px] text-white">Job Title</p>
                <p className="bg-[#15202b]/50 px-1 py-3 w-[100%]">{userDetails.jobTitle}</p>
              </div>
              <div className="w-[80%] flex gap-1 flex-col">
                <p className="w-[100%] text-left text-[13px] text-white">Email</p>
                <p className="bg-[#15202b]/50 px-1 py-3 w-[100%]">{userDetails.profile.email}</p>
              </div>
            </div>
            : <p className="flex justify-center">Please Select User to show his details</p>}
        </div>
      </div>
    </div>
  )
}
