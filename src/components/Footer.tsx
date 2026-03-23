import { Container, Group, Text, Anchor, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <Divider mt="xl" />
      <Container size="lg" py="xl">
        <Group justify="space-between" wrap="wrap" gap="sm">
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Struct Studio. All rights reserved.
          </Text>
          <Group gap="lg">
            <Anchor component={Link} to="/work" size="sm" c="dimmed" underline="never">
              Work
            </Anchor>
            <Anchor component={Link} to="/services" size="sm" c="dimmed" underline="never">
              Services
            </Anchor>
            <Anchor component={Link} to="/pricing" size="sm" c="dimmed" underline="never">
              Pricing
            </Anchor>
            <Anchor
              href="mailto:ink.and.interface.web@gmail.com"
              size="sm"
              c="dimmed"
              underline="never"
            >
              ink.and.interface.web@gmail.com
            </Anchor>
          </Group>
        </Group>
      </Container>
    </>
  )
}
