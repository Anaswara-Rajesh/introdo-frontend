import React from 'react';

interface DynamicSVGProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  className?: string;
}

const DynamicIcon: React.FC<DynamicSVGProps> = ({
  width = "24",
  height = "24",
  fill = "none",
  stroke = "#3A86FF",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.5 9C10.433 9 12 7.433 12 5.5C12 3.567 10.433 2 8.5 2C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 17.5C2.5 14.1829 5.55286 11.5 9.31145 11.5C10.0727 11.5 10.8101 11.6114 11.5 11.8171"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 17.0499V15.9499C10.25 15.2999 10.7813 14.7624 11.4375 14.7624C12.5687 14.7624 13.0312 13.9624 12.4625 12.9811C12.1375 12.4186 12.3312 11.6874 12.9 11.3624L13.9812 10.7436C14.475 10.4499 15.1125 10.6249 15.4062 11.1186L15.475 11.2374C16.0375 12.2186 16.9625 12.2186 17.5312 11.2374L17.6 11.1186C17.8938 10.6249 18.5313 10.4499 19.025 10.7436L20.1063 11.3624C20.675 11.6874 20.8687 12.4186 20.5437 12.9811C19.975 13.9624 20.4375 14.7624 21.5688 14.7624C22.2188 14.7624 22.7563 15.2936 22.7563 15.9499V17.0499C22.7563 17.6999 22.225 18.2374 21.5688 18.2374C20.4375 18.2374 19.975 19.0374 20.5437 20.0186C20.8687 20.5874 20.675 21.3124 20.1063 21.6374L19.025 22.2561C18.5313 22.5499 17.8938 22.3749 17.6 21.8812L17.5312 21.7624C16.9688 20.7811 16.0437 20.7811 15.475 21.7624L15.4062 21.8812C15.1125 22.3749 14.475 22.5499 13.9812 22.2561L12.9 21.6374C12.3312 21.3124 12.1375 20.5811 12.4625 20.0186C13.0312 19.0374 12.5687 18.2374 11.4375 18.2374C10.7813 18.2374 10.25 17.6999 10.25 17.0499Z"
        fill="#EBF3FF"
        stroke={stroke}
        strokeWidth="1.40625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 18.375C17.5355 18.375 18.375 17.5355 18.375 16.5C18.375 15.4645 17.5355 14.625 16.5 14.625C15.4645 14.625 14.625 15.4645 14.625 16.5C14.625 17.5355 15.4645 18.375 16.5 18.375Z"
        fill="white"
        stroke={stroke}
        strokeWidth="1.40625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DynamicIcon;
