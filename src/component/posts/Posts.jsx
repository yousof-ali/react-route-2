import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1 className="text-4xl text-center">Posts : {posts.length}</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    posts.map((post,indx)=><Post key={indx} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;