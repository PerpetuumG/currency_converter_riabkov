import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';
import CurrencySelector from './CurrencySelector.jsx';

const ConvertForm = ({ currencyList, onSubmit, buttonLabel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        alignItems={'center'}
        sx={{ width: '200px' }}
      >
        <TextField
          {...register('countCurrency', { required: true })}
          label={'Сумма'}
          type={'number'}
          sx={{ width: '100%' }}
          error={errors['countCurrency']}
          helperText={errors['countCurrency'] ? 'Обязательное поле' : ''}
        />
        <CurrencySelector
          register={{ ...register('from') }}
          label={'Из'}
          currencyList={currencyList}
        />
        <CurrencySelector
          register={{ ...register('to') }}
          label={'В'}
          currencyList={currencyList}
        />

        <Button variant={'outlined'} type={'submit'}>
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};

export default ConvertForm;
