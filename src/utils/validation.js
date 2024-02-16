
export const isAlphabetic = value => /^[A-Za-z]+$/.test(value);

export const isAlphaNumeric = value => /^[0-9A-Za-z]+$/.test(value);

export const isValidEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = phone => {
  return /^\d{10}$/.test(phone);
};

export const minLength = (value, length) => {
  return value.length >= length;
};
