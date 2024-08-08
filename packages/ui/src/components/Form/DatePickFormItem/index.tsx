'use client';

import { format } from 'date-fns';
import type { Control } from 'react-hook-form';
import { cn } from '@ui/lib/utils';
import { Calendar } from '@ui/shadcn-ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/shadcn-ui/popover';
import { Button } from '@ui/src/Button';
import { FormControl, FormField, FormItem, FormLabel } from '@ui/src/Form';
import { TextBody1 } from '../../Text';

interface DatePickerFormItemProps {
  control: Control<any>;
  name: string;
  label: string | React.ReactNode;
  required?: boolean;
}

function DatePickerFormItem({ required = false, ...props }: DatePickerFormItemProps) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>
            <TextBody1>
              {props.label} {required ? <span className="text-destructive">*</span> : null}
            </TextBody1>
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  className={cn('bg-gray-50 justify-start h-[50px] pl-[14px]', !field.value && 'text-muted-foreground')}
                  variant="outline"
                >
                  {field.value ? format(field.value, 'yyyy-MM-dd') : <span>YYYY-MM-DD</span>}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[240px] p-0">
              <Calendar
                captionLayout="dropdown"
                fromYear={new Date().getFullYear() - 10}
                initialFocus
                mode="single"
                onSelect={field.onChange}
                selected={field.value}
                toYear={new Date().getFullYear() + 10}
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}

export default DatePickerFormItem;
