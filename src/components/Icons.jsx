// Simple 32x32 pixel-style icons drawn as SVG so the project has no
// icon-package dependency. shapeRendering="crispEdges" keeps the hard
// aliased look that Win95 icons had.
//
// To swap in a real React95 icon later, just import it in registry.jsx
// and use it as the `icon` value instead of one of these.

const base = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  xmlns: 'http://www.w3.org/2000/svg',
  shapeRendering: 'crispEdges',
};

export const UserIcon = () => (
  <svg {...base}>
    <rect x="4" y="3" width="24" height="26" fill="#ffffff" stroke="#000000" />
    <rect x="7" y="6" width="18" height="20" fill="#d8d8f0" />
    <circle cx="16" cy="13" r="4" fill="#f0c8a0" stroke="#000000" />
    <path d="M9 25 Q16 17 23 25 Z" fill="#3050a0" stroke="#000000" />
  </svg>
);

export const FilmIcon = () => (
  <svg {...base}>
    <rect x="3" y="7" width="26" height="18" fill="#404040" stroke="#000000" />
    <rect x="6" y="11" width="20" height="10" fill="#f0c000" />
    <g fill="#ffffff">
      <rect x="4" y="9" width="3" height="3" />
      <rect x="4" y="20" width="3" height="3" />
      <rect x="25" y="9" width="3" height="3" />
      <rect x="25" y="20" width="3" height="3" />
    </g>
  </svg>
);

export const MailIcon = () => (
  <svg {...base}>
    <rect x="3" y="8" width="26" height="17" fill="#ffffff" stroke="#000000" />
    <path d="M3 8 L16 18 L29 8" fill="none" stroke="#000000" strokeWidth="1.5" />
  </svg>
);

export const FolderIcon = () => (
  <svg {...base}>
    <path d="M3 8 h10 l3 3 h13 v15 h-26 z" fill="#f0c000" stroke="#000000" />
    <path d="M3 13 h26 v13 h-26 z" fill="#ffd84d" stroke="#000000" />
  </svg>
);

export const GlobeIcon = () => (
  <svg {...base}>
    <circle cx="16" cy="16" r="12" fill="#3090d0" stroke="#000000" />
    <ellipse cx="16" cy="16" rx="5" ry="12" fill="none" stroke="#ffffff" />
    <path d="M4 16 h24 M6 10 h20 M6 22 h20" stroke="#ffffff" fill="none" />
  </svg>
);

export const NotepadIcon = () => (
  <svg {...base}>
    <rect x="6" y="3" width="20" height="26" fill="#ffffff" stroke="#000000" />
    <g stroke="#3050a0">
      <path d="M10 10 h12 M10 14 h12 M10 18 h12 M10 22 h8" />
    </g>
  </svg>
);
