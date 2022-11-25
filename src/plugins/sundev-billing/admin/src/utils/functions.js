export function buildInfosObject(infos) {
  const flattenInfos = {
    email: infos.email,
    name: infos.name,
    phone: infos.phone,
    line1: infos.address.line1,
    line2: infos.address.line2,
    postal_code: infos.address.postal_code,
    city: infos.address.city,
    country: infos.address.country,
  };
  return flattenInfos;
}
