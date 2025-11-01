import { redirect } from "next/navigation";

export default function HomeRedirect() {
  // Redirect / to local defined by default, here it's "en"
  redirect("/en");
}
