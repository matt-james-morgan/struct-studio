import { Group, Text, Anchor, Container, Burger, Drawer, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [opened, { toggle, close }] = useDisclosure(false)
  const location = useLocation()

  return (
    <Container size="lg" h="100%">
      <Group justify="space-between" h="100%">
        <Anchor component={Link} to="/" underline="never">
          <Text fw={700} size="lg" c="forest">
            Struct Studio
          </Text>
        </Anchor>

        {/* Desktop nav */}
        <Group gap="xl" visibleFrom="sm">
          {links.map((link) => (
            <Anchor
              key={link.href}
              component={Link}
              to={link.href}
              underline="never"
              c={location.pathname === link.href ? 'navy' : 'dimmed'}
              fw={location.pathname === link.href ? 600 : 400}
              size="sm"
            >
              {link.label}
            </Anchor>
          ))}
        </Group>

        {/* Mobile burger */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>

      <Drawer opened={opened} onClose={close} title="Struct Studio" size="xs">
        <Stack gap="lg" mt="md">
          {links.map((link) => (
            <Anchor
              key={link.href}
              component={Link}
              to={link.href}
              underline="never"
              c={location.pathname === link.href ? 'navy' : 'dark'}
              fw={600}
              size="md"
              onClick={close}
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </Container>
  )
}
