import { cookies } from "next/headers";

export default async function getCookie(name) {
  const cookieValue = cookies().get(name)?.value;

  return cookieValue;
}
