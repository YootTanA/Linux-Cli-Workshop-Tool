"use client";

import UserBox, { TestResult } from "@/components/UserBox";
import { useEffect, useState } from "react";

interface ReportDict {
  [key: string]: TestResult;
}

const Users = () => {
  const [userFileContent, setUserFileContent] = useState([]);
  const [reportDict, setReportDict] = useState<ReportDict>({});

  useEffect(() => {
    const fetchUserFileContent = async () => {
      try {
        const response = await fetch("/api/users");
        if (response.ok) {
          const data = await response.json();
          setUserFileContent(data);
        } else {
          console.log("Error fetching file content");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserFileContent();
    const intervalId = setInterval(fetchUserFileContent, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchReportFileContent = async () => {
      try {
        const response = await fetch("/api/reports");
        if (response.ok) {
          const data = await response.json();

          let reportDict: ReportDict = {};
          for (let i = 0; i < data.length; i++) {
            switch (data[i].testResult) {
              case "PASSED":
                reportDict[data[i].username] = TestResult.PASSED;
                break;
              case "FAILED":
                reportDict[data[i].username] = TestResult.FAILED;
                break;
            }
          }
          setReportDict(reportDict);
        } else {
          console.log("Error fetching file content");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchReportFileContent();
    const intervalId = setInterval(fetchReportFileContent, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const users: React.ReactNode[] = [];
  for (let i = 0; i < userFileContent.length; i++) {
    const username = userFileContent[i].username;
    let testResult = TestResult.UNKNOWN;

    if (username in reportDict) {
      testResult = reportDict[username];
    }
    users.push(
      <li>
        <UserBox key={i} testResult={testResult}>
          {username}
        </UserBox>
      </li>,
    );
  }
  return (
    <>
      <ul className="grid grid-cols-10 gap-5 max-w-[80rem]">{users}</ul>
    </>
  );
};

export default Users;
