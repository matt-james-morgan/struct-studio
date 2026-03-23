import { Card, Text, Badge, Group, Stack, Anchor, Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Anchor component={Link} to={`/work/${project.slug}`} underline="never">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ cursor: 'pointer', height: '100%' }}
        >
          {/* Color bar */}
          <Box
            style={{
              height: 4,
              borderRadius: 2,
              background: project.color,
              marginBottom: 16,
            }}
          />

          <Stack gap="sm">
            <Group justify="space-between" align="flex-start">
              <Text fw={600} size="lg" c="dark">
                {project.name}
              </Text>
              <Badge variant="light" color="violet" size="sm">
                {project.type}
              </Badge>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={3}>
              {project.shortDescription}
            </Text>

            <Group gap="xs" mt="xs">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" color="gray" size="xs">
                  {tag}
                </Badge>
              ))}
            </Group>

            <Text size="sm" c="violet" fw={500} mt="xs">
              View case study →
            </Text>
          </Stack>
        </Card>
      </Anchor>
    </motion.div>
  )
}
