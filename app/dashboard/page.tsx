import type {Metadata} from "next";
import {DashboardPageContent} from "@/app/features/dashboard";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Helper dashboard",
};


export default function Dashboard() {
    return (
        <>
            <DashboardPageContent/>
        </>
    )
}