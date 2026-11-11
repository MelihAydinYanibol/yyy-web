import type { Metadata } from "next";
import { club } from "@/content/site";
import { Forward } from "./Forward";

// /katilim belongs to the Git Good event site, not to this one. Attendance emails that were sent with
// links to this domain land here; this page forwards them, keeping the personal code after the "#".
export const metadata: Metadata = {
  title: "Git Good · Katılım",
  robots: { index: false, follow: false },
};

export default function KatilimPage() {
  return <Forward target={`${club.eventSiteUrl}/katilim`} />;
}
