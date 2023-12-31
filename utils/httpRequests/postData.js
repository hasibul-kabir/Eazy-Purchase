import getCookie from "../cookieHandle/getCookie";

export default async function postData(endpoint, payload, configureObj) {
  const baseURl = process.env.NEXT_PUBLIC_BASE_URL;
  const token = await getCookie("@token");

  const res = await fetch(`${baseURl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    next: configureObj,
  });

  if (!res.ok || !`${res.status}`.startsWith(2)) {
    const error = await res.json();
    throw {
      ...error,
    };
  }

  const data = await res.json();

  return data;
}
