import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";


function LikeandShare() {
    return (
        <div className="flex ps-4  gap-x-3">
            <div className="flex items-center gap-x-1.5 cursor-pointer"><FaHeart className="text-red-600" /><span>Wishlist</span></div>
            <div className="flex items-center gap-x-1.5 cursor-pointer"><CiShare2 /><span>Share</span></div>
        </div>
    );
}

export default LikeandShare;