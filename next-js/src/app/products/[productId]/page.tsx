const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const id = (await params).productId;
  return <h1>Ovo je id {id}</h1>;
};

export default page;
