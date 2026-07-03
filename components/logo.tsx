export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Matrass Georgia logo"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.95">
        <path d="M 279.3,280.7 A 110,110 0 1,1 279.3,139.3" strokeWidth="7" />
        <path d="M 266.2,269.8 A 93,93 0 1,1 266.2,150.2" strokeWidth="7" />
        <path d="M 253.2,258.9 A 76,76 0 1,1 253.2,161.1" strokeWidth="7" />
        <path d="M 240.1,247.9 A 59,59 0 1,1 240.1,172.1" strokeWidth="7" />
      </g>
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none">
        <line x1="240.1" y1="247.9" x2="240.1" y2="320" />
        <line x1="253.2" y1="247.9" x2="253.2" y2="320" />
        <line x1="266.2" y1="247.9" x2="266.2" y2="320" />
        <line x1="279.3" y1="247.9" x2="279.3" y2="320" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <line x1="164" y1="193" x2="164" y2="243" />
        <line x1="168" y1="193" x2="168" y2="243" />
        <line x1="172" y1="193" x2="172" y2="243" />
        <line x1="176" y1="193" x2="176" y2="243" />
        <line x1="164" y1="193" x2="200" y2="233" />
        <line x1="168" y1="193" x2="200" y2="228.6" />
        <line x1="172" y1="193" x2="200" y2="224.1" />
        <line x1="176" y1="193" x2="200" y2="219.7" />
        <line x1="236" y1="193" x2="200" y2="233" />
        <line x1="232" y1="193" x2="200" y2="228.6" />
        <line x1="228" y1="193" x2="200" y2="224.1" />
        <line x1="224" y1="193" x2="200" y2="219.7" />
        <line x1="224" y1="193" x2="224" y2="243" />
        <line x1="228" y1="193" x2="228" y2="243" />
        <line x1="232" y1="193" x2="232" y2="243" />
        <line x1="236" y1="193" x2="236" y2="243" />
      </g>
    </svg>
  )
}
