import { FaWhatsapp, FaTelegram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const contactInfo = [
  { icon: 'FaPhone', title: 'Call us', details: '+251 641', description: 'Main Office Line' },
  { icon: 'FaHeadset', title: 'Hotline', details: '641', description: '24/7 Customer Service' },
  { icon: 'FaEnvelope', title: 'Email', details: 'info@gadaabank.com.et', description: 'General Inquiries' },
  { icon: 'FaMapMarkerAlt', title: 'Head Office', details: 'Gotera, kirkos SubCity W-03, HNo-#745', description: 'Addis Ababa, Ethiopia' }
];

export const departments = [
  { name: 'Customer Service', email: 'support@gadaabank.com.et', phone: '641' },
  { name: 'Account Opening', email: 'accounts@gadaabank.com.et', phone: '+251 116392500' },
  { name: 'Loan Department', email: 'loans@gadaabank.com.et', phone: '+251 116392501' },
  { name: 'Card Services', email: 'cards@gadaabank.com.et', phone: '+251 116392502' }
];

export const socialMedia = [
  { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500', link: 'https://wa.me/251641' },
  { icon: FaTelegram, name: 'Telegram', color: 'bg-blue-500', link: 'https://t.me/GadaaBankOfficial' },
  { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600', link: 'https://www.facebook.com/gadaabanksc' },
  { icon: FaXTwitter, name: 'X', color: 'bg-black', link: 'https://x.com/gadaabanksc' }
];

export const workingHours = [
  { day: 'Monday - Thursday', time: '8:30 AM - 5:30 PM' },
  { day: 'Friday', time: '8:30 AM - 11:30 AM, 1:30 PM - 5:30 PM' },
  { day: 'Saturday', time: '8:30 AM - 5:30 PM' },
  { day: 'Sunday', time: 'Closed' }
];