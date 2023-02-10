//Request Feed Form
export const validateEmailUrl = (value) => {
  let url = value.replace(/\s/g, "");
  ///clear http && https from string
  url = url.replace("https://", "").replace("http://", "");
  //add https to string
  url = url && `https://${url}`;
  return url;
};
