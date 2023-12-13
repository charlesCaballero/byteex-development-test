import React from "react";

const WaveIcon = ({
  width = "23",
  height = "23",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.27847 3.30024C2.63721 1.98269 3.71052 0.940956 6.62322 2.79957C8.02241 3.69199 9.15093 4.02928 10.0897 4.02752C11.7346 4.02752 12.801 2.99457 13.7226 2.10127C13.8808 1.94585 13.9792 1.72696 13.9969 1.49101C14.0146 1.25506 13.9502 1.02059 13.8175 0.837309C13.7527 0.747372 13.6726 0.673016 13.582 0.618641C13.4913 0.564266 13.3919 0.530976 13.2897 0.520739C13.1875 0.510502 13.0844 0.523527 12.9867 0.559043C12.889 0.59456 12.7986 0.651846 12.7208 0.727513C11.3629 2.04681 10.2888 3.08855 7.37609 1.22818C3.52775 -1.22509 1.7249 0.522855 0.276718 1.92824C0.118639 2.08378 0.0204057 2.30273 0.00283814 2.53868C-0.0147295 2.77463 0.0497497 3.00903 0.182609 3.1922C0.247414 3.28198 0.327508 3.35617 0.418151 3.41038C0.508794 3.46458 0.608144 3.4977 0.710322 3.50778C0.812499 3.51785 0.915428 3.50467 1.01302 3.46902C1.11061 3.43338 1.20087 3.37598 1.27847 3.30024ZM12.7208 5.21331C11.3629 6.53086 10.2888 7.57435 7.37609 5.71398C3.52775 3.25895 1.7249 5.00778 0.276718 6.41228C0.118639 6.56782 0.0204057 6.78677 0.00283814 7.02272C-0.0147295 7.25867 0.0497497 7.49307 0.182609 7.67624C0.247302 7.76615 0.32731 7.84049 0.417897 7.89485C0.508484 7.94922 0.607808 7.98251 0.709989 7.99274C0.812171 8.00298 0.915132 7.98996 1.01278 7.95446C1.11043 7.91895 1.20077 7.86168 1.27847 7.78604C2.63721 6.46761 3.71052 5.42588 6.62322 7.28361C8.02241 8.17779 9.15093 8.51332 10.0897 8.51332C11.7346 8.51332 12.801 7.48037 13.7226 6.58532C13.8809 6.43017 13.9794 6.2114 13.9971 5.97553C14.0148 5.73966 13.9504 5.50528 13.8175 5.32223C13.7527 5.23225 13.6726 5.15788 13.5819 5.10351C13.4913 5.04915 13.3918 5.0159 13.2896 5.00574C13.1873 4.99558 13.0843 5.00872 12.9866 5.04438C12.8889 5.08003 12.7985 5.13748 12.7208 5.21331ZM12.7208 9.69823C11.3629 11.0175 10.2888 12.0593 7.37609 10.2007C3.52775 7.74563 1.7249 9.49358 0.276718 10.899C0.118639 11.0545 0.0204057 11.2734 0.00283814 11.5094C-0.0147295 11.7453 0.0497497 11.9797 0.182609 12.1629C0.24735 12.2528 0.327419 12.3271 0.418064 12.3814C0.508709 12.4356 0.608084 12.4688 0.710292 12.4789C0.812501 12.489 0.91546 12.4757 1.01306 12.44C1.11066 12.4043 1.20092 12.3468 1.27847 12.271C2.63721 10.9534 3.71052 9.91255 6.62322 11.7703C8.02241 12.6627 9.15093 13 10.0897 13C11.7346 13 12.801 11.9653 13.7226 11.072C13.8808 10.9166 13.9792 10.6977 13.9969 10.4617C14.0146 10.2258 13.9502 9.99131 13.8175 9.80803C13.7527 9.71819 13.6726 9.64393 13.5819 9.58963C13.4913 9.53532 13.3919 9.50207 13.2897 9.49184C13.1875 9.4816 13.0845 9.4946 12.9868 9.53004C12.8891 9.56549 12.7987 9.62268 12.7208 9.69823Z"
        fill="#01005B"
      />
    </svg>
  );
};

export default WaveIcon;
