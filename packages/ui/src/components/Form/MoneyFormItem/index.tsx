import React from 'react';
import { Control, FieldValues, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/src/Form';
import { Input } from '@ui/src/Input';
import { TextBody1 } from '../../Text';

type CurrencyInputFormItemProps = {
  control: Control<any, any>;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  required?: boolean;
};

const MoneyInputFormItem = ({ required = false, ...props }: CurrencyInputFormItemProps) => {
  // 추후 보안이 필요함
  const formatCurrency = (value: string) => {
    // 숫자만 추출
    const number = value.replace(/[^\d]/g, '');
    // 세 자리마다 쉼표 추가 및 원 추가
    return number ? number.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원' : '';
  };

  const parseCurrency = (value: string) => {
    // 쉼표와 '원' 제거
    return value.replace(/,/g, '').replace('원', '');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      const currentValue = parseCurrency(field.value);
      const newValue = currentValue.slice(0, -1);
      field.onChange(formatCurrency(newValue));
    }
  };

  return (
    <FormField
      control={props.control}
      name={props.name}
      rules={{ required: required }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <TextBody1>
              {props.label}
              {required && <span className="text-destructive"> *</span>}
            </TextBody1>
          </FormLabel>
          <FormControl>
            <Input
              className="bg-gray-50 h-[56px] text-2xl pl-[14px]"
              placeholder={props.placeholder}
              {...field}
              value={formatCurrency(field.value)}
              onChange={(e) => {
                const parsed = parseCurrency(formatCurrency(e.target.value));
                field.onChange(parsed);
              }}
              onKeyDown={(e) => handleKeyDown(e, field)}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default MoneyInputFormItem;
