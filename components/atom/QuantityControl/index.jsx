import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { useEffect } from 'react';

const QuantityControl = ({
  step = 1,
  defaultValue = 1,
  min = 1,
  max = null,
  precision = 0,
  id,
  updateQuantity,
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
  const quantity = input.value;
  // console.log(quantity);

  const quantityJson = {
    quantity,
  };

  useEffect(() => {
    updateQuantity(quantityJson);
  }, [quantity]);

  return (
    <HStack maxW="320px">
      <Button {...dec} variant="outline">
        -
      </Button>
      <Input {...input} colorScheme="orange" textAlign="center" />
      <Button {...inc} variant="outline">
        +
      </Button>
    </HStack>
  );
};

export default QuantityControl;
