import { cn } from "clsx-tailwind-merge";

interface Props {
  passStrength: number;
}

// This function is geting the password stength as a number and
// returns blocks as UI response based on the number height which
// represents the password strength. Waakest password is one red line
// the strongest password is for green lines
const PasswordStrength = ({ passStrength }: Props) => {
  return (
    <div
      className={cn("flex col-span-2 gap-2", {
        "justify-around": passStrength === 3,
        "justify-start": passStrength < 3,
      })}
    >
      {Array.from({
        length: passStrength + 1,
      }).map((i, index) => (
        <div
          key={index}
          className={cn(
            "h-2 w-32 rounded-md",

            {
              "bg-red-500": passStrength === 0,
              "bg-orange-500": passStrength === 1,
              "bg-yellow-500": passStrength === 2,
              "bg-green-500": passStrength === 3,
            }
          )}
        ></div>
      ))}
    </div>
  );
};
export default PasswordStrength;
