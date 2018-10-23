export const checkValidity = value => {
  let isValid = true;
  const minLength = 3;
  const maxLength = 16;

  isValid = value.trim() !== "" && isValid;
  isValid = value.length >= minLength && isValid;
  isValid = value.length <= maxLength && isValid;

  return isValid;
};
