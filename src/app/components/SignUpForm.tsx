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

export const SignUpForm = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisible = () => setIsVisiblePass((prev) => !prev);

  return (
    <form className="grid grid-cols-2 gap-3 p-2 border rounded-md shadow place-self-stretch">
      <Input label="First Name" startContent={<UserIcon className="w-4" />} />
      <Input label="Last Name" startContent={<UserIcon className="w-4" />} />
      <Input
        className="col-span-2"
        label="Email"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        className="col-span-2"
        label="Phone"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
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
      <Checkbox className="col-span-2">
        I Accept The <Link href="/terms">Terms</Link>
      </Checkbox>
      <div className="flex justify-center col-span-2">
        <Button className="w-48" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};