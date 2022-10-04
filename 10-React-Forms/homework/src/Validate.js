
export default function validate(form) {
    let errors = {};
    
    if(!form.username){
      errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(form.username)){
      errors.username = "Username is invalid"
    }
    if(!form.password){
      errors.password = "Password is required"
    }else if(!(/(?=.*[0-9])/).test(form.password)){
      errors.password = "Password is invalid"
    }
    return errors 
}