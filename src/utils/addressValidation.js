/* eslint-disable prefer-regex-literals */
/**
 * @description Validation for customer Address using Regular expressions.
 * @author Sanjana Rao
 * @since 14-02-2022
 */
export const validFirstName = new RegExp('^[A-Z][a-zA-Z]{2,}');
export const validLastName = new RegExp('^[A-Z][a-zA-Z]{2,}');
export const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]{1,256}@[a-zA-Z0-9.-]+.[a-zA-Z]$',
);
export const validPassword = new RegExp('^[a-zA-Z0-9@#$%^&*()!~]{8,}$');
export const validPhone = new RegExp('^[1-9][0-9]{9}$');
export const validPinCode = new RegExp('^[0-9]{6}$');
