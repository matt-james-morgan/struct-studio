import {
  Container,
  Title,
  Text,
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  SimpleGrid,
  Box,
  Anchor,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormValues {
  name: string
  email: string
  projectType: string | null
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      projectType: null,
      message: '',
    },
    validate: {
      name: (v) => (v.trim().length >= 2 ? null : 'Name must be at least 2 characters'),
      email: (v) => (isValidEmail(v) ? null : 'Please enter a valid email address'),
      projectType: (v) => (v ? null : 'Please select a project type'),
      message: (v) => (v.trim().length >= 20 ? null : 'Message must be at least 20 characters'),
    },
  })

  function handleSubmit(values: FormValues) {
    const subject = encodeURIComponent(`New inquiry: ${values.projectType}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nProject Type: ${values.projectType}\n\n${values.message}`,
    )
    window.location.href = `mailto:ink.and.interface.web@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Container size="sm" py={64}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stack gap="xl">
          <Stack gap="sm">
            <Title order={1}>Get in Touch</Title>
            <Text c="dimmed" size="lg">
              Tell us about your project. We'll get back to you within 1–2 business days.
            </Text>
          </Stack>

          {submitted ? (
            <Box
              p="xl"
              style={{
                borderRadius: 12,
                background: 'var(--mantine-color-violet-0)',
                border: '1px solid var(--mantine-color-violet-2)',
              }}
            >
              <Stack gap="sm">
                <Text fw={600} size="lg">
                  Message sent!
                </Text>
                <Text c="dimmed">
                  Thanks for reaching out. We'll be in touch shortly at{' '}
                  <strong>{form.values.email}</strong>.
                </Text>
              </Stack>
            </Box>
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    required
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    label="Email"
                    placeholder="you@example.com"
                    required
                    {...form.getInputProps('email')}
                  />
                </SimpleGrid>

                <Select
                  label="Project type"
                  placeholder="Select one"
                  required
                  data={[
                    'Musician / Singer-Songwriter Site',
                    'Band Website',
                    'Artist Portfolio',
                    'Music Academy / School',
                    'Album / Event Landing Page',
                    'Redesign / Relaunch',
                    'Other',
                  ]}
                  {...form.getInputProps('projectType')}
                />

                <Textarea
                  label="Tell us about your project"
                  placeholder="What are you building? Who's your audience? Any inspiration or examples?"
                  required
                  minRows={5}
                  {...form.getInputProps('message')}
                />

                <Button type="submit" size="md" variant="filled" color="violet" radius="md">
                  Send Message
                </Button>
              </Stack>
            </form>
          )}

          <Text size="sm" c="dimmed">
            Prefer email?{' '}
            <Anchor href="mailto:ink.and.interface.web@gmail.com" c="violet">
              ink.and.interface.web@gmail.com
            </Anchor>
          </Text>
        </Stack>
      </motion.div>
    </Container>
  )
}
