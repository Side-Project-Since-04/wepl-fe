'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { cn } from '@ui/lib/utils';
import { Control, useForm } from 'react-hook-form';
import { Calendar } from '@ui/shadcn-ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/shadcn-ui/popover';
import { Button } from '@ui/src/Button';
import { FormControl, FormField, FormItem, FormLabel } from '@ui/src/Form';
import { z } from 'zod';
import { TextBody1 } from '../Text';

type DatePickerFormItemProps = {
  control: Control<any, any>;
  name: string;
  label: string | React.ReactNode;
  required?: boolean;
};
/**
 * Renders a form item for selecting a date using a date picker.
 * @param {boolean} props.required - Indicates if the date picker is required.
 * @param {string | React.ReactNode} props.label - The label for the date picker.
 * @param {Control} props.control - The control object from react-hook-form.
 * @return {JSX.Element} The rendered date picker form item.
 */
function DatePickerFormItem({ required = false, ...props }: DatePickerFormItemProps) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>
            <TextBody1>
              {props.label} {required && <span className="text-destructive">*</span>}
            </TextBody1>
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn('bg-gray-50 justify-start', !field.value && 'text-muted-foreground')}
                >
                  {field.value ? format(field.value, 'yyyy-MM-dd') : <span>YYYY-MM-DD</span>}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] p-0" align="start">
              <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}

export default DatePickerFormItem;
