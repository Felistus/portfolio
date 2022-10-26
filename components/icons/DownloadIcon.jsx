import { memo } from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 10V8h-2v4H8l4 4 4-4h-3z"
      fill="currentColor"
    />
  </svg>
);

const DownloadIcon = memo(SvgComponent);
export default DownloadIcon;
