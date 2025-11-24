"use client";

import { useTodoContext } from "@/app/context";

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { FormValues } from "./taskForm.type";

export const TaskForm: React.FC = () => {
  const { dispatch } = useTodoContext();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: "", date: new Date() },
  });

  const dateValue = watch("date");

  const onSubmit = (data: FormValues) => {
    dispatch({
      type: "ADD_TASK",
      payload: { title: data.title, date: data.date?.toISOString() },
    });
    toast.success("Task added successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <p className="text-xs md:text-base text-neutral dark:text-base-content font-semibold mb-2">
        Tasks*
      </p>
      <div className="flex gap-2 mb-4 w-full">
        <Input
          label="Task"
          placeholder="Add a new task..."
          name="title"
          register={register("title", { required: "Task title is required" })}
          errors={errors}
          className="w-[80%]"
        />

        <DatePicker
          selected={dateValue}
          onChange={(date: Date | null) => setValue("date", date)}
          placeholderText="Set a date"
          className="form-control w-full border-grey/15 dark:bg-base-50 dark:text-base-content text-neutral/80 rounded p-2"
          isClearable
        />
      </div>

      {errors.title && (
        <p className="text-error text-xs mb-2">{errors.title.message}</p>
      )}
      <Button type="submit">Add</Button>
    </form>
  );
};
