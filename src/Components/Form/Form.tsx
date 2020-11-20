import 'date-fns';
import React, { ReactElement } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  FormControl, Grid, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { withFormik, FormikProps } from 'formik';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { IForm, IGender } from './Form.types';
import { initialValues, Genders } from './Form.utils';
import { Validation } from './Form.validation';
import Panel from '../Panel/Panel';
import DefaultObject from '../Panel/Panel.utils';

export const MyForm = (props: FormikProps<IForm>): ReactElement<IForm> => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = props;

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid md={4} xs={12}>
              <TextField
                id="name"
                name="name"
                label="Name"
                title="Name"
                margin="dense"
                variant="outlined"
                value={values.name}
                error={errors.name as any && touched.name as any}
                helperText={(errors.name && touched.name) && errors.surrname}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid md={8} xs={12}>
              <TextField
                id="surrname"
                name="surrname"
                label="Surrname"
                title="Surrname"
                margin="dense"
                variant="outlined"
                value={values.surrname}
                error={errors.surrname as any && touched.surrname as any}
                helperText={(errors.surrname && touched.surrname) && errors.surrname}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid md={6} xs={12}>
              <KeyboardDatePicker
                id="age"
                name="age"
                title="Age"
                label="Age"
                format="MM/dd/yyyy"
                value={values.age}
                error={errors.age as any && touched.age as any}
                helperText={(errors.age && touched.age) && errors.age}
                onChange={(value: MaterialUiPickersDate): void => {
                  setFieldValue('age', value.toISOString());
                }}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl
                margin="dense"
                variant="outlined"
                fullWidth
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  id="gender"
                  name="gender"
                  label="Gender"
                  title="Gender"
                  value={values.gender}
                  onChange={handleChange}
                  fullWidth
                >
                  {
                    Genders.map((g: IGender): ReactElement<IGender> => (
                      <MenuItem key={g.id} value={g.id}>
                        {g.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid md={12} xs={12}>
              <TextField
                id="message"
                name="message"
                label="Message"
                title="Message"
                margin="dense"
                variant="outlined"
                value={values.message}
                error={errors.message as any && touched.message as any}
                helperText={(errors.message && touched.message)}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                rowsMax={15}
                multiline
                fullWidth
              />
            </Grid>
            <Grid md={6} xs={6}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                Send
              </Button>
            </Grid>
            <Grid md={6} xs={6}>
              <Button
                variant="contained"
                color="default"
                onClick={handleReset}
                fullWidth
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </MuiPickersUtilsProvider>

      <Panel />
    </>
  );
};

export default withFormik({
  displayName: 'MyForm',
  enableReinitialize: true,
  validationSchema: Validation,
  mapPropsToValues: (): IForm => (initialValues),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(`Progress complete: ${JSON.stringify(values)}`);
    DefaultObject.push({
      id: DefaultObject.length + 1,
      name: values.name,
      surrname: values.surrname,
      age: values.age,
      gender: values.gender,
      message: values.message,
    });
    setSubmitting(false);
    resetForm();
  },
})(MyForm);
