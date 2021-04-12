export default function validate(form) {

  // ALL fields must have an imput
  const errors = Object.entries(form).reduce((arr, [key, {value}] ) =>  value ? arr : { ...arr, [key]: `${key}` }, {})

  // Extra testing on form values . . . 
  //
  // console.log("FORM",form)
  // if(form.loginEmail.value.length < 3)
  //   errors.loginEmail = "Email should be longer than 3 characters . . "
  // if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.loginEmail.value)))
  //   errors.loginEmail = "Invalid Email, "


  return errors

};