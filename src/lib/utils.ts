import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CategoriesVisited } from "./types/user.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hasVisitedAllCategories = (categoriesVisited:CategoriesVisited) => {
  if (!categoriesVisited) return false;

  for (const category in categoriesVisited) {
      for (const subCategory in categoriesVisited[category]) {
      if (!categoriesVisited[category][subCategory]) {
          return false;
      }
      }
  }
  return true;
};