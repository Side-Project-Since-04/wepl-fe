import React from 'react';
import { Control, FieldValues, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/src/Form';
import { Input } from '@ui/src/Input';
import { TextBody1 } from '../../Text';

type InputFormItemProps = {
  control: Control<any, any>;
  name: string;
  label?: string | React.ReactNode;
  placeholder: string;
  required?: boolean;
};
/**
 * Renders a form item for an input field with optional required label.
 * @param {boolean} required - Indicates if the input field is required.
 * @param {Control} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the input field.
 * @param {string | React.ReactNode} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder for the input field.
 * @return {JSX.Element} The rendered input form item.
 */
const InputFormItem = ({ required = false, ...props }: InputFormItemProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>
              <TextBody1>
                {props.label}
                {required && <span className="text-destructive"> *</span>}
              </TextBody1>
            </FormLabel>
            <FormControl>
              <Input className="bg-gray-50 pl-[14px] h-[50px]" placeholder={props.placeholder} {...field} />
            </FormControl>
            {field.value.length > 15 && <div className="text-destructive">예식 장소 글자수를 15자 이하로 해주세요</div>}
          </FormItem>
        );
      }}
    />
  );
};

export default InputFormItem;
