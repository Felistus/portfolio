import { memo } from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path fill="none" d="M0 0H24V24H0z" />
    <path
      d="M21 18v2H3v-2h18zM6.95 3.55v9.9L2 8.5l4.95-4.95zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"
      fill="currentColor"
    />
  </svg>
);

const MenufoldIcon = memo(SvgComponent);
export default MenufoldIcon;
