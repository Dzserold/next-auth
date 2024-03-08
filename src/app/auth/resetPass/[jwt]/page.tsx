import ResetPasswordForm from "@/app/components/ResetPasswordForm";
import { verifyJwt } from "@/app/lib/jwt";

interface Props {
  params: {
    jwt: string;
  };
}

const page = ({ params }: Props) => {
  const payload = verifyJwt(params.jwt);
  if (!payload) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-500">
        The URL is not valid
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <ResetPasswordForm jwtUserId={params.jwt} />
    </div>
  );
};

export default page;
