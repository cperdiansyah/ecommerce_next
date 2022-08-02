const encode = (str) => {
  /* atob */
  const string = Buffer.from(str, 'base64').toString('binary');
  return string;
};

const decode = (str) => {
  /* btoa */
  const string = new Buffer.from(str, 'binary').toString('base64');
  return string;
};
export { encode, decode };
