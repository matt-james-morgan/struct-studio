export interface Project {
  slug: string
  name: string
  client: string
  type: string
  shortDescription: string
  longDescription: string
  tags: string[]
  liveUrl?: string
  screenshotUrl?: string
  color: string
}

export const projects: Project[] = [
  {
    slug: 'courtyard',
    name: 'Courtyard Band',
    client: 'Courtyard',
    type: 'Band Website',
    shortDescription: 'A full band site with event listings, music player, and Google Sheets setlist integration.',
    longDescription:
      'Courtyard needed a home that matched their sound — energetic, clean, and always up to date. We built a site with live event listings, an embedded music player, and a Google Sheets integration so the band can update their setlist without touching any code.',
    tags: ['band', 'music', 'events', 'google sheets'],
    color: '#1a2e6e',
  },
  {
    slug: 'maple-key',
    name: 'Maple Key Music Academy',
    client: 'Maple Key',
    type: 'Music Academy',
    shortDescription: 'A full-featured website for a music school — lesson scheduling, teacher profiles, and student portal.',
    longDescription:
      'Maple Key Music Academy serves students across all ages and instruments. We built a complete web presence including public marketing pages, a teacher directory, and an internal scheduling and invoicing system for management.',
    tags: ['music', 'education', 'scheduling', 'academy'],
    color: '#47867a',
  },
  {
    slug: 'diana-rockwell',
    name: 'Diana Rockwell',
    client: 'Diana Rockwell',
    type: 'Musician Portfolio',
    shortDescription: 'A personal portfolio site for a singer-songwriter — bio, press kit, show listings, and contact.',
    longDescription:
      'Diana needed a professional online home to share her music, story, and upcoming shows. We created a site that feels as personal as her songwriting — with a bio section, press materials, an embedded music player, and a contact page for booking inquiries.',
    tags: ['musician', 'portfolio', 'singer-songwriter'],
    color: '#6e1a2e',
  },
  {
    slug: 'olivia-rockwell',
    name: 'Olivia Rockwell Art',
    client: 'Olivia Rockwell',
    type: 'Artist Portfolio',
    shortDescription: 'An animated portfolio gallery for a visual artist, with shop and commission inquiry form.',
    longDescription:
      'Olivia\'s art demanded a gallery experience that felt alive. We built a fully animated portfolio with smooth page transitions, a filterable gallery, a shop section, and a commission inquiry form — all optimized for displaying her work beautifully on any device.',
    tags: ['artist', 'portfolio', 'gallery', 'shop'],
    color: '#6e1a2e',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
