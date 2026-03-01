import { createContext, PropsWithChildren, useContext } from "react";

type PostCardContextType = {
  post: Post;
};

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardProps = PropsWithChildren & { post: Post };

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error(
      "usePostCardContext must be used within a PostCardContext.Provider",
    );
  }
  return context;
}

const PostCardContext = createContext<PostCardContextType | null>(null);

export default function PostCard({ children, post }: PostCardProps) {
  return (
    <PostCardContext.Provider value={{ post }}>
      {children}
    </PostCardContext.Provider>
  );
}

PostCard.wrapper = function ({ children }: PropsWithChildren) {
  return (
    <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2">
      {children}
    </div>
  );
};

PostCard.title = function () {
  const { post } = usePostCardContext();
  return <h2 className="text-lg font-semibold">{post.title}</h2>;
};

PostCard.content = function () {
  const { post } = usePostCardContext();
  return <p>{post.content}</p>;
};

PostCard.user = function () {
  const { post } = usePostCardContext();
  return <p className="text-sm text-neutral-400">{post.user.name}</p>;
};

PostCard.actions = function () {
  return (
    <div className="flex gap-2">
      <button>Read more</button>
      <button>Comments</button>
    </div>
  );
};
