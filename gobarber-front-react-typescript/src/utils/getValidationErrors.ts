import { ValidationError } from 'yup';

interface CustomValidationErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): CustomValidationErrors {
  const resultErrors: CustomValidationErrors = {};

  err.inner.forEach(error => {
    resultErrors[error.path] = error.message;
  });

  return resultErrors;
}
