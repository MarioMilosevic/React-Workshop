import { notFound } from "next/navigation";

const page = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
  notFound()
}

  return (
    <h1>
      Ovo je productId {productId} a ovo je review id {reviewId}
    </h1>
  );
};

export default page;
