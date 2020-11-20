import { IForm, IGender } from './Form.types';

export const initialValues: IForm = {
  id: 0,
  name: '',
  surrname: '',
  age: new Date().toISOString(),
  gender: '',
  message: '',
};

export const Genders: IGender[] = [
  {
    id: 1,
    name: 'Female',
  },
  {
    id: 2,
    name: 'Male',
  },
  {
    id: 3,
    name: 'Others',
  },
];
