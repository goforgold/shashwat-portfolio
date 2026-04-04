"use client";

import { getExperienceYears } from "@/lib/data";

export function ExperienceYears() {
  return <>{getExperienceYears()}</>;
}

export function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
