export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="mergepdf logo"
    >
      <rect width="32" height="32" rx="8" fill="#0A0A0A" />
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="#2A2A2A" strokeWidth="1" />
      <rect x="6" y="8" width="9" height="12" rx="2" fill="#1A1A1A" stroke="#A3FF12" strokeWidth="1.2" />
      <rect x="17" y="8" width="9" height="12" rx="2" fill="#1A1A1A" stroke="#A3FF12" strokeWidth="1.2" />
      <line x1="16" y1="20" x2="16" y2="23" stroke="#A3FF12" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15.5 22 L16 24 L16.5 22" stroke="#A3FF12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="24" width="12" height="2" rx="1" fill="#A3FF12" opacity="0.8" />
    </svg>
  )
}
