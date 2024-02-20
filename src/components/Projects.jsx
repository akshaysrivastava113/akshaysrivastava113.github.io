import axios from "axios"
import { useEffect, useState } from "react"

export default function Projects() {
    // const [dataToDisplay, setDataToDisplay] = useState([]);
    // const [refreshData, setRefreshData] = useState(0);

    // useEffect(() => {
    //     let c = 0;
    //     setInterval(() => {
    //         setRefreshData(c++);
    //     }, 5000);
    // }, [])

    // useEffect(() => {
    //     axios.get("http://localhost:3000/posts")
    //     .then((response) => {
    //         console.log(typeof response.data);
    //         setDataToDisplay(JSON.parse(response.data));
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }, [refreshData])
    return(
        <div className="flex flex-col justify-center items-center p-2 m-2">
        {/* {dataToDisplay.map((post) => {
            return (
                <Post key={post._id} post={post} />
            )
        })} */}
        <p>Projects Components</p>
        </div>

    )
}