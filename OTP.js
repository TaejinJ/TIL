function otpgenerator(a) {
  let digits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let OTP = "";
  for (let i = 0; i < a; i++) {
    OTP += digits[Math.floor(Math.random() * digits.length)];
  }
  return OTP;
}
console.log(otpgenerator(13));
console.log(otpgenerator(6));
