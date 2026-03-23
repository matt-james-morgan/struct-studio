import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  Badge,
  Button,
  List,
  ThemeIcon,
  Box,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Starter',
    price: '$800',
    tagline: 'Perfect for a solo artist or musician who needs a clean, professional web presence.',
    features: [
      'Up to 4 pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      'Deployment to Vercel or Netlify',
      '30-day support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$1,500',
    tagline: 'For bands, established artists, or schools that need more features and polish.',
    features: [
      'Up to 8 pages',
      'Custom animations & transitions',
      'Google Sheets or CMS integration',
      'Event listings or gallery',
      'Press kit / media download section',
      'Google Analytics',
      '60-day support',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Custom',
    price: 'Let\'s talk',
    tagline: 'For complex projects: academies, booking systems, e-commerce, or full rebrands.',
    features: [
      'Everything in Standard',
      'Custom backend features',
      'Student / member portals',
      'E-commerce or shop integration',
      'Ongoing maintenance retainer available',
      'Priority support',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <Container size="lg" py={64}>
      <Stack gap={64}>
        <Stack gap="sm" align="center">
          <Title order={1} ta="center">
            Pricing
          </Title>
          <Text c="dimmed" maw={500} ta="center" size="lg">
            Straightforward pricing. No hidden fees, no hourly surprises. All projects start with a
            free consultation.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ height: '100%' }}
            >
              <Card
                withBorder
                radius="md"
                padding="xl"
                h="100%"
                style={{
                  borderColor: tier.highlight ? 'var(--mantine-color-forest-4)' : undefined,
                  borderWidth: tier.highlight ? 2 : 1,
                  position: 'relative',
                }}
              >
                {tier.highlight && (
                  <Badge
                    color="forest"
                    variant="filled"
                    style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}
                  >
                    Most Popular
                  </Badge>
                )}

                <Stack gap="lg" h="100%" justify="space-between">
                  <Stack gap="md">
                    <Stack gap="xs">
                      <Text fw={700} size="lg">
                        {tier.name}
                      </Text>
                      <Title order={2} style={{ fontSize: '2rem' }}>
                        {tier.price}
                      </Title>
                      <Text size="sm" c="dimmed">
                        {tier.tagline}
                      </Text>
                    </Stack>

                    <List
                      spacing="xs"
                      size="sm"
                      icon={
                        <ThemeIcon color="forest" size={18} radius="xl" variant="light">
                          <IconCheck size={12} />
                        </ThemeIcon>
                      }
                    >
                      {tier.features.map((feature) => (
                        <List.Item key={feature}>{feature}</List.Item>
                      ))}
                    </List>
                  </Stack>

                  <Button
                    component={Link}
                    to="/contact"
                    variant={tier.highlight ? 'filled' : 'light'}
                    color="forest"
                    fullWidth
                    radius="md"
                  >
                    {tier.cta}
                  </Button>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>

        <Box
          p="xl"
          style={{
            borderRadius: 12,
            background: 'var(--mantine-color-gray-0)',
            border: '1px solid var(--mantine-color-gray-2)',
          }}
        >
          <Stack gap="xs">
            <Text fw={600}>Not sure which tier fits?</Text>
            <Text size="sm" c="dimmed">
              Every project is different. Send us a message describing what you need and we'll
              recommend the right fit — no commitment required.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
