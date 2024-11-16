import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const encryptQr = (value: string) => {
  return btoa(value);
}

export const decryptQr = (value: string) => {
  return atob(value);
}

export const gameSettings = {
  date: {
    start: "2024-11-22 18:00:00",
    end: "2024-11-22 20:00:00"
  }
}