import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function uppercase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
