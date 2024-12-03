import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AdminCard({ title, description }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-slate-600 capitalize">
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription className="text-center text-xl">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
