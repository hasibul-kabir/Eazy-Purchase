import { useRouter } from "next/navigation";

export default function Category({ category, setParams }) {
  const router = useRouter();

  return (
    <div
      key={category._id}
      onClick={() => {
        setParams((prevParams) => {
          return {
            ...prevParams,
            category: category._id,
          };
        });
      }}
      className="bg-secondary text-main px-3 py-2 rounded-md cursor-pointer"
    >
      {category.name}
    </div>
  );
}
