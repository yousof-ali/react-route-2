
const Post = ({post}) => {
    const{id,title}=post
    return (
        <div className="border-2 text-center p-2 ">
            <h2 className="text-2xl">ID: {id}</h2>
            <p>{title}</p>
            
        </div>
    );
};

export default Post;