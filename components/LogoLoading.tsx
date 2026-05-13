import React, { useId } from "react";

export interface LogoLoadingProps {
  size?: number
  duration?: number
  showDots?: boolean
  dotColor?: string
  className?: string
  label?: string
}

const LogoLoading: React.FC<LogoLoadingProps> = ({
  size = 88,
  duration = 2,
  showDots = true,
  dotColor = 'currentColor',
  className,
  label = 'Loading',
}) => {
  
  const gradientId = useId()

  return (
    <div
      role="status"
      aria-label={label}
      className={className}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}
    >
      <svg
        viewBox="0 0 204.02 175.34"
        width={size}
        height={size}
        style={{ display: 'block', overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="-612"
            y1="0"
            x2="612"
            y2="0"
          >
            <stop offset="0" stopColor="#E40303" />
            <stop offset="0.0833" stopColor="#FF8C00" />
            <stop offset="0.1666" stopColor="#FFED00" />
            <stop offset="0.25" stopColor="#008026" />
            <stop offset="0.3333" stopColor="#004DFF" />
            <stop offset="0.4166" stopColor="#750787" />
            <stop offset="0.5" stopColor="#E40303" />
            <stop offset="0.5833" stopColor="#FF8C00" />
            <stop offset="0.6666" stopColor="#FFED00" />
            <stop offset="0.75" stopColor="#008026" />
            <stop offset="0.8333" stopColor="#004DFF" />
            <stop offset="0.9166" stopColor="#750787" />
            <stop offset="1" stopColor="#E40303" />
            <animate attributeName="x1" from="-612" to="0" dur={`${duration}s`} repeatCount="indefinite" />
            <animate attributeName="x2" from="612" to="1224" dur={`${duration}s`} repeatCount="indefinite" />
          </linearGradient>
        </defs>
        <g fill={`url(#${gradientId})`}>
          <path d="M2.24,169.09c2.48-0.68,4.06-1.5,5.41-2.63c1.35-1.13,2.25-2.93,2.93-5.64c0.68-2.7,1.13-6.54,1.35-11.5
            c0.23-4.96,0.23-11.95,0.23-20.74V46.08c0-8.79,0-15.78-0.23-20.74c-0.22-4.96-0.68-8.79-1.35-11.5C9.9,11.13,9,9.33,7.65,8.2
            C6.29,7.07,4.49,6.17,2.01,5.5V2.57H48V5.5c-2.48,0.68-4.51,1.58-6.09,2.7s-2.7,2.93-3.38,5.64c-0.68,2.7-1.13,6.54-1.35,11.5
            c-0.22,4.96-0.22,11.72-0.22,20.51v118.83h16.23c6.76,0,12.62-0.45,17.36-1.13c4.73-0.68,8.79-2.25,12.17-4.51
            c3.38-2.25,6.31-5.64,8.79-9.92c2.48-4.28,4.96-10.14,7.44-17.36h3.83l-5.18,32.88c-0.23,1.58-0.45,2.93-0.68,3.83
            c-0.23,0.9-0.68,1.58-1.13,2.03c-0.45,0.45-1.13,0.68-1.8,0.68c-0.68,0-1.58,0-2.7,0H2.24V169.09L2.24,169.09z"/>
          <path d="M199.75,161.72c-1.35,1.58-2.93,2.93-4.96,3.83c-2.03,0.9-4.28,1.35-6.76,1.35c-2.03,0-4.06-0.45-5.86-1.35
            c-1.8-0.9-3.61-2.71-5.41-5.41s-3.83-6.54-6.09-11.5c-2.26-4.96-4.96-11.5-7.89-19.84c-2.48-6.76-5.18-12.62-7.89-17.36
            c-2.7-4.73-5.86-8.79-9.24-12.17c-3.38-3.38-7.21-6.09-11.5-8.12c-4.28-2.03-9.02-3.38-14.2-4.28
            c13.75-2.25,24.8-7.21,33.14-14.88s12.4-17.81,12.4-30.66c0-13.98-5.41-23.9-16.23-29.98c-10.82-6.09-26.15-9.02-46.21-9.02
            h-11.5l0.06,4.28H94h9.05c6.54,0,12.17,0.68,16.91,2.03c4.73,1.35,8.79,3.61,11.95,6.76c3.16,3.16,5.41,7.21,6.99,12.17
            c1.58,4.96,2.48,11.27,2.48,18.71l0-0.68c0,13.3-2.7,23.22-8.12,29.76c-5.41,6.54-13.98,9.69-25.7,9.69H94h-1.36l0.04,2.71h6.99
            c5.64,0,10.14,0.45,13.53,1.13c3.38,0.68,6.31,2.25,8.79,4.96c2.48,2.7,4.73,6.54,6.54,11.72c1.8,5.18,3.83,12.17,6.31,20.96
            c2.7,9.69,5.64,17.58,8.79,23.67c3.16,6.09,6.54,10.82,10.15,14.2c3.61,3.38,7.44,5.64,11.72,6.76
            c4.28,1.13,8.79,1.8,13.53,1.8c3.61,0,6.76-0.23,9.24-0.9c2.48-0.68,4.73-1.58,6.54-2.48c1.8-0.9,3.38-1.8,4.51-2.93
            c1.13-1.13,2.03-2.03,2.7-2.93L199.75,161.72z"/>
        </g>
      </svg>

      {showDots && (
        <div aria-hidden="true" style={{ display: 'flex', gap: 10 }}>
          {[0, 0.2, 0.4].map((delay) => (
            <span
              key={delay}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: dotColor,
                opacity: 0.25,
                animation: `logo-loader-dot 1.4s ease-in-out ${delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes logo-loader-dot {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          40%      { opacity: 1;    transform: scale(1.25); }
        }
      `}</style>

      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0, padding: 0, margin: -1 }}>
        {label}
      </span>
    </div>
  )
}

export default LogoLoading
