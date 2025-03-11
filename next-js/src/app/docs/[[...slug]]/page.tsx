const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug && slug.length === 2) {
    return (
      <h1>
        Viewing doc for feature {slug[0]} and concept of {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <h1>Ovo ako nema slugs</h1>
};

export default page;
