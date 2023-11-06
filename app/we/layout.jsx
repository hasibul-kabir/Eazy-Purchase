import loggedInUser from "../login/action/loggedInUser";

import ProtectAndRestrictTo from "@/components/Wrappers/ProtectAndRestrictTo";

export default async function OwnerLayout({ children }) {
  const user = await loggedInUser();

  return (
    <ProtectAndRestrictTo restrictTo="admin" user={user}>
      {children}
    </ProtectAndRestrictTo>
  );
}
