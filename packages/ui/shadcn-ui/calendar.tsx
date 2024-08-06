'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { DropdownProps } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import { buttonVariants } from '@ui/src/Button';
import { cn } from '@ui/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { ScrollArea } from './scroll-area';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-16',
        vhidden: 'vhidden hidden',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        caption_dropdowns: cn('flex justify-between gap-1', props.captionLayout === 'dropdown' && 'w-full dropdowns'),
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-[4px]',
        nav_button_next: 'absolute right-[4px]',
        table: 'w-full border-collapse space-y-[4px]',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-[32px] font-normal text-[0.8rem]',
        row: 'flex w-full mt-[8px]',
        cell: 'h-[36px] w-[33px] text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(buttonVariants({ variant: 'ghost' }), 'h-[36px] w-[36px] p-0 font-normal aria-selected:opacity-100'),
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        Dropdown: ({ value, onChange, children, ...props }: DropdownProps) => {
          const options = React.Children.toArray(children) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[];
          const selected = options.find((child) => child.props.value === value);
          const handleChange = (value: string) => {
            const changeEvent = {
              target: { value },
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange?.(changeEvent);
          };
          return (
            <Select
              onValueChange={(value) => {
                handleChange(value);
              }}
              value={value?.toString()}
            >
              <SelectTrigger className="pr-2 focus:ring-0">
                <SelectValue>{selected?.props.children}</SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                <ScrollArea className="h-[144px]">
                  {options.map((option, id: number) => (
                    <SelectItem key={`${option.props.value}-${id}`} value={option.props.value?.toString() ?? ''}>
                      {option.props.children}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          );
        },
        IconLeft: () => <ChevronLeft className="h-16 w-16" />,
        IconRight: () => <ChevronRight className="h-16 w-16" />,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
