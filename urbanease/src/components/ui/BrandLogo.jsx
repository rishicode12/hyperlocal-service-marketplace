import React from "react";

function BrandLogo({ className = "", height = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 256"
      height={height}
      className={className}
      aria-label="Urbanease Services"
    >
      <title>Urbanease Services</title>
      <g fill="none" stroke="#0A54C2" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="32,160 176,64 320,160 480,64" />
        <rect x="150" y="96" width="24" height="32" />
      </g>
      <g fill="#000000">
        <text x="256" y="210" textAnchor="middle" fontSize="64" fontWeight="800" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
          URBANEASE
        </text>
        <text x="256" y="244" textAnchor="middle" fontSize="28" letterSpacing="12" fontWeight="600" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
          SERVICES
        </text>
      </g>
    </svg>
  );
}

export default BrandLogo;

