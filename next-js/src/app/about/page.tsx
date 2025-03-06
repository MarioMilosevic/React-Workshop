'use client'
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About us</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => router.push("/")}
      >
        Go home
      </button>
    </div>
  );
};

export default page;
