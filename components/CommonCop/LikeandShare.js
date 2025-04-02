"use client"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { useState, useEffect } from "react";
import { toast } from "sonner"
import { checkWishlist , addTowishlist } from "@/serverAction/wishlist";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LikeandShare({id}) {
    const [like, setlike] = useState(false);
    const { data: session } = useSession();
    const router=useRouter();

    const PushTO=async()=>{
        let res = await addTowishlist(session.user.id,id);
        if(res.success){
            toast("Added to your Wishlist");
            setlike(true);
        }
    }

    const handleOnclick = () => {
        if(like)
        {
            toast("you can package only once, for remove check dashboard");
            return;
        }
        if(session)
        {
            PushTO();
        }else {
           return router.push('/session/new');
        }
    }

    useEffect(() => {
        async function check() {
            if (session) {
                let res = await checkWishlist(session.user.id,id);
                if (res.success) {
                    setlike(true);
                }
            }
        }
        check();
    }, [id,session])

    return (
        <div className="flex ps-4  gap-x-3">
            <div onClick={handleOnclick} className="flex items-center gap-x-1.5 cursor-pointer">{like ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-red-600" />} <span>Wishlist</span></div>
            <div className="flex items-center gap-x-1.5 cursor-pointer"><CiShare2 /><span>Share</span></div>
        </div>
    );
}

export default LikeandShare;