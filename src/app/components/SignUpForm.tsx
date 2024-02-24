import { Input } from "@nextui-org/react";
import {
  EnvelopeIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export const SignUpForm = () => {
  return (
    <form className="grid grid-cols-2 gap-3 p-2 shadow border rounded-md">
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
        type="Password"
        startContent={<KeyIcon className="w-4" />}
      />
      <Input
        className="col-span-2"
        label="Confirm Password"
        type="Password"
        startContent={<KeyIcon className="w-4" />}
      />
    </form>
  );
};
