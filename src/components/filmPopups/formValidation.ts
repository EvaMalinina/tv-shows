import * as yup from 'yup';

export let formSchema = yup.object().shape({
  title: yup.string()
      .min(2, 'Must be min 2 letters')
      .required('Movie name is required'),
  startDate: yup.date()
      .required('Release date is required'),
  movieUrl: yup.string()
      .url('Please provide correct url address')
      .required('Poster link required'),
  genre: yup.string()
      .required('Genre is required'),
  overview: yup.string()
      .min(10, 'Min 10 symbols')
      .required('Overview is required'),
  runtime: yup.number()
      .typeError("That doesn't look like a number")
});