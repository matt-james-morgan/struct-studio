import { Container, Title, Text, Button, Group, SimpleGrid, Stack, Box } from '@mantine/core'
import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Box
        style={{
          background: 'linear-gradient(135deg, #f5f3ff 0%, #fdf4ff 50%, #fff 100%)',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
        }}
      >
        <Container size="lg" py={100}>
          <Stack align="center" gap="xl">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title
                order={1}
                ta="center"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}
              >
                Websites for{' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'violet', to: 'grape', deg: 90 }}
                >
                  artists, musicians
                </Text>
                {' '}& makers.
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Text size="xl" c="dimmed" ta="center" maw={560}>
                We design and build beautiful, fast websites tailored to creative professionals.
                Your work deserves a home that matches it.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Group gap="md">
                <Button
                  component={Link}
                  to="/work"
                  size="lg"
                  variant="filled"
                  color="violet"
                  radius="md"
                >
                  See Our Work
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  size="lg"
                  variant="light"
                  color="violet"
                  radius="md"
                >
                  Get a Quote
                </Button>
              </Group>
            </motion.div>
          </Stack>
        </Container>
      </Box>

      {/* Portfolio preview */}
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Stack gap="xs" align="center">
            <Title order={2} ta="center">
              Recent Work
            </Title>
            <Text c="dimmed" ta="center" maw={480}>
              A sample of sites we've built for musicians, bands, and visual artists.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </SimpleGrid>

          <Group justify="center">
            <Button
              component={Link}
              to="/work"
              variant="outline"
              color="violet"
              size="md"
            >
              View All Projects
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* CTA band */}
      <Box bg="violet.9" py={80}>
        <Container size="lg">
          <Stack align="center" gap="lg">
            <Title order={2} c="white" ta="center">
              Ready to get your site online?
            </Title>
            <Text c="violet.2" ta="center" size="lg" maw={480}>
              We work with creatives at every stage — from first website to full rebrand.
            </Text>
            <Button
              component={Link}
              to="/contact"
              size="lg"
              variant="white"
              color="violet"
              radius="md"
            >
              Start a Conversation
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
