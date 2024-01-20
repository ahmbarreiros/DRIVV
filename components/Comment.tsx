const Comment = ({ comment }: any) => {
    return (
        <div className="p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 w-[50vw] h-[7vw] rounded-md m-auto my-3 shadow-md">
            <p className="text-white text-xl flex flex-row justify-start items-start">
                {comment.comment}
            </p>
            <p className="text-white text-md flex flex-row justify-end items-end m-0 p-0">
                {comment.user.email}
            </p>
        </div>
    );
};
export default Comment;
