import { Route, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return(
        <div className="w-full h-16 flex justify-between items-center border-b-2 border-gray-300">
        <div>
        <a className="nav-link-style hover:text-blue-400 hover:cursor-pointer" onClick={() => {navigate("/")}}>Home</a>
        </div>
        <div>
        <a className="nav-link-style hover:text-blue-400 hover:cursor-pointer" onClick={() => {navigate("/projects")}}>Projects</a>
            <a className="nav-link-style hover:text-blue-400 hover:cursor-pointer" onClick={() => {navigate("/posts")}}>Posts</a>
            <a className="nav-link-style hover:text-blue-400 hover:cursor-pointer" onClick={() => {navigate("/about")}}>About</a>
        </div>
        </div>
    )
}