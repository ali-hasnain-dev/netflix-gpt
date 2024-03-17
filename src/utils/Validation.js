export const Validation = (isSignIn, name, email, password) => {
  if (!isSignIn && !name) return "Please enter name";

  if (!email) return "Please enter email";

  if (!password) return "Please enter password";

  email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (!email) return "Please enter valid email";

  return null;
};
