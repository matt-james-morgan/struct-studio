import { Container, Title, Text, SimpleGrid, Stack } from '@mantine/core'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <Container size="lg" py={64}>
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>Work</Title>
          <Text c="dimmed" maw={540}>
            Sites we've built for musicians, bands, and visual artists. Every project is
            custom-designed and built to last.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
