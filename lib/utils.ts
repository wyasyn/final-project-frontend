import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatPhoneNumber } from "react-phone-number-input";
import { formatPhoneNumberIntl } from "react-phone-number-input";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  const phoneNumber = formatPhoneNumber(phone);
  return phoneNumber;
}

export function formatPhoneIntl(phone: string): string {
  const phoneNumber = formatPhoneNumberIntl(phone);
  return phoneNumber;
}
