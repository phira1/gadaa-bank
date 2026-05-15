export const buildLocationMapLink = (location) => {
  const lat = Number(location?.latitude);
  const lng = Number(location?.longitude);

  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://maps.google.com/?q=${lat},${lng}`;
  }

  const address = String(location?.address ?? '').trim();

  if (address !== '') {
    return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  }

  return '#';
};
