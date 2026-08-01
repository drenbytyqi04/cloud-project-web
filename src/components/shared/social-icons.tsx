import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8.5h2.5V5h-2.7C11.9 5 10.5 6.6 10.5 9v2.2H8.3v3.3h2.2V21h3.3v-6.5h2.4l.4-3.3h-2.8V9c0-.4.3-.5.6-.5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5v6" />
      <circle cx="8" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 16.5v-3.3c0-1.2.9-2 2-2s2 .8 2 2v3.3" />
      <path d="M12 10.5v6" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4v9.2a2.9 2.9 0 1 1-2.4-2.85" />
      <path d="M14 4c.3 2 1.8 3.6 4 3.9" />
    </svg>
  );
}
