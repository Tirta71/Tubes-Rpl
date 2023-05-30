const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => (images[key] = r(key)));
  return images;
};

const images = importAll(
  require.context("../../assets/gambar", false, /\.(png|jpe?g|svg)$/)
);

export const DateImage = images["./Date_range_light@3x.png"];
export const MoonImage = images["./Moon_alt_duotone@3x.png"];
export const BedImage = images["./pngwing.com.png"];
