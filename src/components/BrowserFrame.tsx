import { useState } from 'react'
import { Box, Group, Text, Anchor, Loader, Stack } from '@mantine/core'
import { IconCircleFilled, IconExternalLink } from '@tabler/icons-react'

interface Props {
  url: string
  accentColor: string
}

export default function BrowserFrame({ url, accentColor }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [timedOut, setTimedOut] = useState(false)

  function handleLoad() {
    setLoaded(true)
  }

  // After 8 seconds without loading, show a fallback hint
  function handleLoadStart() {
    setTimeout(() => {
      setTimedOut(true)
    }, 8000)
  }

  const displayUrl = url.replace(/^https?:\/\//, '')

  return (
    <Box
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--mantine-color-gray-3)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      {/* Browser chrome bar */}
      <Box
        style={{
          background: 'var(--mantine-color-gray-1)',
          borderBottom: '1px solid var(--mantine-color-gray-3)',
          padding: '10px 16px',
        }}
      >
        <Group gap="md" align="center">
          {/* Traffic lights */}
          <Group gap={6}>
            <IconCircleFilled size={11} style={{ color: '#ff5f57' }} />
            <IconCircleFilled size={11} style={{ color: '#febc2e' }} />
            <IconCircleFilled size={11} style={{ color: '#28c840' }} />
          </Group>

          {/* URL bar */}
          <Box
            style={{
              flex: 1,
              background: 'white',
              border: '1px solid var(--mantine-color-gray-3)',
              borderRadius: 6,
              padding: '4px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <Text size="xs" c="dimmed" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {displayUrl}
            </Text>
            <Anchor href={url} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
              <IconExternalLink size={13} style={{ color: 'var(--mantine-color-dimmed)', display: 'block' }} />
            </Anchor>
          </Box>
        </Group>
      </Box>

      {/* iframe area */}
      <Box style={{ position: 'relative', height: 520, background: '#fafafa' }}>
        {/* Loading state */}
        {!loaded && (
          <Stack
            align="center"
            justify="center"
            gap="sm"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: '#fafafa',
            }}
          >
            <Loader color="forest" size="sm" />
            <Text size="xs" c="dimmed">Loading site…</Text>
            {timedOut && (
              <Text size="xs" c="dimmed" ta="center" maw={280}>
                Taking a while? The site may block embedding.{' '}
                <Anchor href={url} target="_blank" size="xs" c="forest">
                  Open it directly →
                </Anchor>
              </Text>
            )}
          </Stack>
        )}

        <iframe
          src={url}
          title="Site preview"
          onLoad={handleLoad}
          onLoadStart={handleLoadStart}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            // Subtle color tint via box-shadow on parent instead
          }}
        />

        {/* Accent line at top of iframe */}
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: accentColor,
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  )
}
