import Link from "next/link";

export enum TestResult {
  PASSED,
  FAILED,
  UNKNOWN,
}

interface UserBoxProps extends React.PropsWithChildren {
  testResult: TestResult;
}

function boxStyle(testResult: TestResult) {
  const base =
    "border-2 border-black items-center flex justify-center p-5 text-base";

  switch (testResult) {
    case TestResult.PASSED:
      return base.concat(" ", "bg-green-300 text-black");
    case TestResult.FAILED:
      return base.concat(" ", "bg-red-400 text-white");
  }
  return base;
}

const UserBox: React.FC<UserBoxProps> = (props) => {
  return <div className={boxStyle(props.testResult)}>{props.children}</div>;
};

export default UserBox;
