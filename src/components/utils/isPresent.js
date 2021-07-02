const isPresentHelper = (page, product) =>
  !!page.find((item) => item._id === product._id);

export default isPresentHelper;
