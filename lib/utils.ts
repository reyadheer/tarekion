import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = '966500000000';
export const PHONE_NUMBER = '+966-50-000-0000';
export const EMAIL = 'info@tarekion.com';
export const SITE_URL = 'https://www.tarekion.com';

export function getWhatsAppLink(message?: string) {
  const defaultMessage = 'Hello Tarekion! I would like to inquire about heavy equipment rental.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppEquipmentLink(equipmentName: string) {
  const message = `Hello Tarekion! I'm interested in renting the ${equipmentName}. Please provide availability and pricing details.`;
  return getWhatsAppLink(message);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
