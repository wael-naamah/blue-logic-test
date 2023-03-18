const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[56789]\d{8}$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const isValidEamil = email => emailRegex.test(email);
export const isValidMobile = mobile => mobileRegex.test(mobile);
export const isStrongPassword = password => passwordRegex.test(password);
export const getStrongPasswordErrorMessage = password => {
  if (!passwordRegex.test(password)) {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    } else if (!/\d/.test(password)) {
      return 'Password must contain at least one digit.';
    } else if (!/[A-Za-z]/.test(password)) {
      return 'Password must contain at least one letter.';
    } else if (!/[@$!%*#?&]/.test(password)) {
      return 'Password must contain at least one special character.';
    }
  }

  return '';
};

export const isSubmitDisabled = (email, mobile, name, password) =>
  !email ||
  (email && !isValidEamil(email)) ||
  !mobile ||
  (mobile && !isValidMobile(mobile)) ||
  !name ||
  !password;
