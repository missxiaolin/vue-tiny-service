// el手机格式校验
function vaPhone(rule, value, callback) {
  if (!value || regPhone(value)) { callback(); } else { callback(new Error('请输入正确的手机号!')); }
}

// 正则手机格式校验
function regPhone(value) {
  return /^1[3-9][0-9]{9}/.test(value)
}

export {
  vaPhone, // el手机格式校验
  regPhone // 正则手机格式校验
}