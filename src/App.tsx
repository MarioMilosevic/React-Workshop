import PostCard from "./components/PostCard";
export default function App() {
  return (
    <PostCard
      post={{
        id: 1,
        title: "Hello World",
        content: "This is a sample post content.",
        user: {
          id: 2,
          name: "Mario Milosevic",
        },
      }}
    >
      <PostCard.wrapper>
        <PostCard.title />
        <PostCard.content />
        <PostCard.user />
        <PostCard.actions />
      </PostCard.wrapper>
    </PostCard>
  );
}
