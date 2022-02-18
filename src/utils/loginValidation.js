/**
* Function that contains rules to validate email and password input
* @param {object} values email and password
* @returns error messages if present
* @author Sanjana Rao
*/
export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please enter valid Email ID';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid Email ID';
  }
  if (!values.password) {
    errors.password = 'Please enter a Password';
  } else if (values.password.length < 8) {
    errors.password = 'Your password should be more than 8 characters';
  }
  return errors;
}
