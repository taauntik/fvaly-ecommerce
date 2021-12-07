const imageBaseURL = process.env.REACT_APP_IMAGE_BASE_URL;

const imageUrlParser = (imageId: string, option: string = "") => {
  return `${imageBaseURL}${option ? option + "/" : ""}${imageId}`;
};

export default imageUrlParser;
