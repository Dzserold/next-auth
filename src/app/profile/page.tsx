import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div>
      <Image
        className="rounded-full"
        src={user?.image ?? ""}
        height={300}
        width={300}
        alt={user?.firstName ?? ""}
      />
      <div className="grid grid-cols-4 gap-y-4">
        <p>First Name: </p>
        <p className="col-span-3">{user?.firstName}</p>
        <p>Last Name: </p>
        <p className="col-span-3">{user?.lastName}</p>
        <p>Phone: </p>
        <p className="col-span-3">{user?.phone}</p>
        <p>Email: </p>
        <p className="col-span-3">{user?.email}</p>
      </div>
    </div>
  );
};

export default page;
