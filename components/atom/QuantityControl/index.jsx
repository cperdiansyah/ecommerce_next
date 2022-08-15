import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

const QuantityControl = ({
  step = 1,
  defaultValue = 1,
  min = 0,
  max = 10,
  precision = 0,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
      precision,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <HStack maxW="320px">
      <Button {...dec}>-</Button>
      <Input {...input} textAlign="center" />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

export default QuantityControl;
