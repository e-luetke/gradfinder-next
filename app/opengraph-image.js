import { ImageResponse } from 'next/og'

export const alt = 'Another Degree Hotter — Graduate Program Browser for the US & Canada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a5e38',
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: '#246b43',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 44,
          }}
        >
          <span style={{ fontSize: 220, color: '#FFAB76', lineHeight: 1, marginTop: -20 }}>
            °
          </span>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: '#FFAB76',
            letterSpacing: '-1px',
          }}
        >
          Another Degree Hotter
        </div>
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.65)',
            marginTop: 18,
          }}
        >
          Graduate Program Browser — US &amp; Canada
        </div>
      </div>
    ),
    { ...size },
  )
}
