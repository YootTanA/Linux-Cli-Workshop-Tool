import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface UserBoxProps extends React.PropsWithChildren {
  name: string;
  isPass: boolean;
}

function style(isPass: boolean) {
  const base =
    "w-fit h-fit border-2 border-black items-center flex justify-center p-5 text-base";
  return isPass ? base.concat(" ", "") : base.concat(" ", "");
}

const UserBox: React.FunctionComponent<UserBoxProps> = (props) => {
  return (
    <>
      <div className={style(props.isPass)}>{props.name}</div>
    </>
  );
};

export default UserBox;
