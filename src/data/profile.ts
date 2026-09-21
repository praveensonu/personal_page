export interface ProfileLink {
  label: string;
  href: string;
  kind: 'scholar' | 'github' | 'linkedin' | 'email' | 'cv';
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  institution: string;
  location?: string;
  email: string;
  github: string;
  googleScholar?: string;
  linkedin: string;
  cv: string;
  profileImage: string;
  bio: string[];
  researchInterests: string[];
}

// Central profile data used by the navigation, sidebar, homepage, and metadata.
export const profile: Profile = {
  name: 'Praveen Bushipaka',
  shortName: 'Praveen Bushipaka',
  title: 'PhD Researcher in Artificial Intelligence',
  institution: 'Scuola Superiore Sant’Anna & University of Pisa',
  location: 'Pisa, Italy',
  email: 'bushipakapraveen@gmail.com',
  github: 'https://github.com/praveensonu',
  linkedin: 'https://www.linkedin.com/in/praveen-bushipaka',
  cv: '/Praveen_Bushipaka_CV.pdf',
  profileImage: '/profile-placeholder.svg',
  bio: [
    'I am a PhD researcher in Artificial Intelligence working at the intersection of LLM unlearning, data selection, trustworthy AI, retrieval, and production-oriented LLM systems. My research spans gradient-guided coreset selection, reliable unlearning evaluation, and privacy-preserving model adaptation.',
    'My engineering work spans distributed training, parameter-efficient fine-tuning, retrieval-augmented generation, evaluation pipelines, and full-stack AI tooling. I am interested in translating new NLP and LLM methods into robust, measurable systems.',
  ],
  researchInterests: ['Large Language Models', 'Machine Unlearning', 'Data Selection & Coresets', 'Trustworthy AI', 'Retrieval-Augmented Generation', 'LLM Systems & Evaluation'],
};

export const profileLinks: ProfileLink[] = [
  ...(profile.googleScholar ? [{ label: 'Google Scholar', href: profile.googleScholar, kind: 'scholar' as const }] : []),
  { label: 'GitHub', href: profile.github, kind: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, kind: 'email' },
  { label: 'CV', href: profile.cv, kind: 'cv' },
];
