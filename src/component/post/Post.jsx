import { Link } from "react-router-dom";

const Post = ({post}) => {
    const{id,title}=post
    return (
        <div className="border-2 text-center p-2 ">
            <h2 className="text-2xl">ID: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button className="btn btn-primary">see more</button></Link>
            
        </div>
    );
};

export default Post;