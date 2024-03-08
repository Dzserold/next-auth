import { activateUser } from "@/lib/actions/authActions";

interface Props {
  params: { jwt: string };
}

const page = async ({ params }: Props) => {
  const result = await activateUser(params.jwt);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {result === "userNotExist" ? (
        <p className="text-2xl text-red-500">
          The user does not exist
        </p>
      ) : result === "alreadyActivated" ? (
        <p className="text-2xl text-red-500">
          User already activated
        </p>
      ) : result === "success" ? (
        <p className="text-2xl text-green-500">
          Success! The User is activated
        </p>
      ) : (
        <p className="text-2xl text-yellow-500">
          Something went wrong!
        </p>
      )}
    </div>
  );
};

export default page;
