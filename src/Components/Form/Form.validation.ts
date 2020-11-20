import * as Yup from 'yup';

export const Validation = Yup.object().shape({
  name: Yup
    .string()
    .min(3, 'Three characters minimum')
    .max(12, 'Twelve characters maximum')
    .required('This field is required!'),
  surrname: Yup
    .string()
    .min(2, 'Two characters minimum')
    .max(25, 'Twenty-five characters maximum')
    .required('This field is required!'),
  age: Yup
    .date()
    .nullable()
    .min(new Date(1930, 1, 1))
    .required(),
  gender: Yup
    .number()
    .required('This field is required!'),
  message: Yup.string().optional(),
});
