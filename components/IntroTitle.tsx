import getUser from "@/app/actions/userActions";
import { redirect } from "next/navigation";

export default async function IntroTitle() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <header className="mb-12">
      <p>
        Welcome <span className="text-accent">{user.first_name}!</span>{" "}
        Here&apos;s your financial overview.
      </p>
    </header>
  );
}
