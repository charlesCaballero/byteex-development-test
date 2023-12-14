import React from "react";

const ClockIcon = ({
  width = "11",
  height = "11",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.8501 2.75H4.9501V5.5H7.7001V6.6H3.8501V2.75Z"
        fill="#1FAD40"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 5.5C11 8.53754 8.53754 11 5.5 11C2.46243 11 0 8.53754 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53754 0 11 2.46243 11 5.5ZM9.9 5.5C9.9 7.93007 7.93007 9.9 5.5 9.9C3.06995 9.9 1.1 7.93007 1.1 5.5C1.1 3.06995 3.06995 1.1 5.5 1.1C7.93007 1.1 9.9 3.06995 9.9 5.5Z"
        fill="#1FAD40"
      />
    </svg>
  );
};

export default ClockIcon;