import { useParams, Link } from 'react-router-dom'
import { Container, Title, Text, Badge, Group, Stack, Button, Box, Anchor } from '@mantine/core'
import { motion } from 'framer-motion'
import { getProject } from '../data/projects'
import BrowserFrame from '../components/BrowserFrame'

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug ?? '')

  if (!project) {
    return (
      <Container size="lg" py={64}>
        <Stack gap="lg">
          <Title order={2}>Project not found</Title>
          <Anchor component={Link} to="/work" c="forest">
            ← Back to Work
          </Anchor>
        </Stack>
      </Container>
    )
  }

  return (
    <Container size="lg" py={64}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stack gap="xl">
          <Anchor component={Link} to="/work" c="dimmed" size="sm" underline="never">
            ← Back to Work
          </Anchor>

          {/* Color accent bar */}
          <Box
            style={{
              height: 6,
              borderRadius: 3,
              background: project.color,
              width: 80,
            }}
          />

          <Stack gap="xs">
            <Group gap="sm" align="center">
              <Badge variant="light" color="forest" size="md">
                {project.type}
              </Badge>
            </Group>
            <Title order={1}>{project.name}</Title>
            <Text size="xl" c="dimmed">
              {project.shortDescription}
            </Text>
          </Stack>

          {/* Site embed or placeholder */}
          {project.liveUrl ? (
            <BrowserFrame url={project.liveUrl} accentColor={project.color} />
          ) : (
            <Box
              style={{
                background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                border: `1px solid ${project.color}44`,
                borderRadius: 12,
                height: 360,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text size="sm" c="dimmed">Live URL coming soon</Text>
            </Box>
          )}

          {/* About this project */}
          <Stack gap="sm">
            <Title order={3}>About this project</Title>
            <Text c="dimmed" size="md" style={{ lineHeight: 1.75 }}>
              {project.longDescription}
            </Text>
          </Stack>

          {/* Tags */}
          <Group gap="xs">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" color="gray" size="sm">
                {tag}
              </Badge>
            ))}
          </Group>

          {/* CTA */}
          <Box
            p="xl"
            style={{
              borderRadius: 12,
              background: 'var(--mantine-color-forest-0)',
              border: '1px solid var(--mantine-color-forest-2)',
            }}
          >
            <Stack gap="sm">
              <Text fw={600}>Want a site like this?</Text>
              <Text c="dimmed" size="sm">
                We'd love to help you build something just as good — tailored to your work and your audience.
              </Text>
              <Button
                component={Link}
                to="/contact"
                variant="filled"
                color="forest"
                radius="md"
                style={{ alignSelf: 'flex-start' }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Box>
        </Stack>
      </motion.div>
    </Container>
  )
}
