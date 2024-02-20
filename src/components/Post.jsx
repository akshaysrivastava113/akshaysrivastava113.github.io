import { useNavigate } from "react-router-dom"
export default function Post({post}) {
    const navigate = useNavigate();
    return(
        <div className="border-2 border-slate-200 shadow-sm w-3/4 p-2 m-2 mb-12 rounded-md hover:cursor-pointer hover:shadow-lg" onClick={() => {navigate(`/post/${post._id}`)}}>
            <p className=" border-b-2 border-gray-100 p-1 pb-2 m-2 font-semibold">{post.title}</p>
            <p className=" border-gray-100 p-1 m-2 max-h-32 text-ellipsis overflow-hidden">{post.description}</p>
        </div>
    )
}