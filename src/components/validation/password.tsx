export function validation(password: string) {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,16}$/;
  if (password) {
    return regex.test(password);
  }
  return false;
}
