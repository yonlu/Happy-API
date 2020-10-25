import Image from "../models/Orphanage";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.API_URL}/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
