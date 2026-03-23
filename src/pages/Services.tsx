import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  ThemeIcon,
  Box,
  Button,
  Group,
} from '@mantine/core'
import {
  IconMusic,
  IconPhoto,
  IconUsers,
  IconSchool,
  IconDeviceLaptop,
  IconRefresh,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: IconMusic,
    title: 'Musician & Band Sites',
    description:
      'Bio, discography, tour dates, press kit, and music embeds. Built to help you get booked and grow your audience.',
    color: 'navy',
  },
  {
    icon: IconPhoto,
    title: 'Artist Portfolios',
    description:
      'Gallery-forward designs that let your work speak for itself. Commission forms, shop integration, and artist statements.',
    color: 'crimson',
  },
  {
    icon: IconSchool,
    title: 'Music & Arts Schools',
    description:
      'Scheduling pages, teacher profiles, student portals, and contact forms built for studios and academies.',
    color: 'sage',
  },
  {
    icon: IconUsers,
    title: 'Creative Collectives',
    description:
      'Multi-member portfolio sites, shared event listings, and collaborative spaces for artist groups.',
    color: 'navy',
  },
  {
    icon: IconDeviceLaptop,
    title: 'Landing Pages',
    description:
      'A focused, fast page for an album launch, event, or Kickstarter. Built to convert and easy to share.',
    color: 'sage',
  },
  {
    icon: IconRefresh,
    title: 'Redesigns & Relaunches',
    description:
      'Already have a site that\'s feeling stale or broken? We\'ll take what you have and make it something you\'re proud of.',
    color: 'crimson',
  },
]

export default function Services() {
  return (
    <Container size="lg" py={64}>
      <Stack gap={64}>
        <Stack gap="sm">
          <Title order={1}>Services</Title>
          <Text c="dimmed" maw={560} size="lg">
            We specialize in building websites for the creative community. Every site is designed
            from scratch and custom-coded — no page builders or cookie-cutter templates.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card withBorder radius="md" padding="lg" h="100%">
                <Stack gap="md">
                  <ThemeIcon size="lg" radius="md" variant="light" color={service.color}>
                    <service.icon size={20} />
                  </ThemeIcon>
                  <Stack gap="xs">
                    <Text fw={600} size="md">
                      {service.title}
                    </Text>
                    <Text size="sm" c="dimmed" style={{ lineHeight: 1.65 }}>
                      {service.description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>

        {/* What's included */}
        <Box
          p="xl"
          style={{
            borderRadius: 12,
            background: 'var(--mantine-color-navy-0)',
            border: '1px solid var(--mantine-color-navy-2)',
          }}
        >
          <Stack gap="md">
            <Title order={3}>Everything we build includes:</Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
              {[
                'Mobile-responsive design',
                'Fast load times',
                'Contact / inquiry form',
                'Basic SEO setup',
                'Deployment & hosting guidance',
                'Source code ownership',
                '30-day post-launch support',
                'Google Analytics setup',
              ].map((item) => (
                <Text key={item} size="sm" c="dimmed">
                  ✓ {item}
                </Text>
              ))}
            </SimpleGrid>
          </Stack>
        </Box>

        <Group>
          <Button component={Link} to="/pricing" size="md" variant="filled" color="navy">
            See Pricing
          </Button>
          <Button component={Link} to="/contact" size="md" variant="light" color="navy">
            Get a Quote
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}
