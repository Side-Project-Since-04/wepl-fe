'use client';

import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@ui/lib/utils';
import { Button } from '@ui/src/Button';
import { Calendar } from '@ui/shadcn-ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/shadcn-ui/popover';

export default function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
        >
          {date ? date.toISOString().split('T')[0] : <span>YY-MM-DD</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
