import React from "react";
import NavDashboard from "./components/NavbarDashboard/NavDashboard";
import { WelcomePanel } from "./components/WelcomePanel";
import { NextAppointmentCard } from "./components/NextAppointmentCard";
import { ScheduledAppointmentsTable } from "./components/ScheduledAppointmentsTable";

export default function DashboardPage() {
  return (
    <NavDashboard>
      <div className="mx-auto max-w-5xl space-y-6">
        <WelcomePanel />
        <NextAppointmentCard />
        <ScheduledAppointmentsTable />
      </div>
    </NavDashboard>
  );
}
