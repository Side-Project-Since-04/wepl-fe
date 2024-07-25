'use client';
import React, { useEffect } from 'react';
import { Form } from '@ui/src/Form';
import { UseFormReturn } from 'react-hook-form';

import InputFormItem from '@ui/src/components/Form/InputFormItem';
import DatePickerFormItem from '@ui/src/components/Form/DatePickFormItem';
import MoneyInputFormItem from '@ui/src/components/Form/MoneyFormItem';
import TimeInputFormItem from '@ui/src/components/Form/TimeInputFormItem';
import { type SpendingFormDataType } from '@/app/spending/[classification]/[smallCategoryPk]/spendingForm/page';

type SpendingFormProps = {
  form: UseFormReturn<SpendingFormDataType>;
  onSave: React.FormEventHandler<HTMLFormElement>;
  initValues?: SpendingFormDataType;
};

const SpendingForm = ({ form, onSave, ...props }: SpendingFormProps) => {
  useEffect(() => {
    if (props.initValues) {
      form.reset(props.initValues);
    }
  }, []);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-[24px]" onSubmit={onSave}>
        <MoneyInputFormItem control={form.control} name="cost" label="지출액" required={true} placeholder="0원" />
        <DatePickerFormItem control={form.control} name="paidAt" label="지출일" required={true} />
        <InputFormItem
          control={form.control}
          name="scheduleName"
          label="일정명"
          required={true}
          placeholder="일정명을 입력해주세요"
        />
        <div className="flex justify-between">
          <div className="flex-1">
            <TimeInputFormItem
              control={form.control}
              name="startedHour"
              label="시작 시간"
              placeholder="00시"
              unit="시"
              range={[0, 23]}
            />
          </div>
          <div className="flex-1 pl-[16px] flex flex-col justify-end">
            <TimeInputFormItem control={form.control} name="startedMin" placeholder="00분" unit="분" range={[0, 59]} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <TimeInputFormItem
              control={form.control}
              name="endHour"
              label="종료 시간"
              placeholder="00시"
              unit="시"
              range={[0, 23]}
            />
          </div>
          <div className="flex-1 pl-[16px] flex flex-col justify-end">
            <TimeInputFormItem control={form.control} name="endMin" placeholder="00분" unit="분" range={[0, 59]} />
          </div>
        </div>
        <InputFormItem control={form.control} name="memo" label="메모" placeholder="메모를 입력해주세요" />
      </form>
    </Form>
  );
};

export default SpendingForm;
