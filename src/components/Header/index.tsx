// External imports
import { ReactNode } from "react";
import Router from "next/router";

// Internal imports
import { useLogin } from "../../contexts/LoginContext";

// Styles imports
import styles from "./index.module.scss";

// Types
type headerProps = {
  children: ReactNode;
};

export function Head({ children }: headerProps) {
  const { LogOut } = useLogin();

  const optionDashBoard = [
    {
      name: "Home",
      img: "",
      url: "/home",
    },
    {
      name: "Dashboard",
      img: "",
      url: "/home/dashboard",
    },
    {
      name: "Reports",
      img: "",
      url: "/home/reports",
    },
    {
      name: "Templates",
      img: "",
      url: "/home/templates",
    },
  ];

  const optionSettings = [
    {
      name: "Visit",
      img: "",
      url: "https://github.com/NathanQSilva/zabbixExtractor/blob/main/README.md",
    },
    {
      name: "Settings",
      img: "",
      url: "/home/conf",
    },
  ];

  const handleClick = (url: string) => {
    return Router.push(url);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.options}>
          {optionDashBoard.map((item, index) => {
            return (
              <div
                className={styles.option}
                key={index}
                onClick={() => handleClick(item.url)}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.options}>
          {optionSettings.map((item, index) => {
            return (
              <div
                className={styles.option}
                key={index}
                onClick={() => handleClick(item.url)}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
          <div className={styles.option} onClick={LogOut}>
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
