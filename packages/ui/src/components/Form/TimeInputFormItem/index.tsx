import React from 'react';
import { Control, FieldValues, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/src/Form';
import { Input } from '@ui/src/Input';
import { TextBody1 } from '../../Text';

type NumberInputFormItemProps = {
  control: Control<any, any>;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  required?: boolean;
  unit?: string;
  range: [number, number];
};

const TimeInputFormItem = ({ range, unit, required = false, ...props }: NumberInputFormItemProps) => {
  const validateTimeInput = (value: string, range: [number, number]) => {
    const num = parseInt(value);
    if (isNaN(num)) return null;
    if (num > range[1]) return range[1];
    if (num < range[0]) return range[0];
    return num;
  };

  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (parseInt(e.target.value) < 0) field.onChange(null);
          const value = validateTimeInput(e.target.value, range);
          field.onChange(value);
        };

        return (
          <FormItem className="relative">
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
                onChange={handleChange}
                type="number"
              />
            </FormControl>
            {unit && field.value > 0 && <span className="absolute bottom-[16px] left-[35px]">{unit}</span>}
          </FormItem>
        );
      }}
    />
  );
};

export default TimeInputFormItem;
