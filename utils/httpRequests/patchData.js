export default async function patchData(endpoint, payload, configureObj) {
  const baseURl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseURl}${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    next: configureObj,
  });

  const data = await res.json();

  return Response.json(data);
}
