import { useLoaderData } from "react-router-dom";
import Album from "../album/Album";

const Albums = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2 className="text-3xl text-center"> Albums : {data?.length}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-4">
                {
                  data?.map((album,indx)=><Album key={indx} album={album} ></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;