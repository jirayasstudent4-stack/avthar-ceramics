import { redirect } from "next/navigation";

export default function DealerLoginPage() {
  redirect("/api/dealer/dashboard");
}
