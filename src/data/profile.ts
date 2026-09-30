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
  profileImage: '/profile.jpg',
  bio: [
    'I am a PhD researcher in Artificial Intelligence, with the past four years of my work focused mainly on NLP and Large Language Models (LLMs). I am currently pursuing my PhD under the supervision of Prof. Tommaso Cucinotta and Dr. Lucia Passaro.',
    'My research focuses on LLM unlearning, data selection, trustworthy AI, and retrieval. In particular, I work on gradient-guided data selection, reliable evaluation of machine unlearning, and privacy-preserving ways of adapting language models.I have also worked on multi-perspective learning in Social AI, exploring how different human perspectives and opinions can be represented using soft labels rather than reducing them to a single ground-truth label.',
    'Beyond research, I enjoy building practical AI systems. My engineering experience includes distributed training, parameter-efficient fine-tuning (PEFT), retrieval-augmented generation (RAG), evaluation pipelines, and full-stack AI tools.',
    'Before moving into NLP and LLM research, I worked with traditional machine learning in industry, where I developed and deployed ML models for real-world applications. This combination of research and engineering experience has shaped my interest in taking new NLP and LLM ideas beyond experiments and turning them into reliable, measurable systems.'
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
