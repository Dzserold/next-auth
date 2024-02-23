import { Link } from "@nextui-org/react";

const page = () => {
  return (
    <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center md:col-span-2">
        <p className="p-2 text-center">Already Signed up?</p>
        <Link href="/auth/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default page;
