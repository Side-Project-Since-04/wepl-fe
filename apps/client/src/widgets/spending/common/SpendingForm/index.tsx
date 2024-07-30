'use client';
import React, { useEffect } from 'react';
import { Form } from '@ui/src/Form';
import type { UseFormReturn } from 'react-hook-form';
import InputFormItem from '@ui/src/components/Form/InputFormItem';
import DatePickerFormItem from '@ui/src/components/Form/DatePickFormItem';
import MoneyInputFormItem from '@ui/src/components/Form/MoneyFormItem';
import TimeInputFormItem from '@ui/src/components/Form/TimeInputFormItem';
import { type SpendingFormDataType } from '@/app/spending/[classificationName]/middle/[middleCategoryPk]/small/[smallCategoryPk]/spendingForm/page';

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
        <MoneyInputFormItem control={form.control} label="지출액" name="cost" placeholder="0원" required />
        <DatePickerFormItem control={form.control} label="지출일" name="paidAt" required />
        <InputFormItem
          control={form.control}
          label="일정명"
          name="scheduleName"
          placeholder="일정명을 입력해주세요"
          required
        />
        <div className="flex justify-between">
          <div className="flex-1">
            <TimeInputFormItem
              control={form.control}
              label="시작 시간"
              name="startedHour"
              placeholder="00시"
              range={[0, 23]}
              unit="시"
            />
          </div>
          <div className="flex-1 pl-[16px] flex flex-col justify-end">
            <TimeInputFormItem control={form.control} name="startedMin" placeholder="00분" range={[0, 59]} unit="분" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <TimeInputFormItem
              control={form.control}
              label="종료 시간"
              name="endHour"
              placeholder="00시"
              range={[0, 23]}
              unit="시"
            />
          </div>
          <div className="flex-1 pl-[16px] flex flex-col justify-end">
            <TimeInputFormItem control={form.control} name="endMin" placeholder="00분" range={[0, 59]} unit="분" />
          </div>
        </div>
        <InputFormItem control={form.control} label="메모" name="memo" placeholder="메모를 입력해주세요" />
      </form>
    </Form>
  );
};

export default SpendingForm;
