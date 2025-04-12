/**
 * * Viết hàm randomOTP(length) trả về 1 OTP (One Time Password) có độ dài length.
 * * nếu không truyền length thì mặc định length = 6
 */

function randomOTP(length = 6) {
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += Math.floor(Math.random() * 10);
  }
  return OTP;
}
console.log("Ma OTP cua ban: " + randomOTP());
