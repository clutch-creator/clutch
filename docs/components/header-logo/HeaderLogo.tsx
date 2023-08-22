import React from "react";
import styles from "./HeaderLogo.module.css";
export const HeaderLogo = () => (
  <a className={styles.headerLogo} href="https://clutch.io">
    <span>
      <svg
        height="24"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40.3075C0 18.0463 18.0463 0 40.3075 0H121.875V259.999H40.3075C18.0463 259.999 0 241.953 0 219.692V40.3075Z"
          fill="currentColor"
        />
        <path
          d="M138.126 0H219.693C241.954 0 260.001 18.0463 260.001 40.3075V81.5671C260.001 103.828 241.954 121.875 219.693 121.875H178.433C156.172 121.875 138.126 103.828 138.126 81.5671V0Z"
          fill="currentColor"
        />
        <path
          d="M138.126 260H219.693C241.954 260 260.001 241.954 260.001 219.693V178.433C260.001 156.172 241.954 138.125 219.693 138.125H178.433C156.172 138.125 138.126 156.172 138.126 178.433V260Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </a>
);
