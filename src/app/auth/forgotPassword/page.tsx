"use client";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
type InputType = z.infer<typeof FormSchema>;

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const submitRequest: SubmitHandler<InputType> = async (
    data
  ) => {
    console.log(data);
  };

  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-3">
      <form
        className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow"
        onSubmit={handleSubmit(submitRequest)}
      >
        <div className="p-2 text-center ">Enter Your Email</div>
        <Input
          label="Email"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
          errorMessage={errors.email?.message}
        />
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          color="primary"
        >
          {isSubmitting ? "Please wait..." : "Submit"}
        </Button>
      </form>
      <Image
        src={"/forgotPass.png"}
        width={500}
        height={500}
        alt="Forgot Password"
        className="col-span-2 place-self-center"
      />
    </div>
  );
};

export default page;
