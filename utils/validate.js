const validateName=(name)=>{
  const nameRegex=new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/);
  return nameRegex.test(name);
}

const validateEmail=(email)=>{
  const emailRegex=new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,"gm");
  return emailRegex.test(email);
}
const validatePass=(pass)=>{
  const passR=new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  return passR.test(pass);
}
module.exports={
  validateName,validateEmail,validatePass
}