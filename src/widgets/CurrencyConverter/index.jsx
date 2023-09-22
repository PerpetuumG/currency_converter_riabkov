import { useQuery } from '@tanstack/react-query';
import { currencyService } from '../../shared/api/index.js';
import { Box, CircularProgress, Typography } from '@mui/material';
import ConvertForm from '../../features/ConvertForm/index.jsx';
import { mapCurrencyRateToLabelValue } from '../../entities/currency/lib/mapper.js';
import { useState } from 'react';
import { convertCurrency } from '../../shared/util/index.js';

const CurrencyConverter = () => {
  const [converterResult, setConverterResult] = useState(null);

  const { isLoading, data: currencyRate } = useQuery({
    queryKey: ['currencyRate'],
    queryFn: currencyService.getCurrency,
    select: data => data.data,
  });

  const onSubmit = data => {
    const result = convertCurrency(
      data.countCurrency,
      currencyRate[data.from],
      currencyRate[data.to],
    );

    return setConverterResult(
      `${data.countCurrency} ${data.from} = ${result.toFixed(3)} ${data.to}`,
    );
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant={'h4'}>Конвертер Валют</Typography>

      <Box sx={{ padding: '16px' }}>
        <ConvertForm
          currencyList={mapCurrencyRateToLabelValue(currencyRate)}
          onSubmit={onSubmit}
          buttonLabel={'Конвертировать'}
        />
      </Box>

      <Box sx={{ padding: '16px', minHeight: '64px' }}>
        {converterResult && <Typography variant={'h5'}>{converterResult}</Typography>}
      </Box>
    </Box>
  );
};

export default CurrencyConverter;
