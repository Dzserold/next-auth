"use client";

import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { z } from "zod";
import validator from "validator";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First Name must be at least 2 characters")
      .max(45, "First Name must be less than 45 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(45, "Last name must be less than 45 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      // Validates the phone number with an installed package
      .refine(validator.isMobilePhone, "Please enter a valid phone number"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at less than 50 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at less than 50 characters"),
    accepted: z.literal(true, {
      errorMap: () => ({
        message: "Please accept all terms",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match",
    path: ["password", "confirmPassword"],
  });

type InputType = z.infer<typeof FormSchema>;

export const SignUpForm = () => {
  const { register, handleSubmit, reset, control } = useForm<InputType>();

  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisible = () => setIsVisiblePass((prev) => !prev);

  const saveUser: SubmitHandler<InputType> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="grid grid-cols-2 gap-3 p-2 border rounded-md shadow place-self-stretch"
    >
      <Input
        {...register("firstName")}
        label="First Name"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        {...register("lastName")}
        label="Last Name"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        {...register("email")}
        className="col-span-2"
        label="Email"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        {...register("phone")}
        className="col-span-2"
        label="Phone"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        {...register("password")}
        className="col-span-2"
        label="Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisible}
            />
          ) : (
            <EyeIcon className="w-4 cursor-pointer" onClick={toggleVisible} />
          )
        }
      />
      <Input
        {...register("confirmPassword")}
        className="col-span-2"
        label="Confirm Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisible}
            />
          ) : (
            <EyeIcon className="w-4 cursor-pointer" onClick={toggleVisible} />
          )
        }
      />
      <Controller
        control={control}
        name="accepted"
        render={({ field }) => (
          <Checkbox
            onChange={field.onChange}
            onBlur={field.onBlur}
            className="col-span-2"
          >
            I Accept The <Link href="/terms">Terms</Link>
          </Checkbox>
        )}
      />
      <div className="flex justify-center col-span-2">
        <Button className="w-48" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
