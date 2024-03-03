import SignInForm from "@/app/components/SignInForm";
import Link from "next/link";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const page = ({ searchParams }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 ">
      <SignInForm callbackUrl={searchParams.callbackUrl} />
      <Link href={"/auth/forgotPass"}>
        Forgot Your Password?
      </Link>
    </div>
  );
};

export default page;
