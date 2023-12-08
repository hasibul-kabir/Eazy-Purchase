import OwnerTabNavigation from "@/components/Navigations/OwnerTabNavigation";
import loggedInUser from "../login/action/loggedInUser";

import ProtectAndRestrictTo from "@/components/Wrappers/ProtectAndRestrictTo";

export default async function OwnerLayout({ children }) {
  const user = await loggedInUser();

  return (
    <ProtectAndRestrictTo restrictTo="admin" user={user}>
      <main className="bg-background min-h-screen px-6 py-4">
        <OwnerTabNavigation />
        {children}
      </main>
    </ProtectAndRestrictTo>
  );
}
