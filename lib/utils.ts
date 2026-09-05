import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { site } from "@/lib/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function yearsOfExperience(now = new Date()) {
  return now.getFullYear() - site.careerStartYear;
}

export function currentAge(now = new Date()) {
  return now.getFullYear() - site.birthYear;
}

export function mailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${site.email}?${params.toString().replace(/\+/g, "%20")}`;
}
