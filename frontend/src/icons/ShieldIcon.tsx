import React from "react";

const ShieldIcon = ({
  width = "18",
  height = "20",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.35105 19C9.29278 19 9.23445 18.991 9.17828 18.973C7.29002 18.3681 5.68242 17.208 4.40004 15.5248C3.39045 14.1996 2.58206 12.5502 1.99747 10.6226C1.01133 7.37118 1 4.47469 1 4.353C1 4.06135 1.22153 3.81734 1.51187 3.7893C1.55559 3.78506 5.95379 3.33355 9.0183 1.10806C9.21673 0.963884 9.48544 0.964054 9.68387 1.10812C12.7475 3.33355 17.1463 3.78506 17.1903 3.78936C17.4805 3.81768 17.7019 4.06158 17.7019 4.353C17.7019 4.47469 17.6906 7.37118 16.7045 10.6226C16.1199 12.5503 15.3115 14.1996 14.302 15.5248C13.0196 17.208 11.412 18.3682 9.52378 18.9731C9.4676 18.991 9.40933 19 9.35105 19ZM2.14884 4.84981C2.1959 5.80028 2.37887 7.98924 3.08912 10.3197C4.30128 14.2966 6.40767 16.8248 9.351 17.8371C12.3012 16.8225 14.41 14.2858 15.6206 10.2939C16.3261 7.96789 16.5071 5.79558 16.5534 4.84986C15.2847 4.66474 11.9983 4.03825 9.35094 2.25708C6.70339 4.03808 3.41763 4.66468 2.14884 4.84981Z"
        fill="#676869"
        stroke="#676869"
        stroke-width="0.4"
      />
      <path
        d="M9.0485 12.758C8.91418 12.758 8.78348 12.7102 8.68047 12.6221L6.63257 10.8708C6.3949 10.6675 6.36698 10.3101 6.57023 10.0723C6.77341 9.8346 7.13091 9.80663 7.36865 10.01L8.9613 11.372L12.118 7.23134C12.3076 6.98262 12.6629 6.9346 12.9117 7.12431C13.1604 7.31391 13.2083 7.66926 13.0187 7.91798L9.49888 12.535C9.40448 12.6588 9.2633 12.7383 9.10842 12.7548C9.08843 12.7569 9.06844 12.758 9.0485 12.758Z"
        fill="#676869"
        stroke="#676869"
        stroke-width="0.4"
      />
    </svg>
  );
};

export default ShieldIcon;
