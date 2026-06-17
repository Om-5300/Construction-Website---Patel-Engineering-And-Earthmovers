export const getCloudinaryUrl = (publicId: string, transformations = "f_auto,q_auto,dpr_auto") => {
  const cloudName = "deilfs6vw";

  if (publicId.startsWith('http')) return publicId;

  // Remove file extension if it exists at the end of publicId
  const cleanId = publicId.replace(/\.[^/.]+$/, "");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${cleanId}`;
};
