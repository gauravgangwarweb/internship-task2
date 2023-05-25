"useClient";
import { selectedUser } from "@/redux/userReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";


const Card = (props) => {
    const dispatch = useDispatch()
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    return (
        <div className="flex px-2 py-2 gap-3 items-center bg-[#15202b]/50 hover:bg-[#15202b] cursor-pointer rounded-lg" onClick={() => dispatch(selectedUser(props.data))}>
            {!imageLoaded && <img src="download.png" alt="Default" className="w-[52px] rounded-full" />}
            <img
                src={props.data.avatar}
                onLoad={handleImageLoaded}
                onError={({ currentTarget }) => {
                    const fallbackImage = new Image();
                    fallbackImage.src = "download.png";
                    currentTarget.src = fallbackImage.src;
                    setImageLoaded(true);
                }}
                style={{ display: imageLoaded ? "block" : "none" }}
                className="w-[52px] rounded-full"
            />
            <p>{props.data.profile.username}</p>
        </div>
    );
}

export default Card;