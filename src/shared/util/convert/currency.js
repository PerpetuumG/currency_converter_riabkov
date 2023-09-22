export const convertCurrency = (amount, rateFrom, rateTo) => {
  const amountNumber = Number(amount);
  const rateFromNumber = Number(rateFrom);
  const rateToNumber = Number(rateTo);

  /*if (isNan(amountNumber) || isNan(rateFromNumber) || isNan(rateToNumber)) {
    return -1;
  }*/

  return amount * (rateTo / rateFrom);
};
