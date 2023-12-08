import loggedInUser from "../login/action/loggedInUser";

import ProtectAndRestrictTo from "@/components/Wrappers/ProtectAndRestrictTo";

export default async function CustomerLayout({ children }) {
  const user = await loggedInUser();

  return (
    <ProtectAndRestrictTo restrictTo="user" user={user}>
      {children}
    </ProtectAndRestrictTo>
  );
}
