import ResetPasswordForm from "@/app/components/ResetPasswordForm";

interface Props {
  params: {
    jwt: string;
  };
}

const page = ({ params }: Props) => {
  return (
    <div>
      <ResetPasswordForm jwtUserId={params.jwt} />
    </div>
  );
};

export default page;
