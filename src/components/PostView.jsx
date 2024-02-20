import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function PostView() {
    const { id }= useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {

        axios.get(`http://localhost:3000/post/${id}`)
        .then((response) => {
            setPost(JSON.parse(response.data));
        })
        .catch((error) => {
            console.log(error);
        })

    }, [])

    return(
        <div className="flex justify-center items-center">
            <div className="w-3/4 p-2 m-2">
                <h3 className="font-bold p-2 m-4">{post.title}</h3>
                <p className="p-2 m-4">{post.description}</p>
            </div>
        </div>
    )
}