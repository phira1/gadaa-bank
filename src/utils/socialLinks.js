import {
  FaBloggerB,
  FaDiscord,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaPinterestP,
  FaRedditAlien,
  FaSnapchatGhost,
  FaSpotify,
  FaTelegramPlane,
  FaVimeoV,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { FaTiktok, FaXTwitter } from 'react-icons/fa6';

const iconByKey = {
  Facebook: FaFacebookF,
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Telegram: FaTelegramPlane,
  WhatsApp: FaWhatsapp,
  TikTok: FaTiktok,
  GitHub: FaGithub,
  Discord: FaDiscord,
  Reddit: FaRedditAlien,
  Pinterest: FaPinterestP,
  Snapchat: FaSnapchatGhost,
  Medium: FaMediumM,
  Blogger: FaBloggerB,
  Spotify: FaSpotify,
  Dribbble: FaDribbble,
  Vimeo: FaVimeoV,
  Globe: FaGlobe,
};

const iconByLabel = {
  Facebook: FaFacebookF,
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Telegram: FaTelegramPlane,
  WhatsApp: FaWhatsapp,
  TikTok: FaTiktok,
  GitHub: FaGithub,
  Discord: FaDiscord,
  Reddit: FaRedditAlien,
  Pinterest: FaPinterestP,
  Snapchat: FaSnapchatGhost,
  Medium: FaMediumM,
  Blogger: FaBloggerB,
  Spotify: FaSpotify,
  Dribbble: FaDribbble,
  Vimeo: FaVimeoV,
};

export const normalizeSocialLinks = (links = []) => {
  return links.map((link) => ({
    ...link,
    icon: link.icon || iconByKey[link.iconKey] || iconByLabel[link.label] || FaGlobe,
  }));
};