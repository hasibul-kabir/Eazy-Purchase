import Link from "next/link";

const adminRoutes = [
  { href: "/we", label: "Dashboard" },
  { href: "/we/products", label: "Products" },
  { href: "/we/orders", label: "Orders" },
  { href: "/we/users", label: "Users" },
];

export default function OwnerTabNavigation() {
  return (
    <div className="flex items-center gap-2">
      {adminRoutes.map((route) => (
        <Link
          href={route.href}
          className="text-main px-3 py-2 p-4 bg-tertiary rounded-md"
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}
