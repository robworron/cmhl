"use client";
import React, { use } from "react";
import { SkaterGameDataProvider } from "@/contexts/SkaterGameDataContext";
import { GoalieGameDataProvider } from "@/contexts/GoalieGameDataContext";

export default function SeasonLayout({ children, params }) {
  const { seasonId, gameId } = use(params);
  return (
    <SkaterGameDataProvider seasonId={seasonId}>
      <GoalieGameDataProvider seasonId={seasonId}>
        {children}
      </GoalieGameDataProvider>
    </SkaterGameDataProvider>
  );
}
