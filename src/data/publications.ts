export interface PublicationLink { paper?: string; code?: string; project?: string; arxiv?: string; bibtex?: string }
export interface Publication {
  title: string; authors: string[]; venue: string; year: number; status?: string;
  pages?: string; description?: string; thumbnail?: string; citation?: string;
  links: PublicationLink; selected: boolean;
}

// Use the exact profile.name value in an author list to highlight your name.
export const publications: Publication[] = [
  {
    title: 'GRACE: Gradient-guided Coreset Selection for LLM Unlearning',
    authors: ['Praveen Bushipaka', 'Andrea D’Angelo', 'Lucia Passaro', 'Tommaso Cucinotta'],
    venue: 'Findings of EMNLP', year: 2026, status: 'Accepted',
    description: 'A gradient-guided coreset selection method for constructing compact forget and retain sets for LLM unlearning.',
    citation: `@misc{bushipaka2026gracegradientguidedcoresetselectionllm,
  title={GRACE: Gradient-guided Coreset Selection for LLM Unlearning},
  author={Praveen Bushipaka and Andrea D'Angelo and Lucia Passaro and Tommaso Cucinotta},
  year={2026},
  eprint={2608.28361},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2608.28361}
}`,
    links: { arxiv: 'https://arxiv.org/abs/2608.28361' }, selected: true,
  },
  {
    title: 'OARS: Objective-Aware Retain-Set Selection for LLM Unlearning',
    authors: ['Praveen Bushipaka', 'et al.'],
    venue: 'NAACL', year: 2026, status: 'Under Review',
    description: 'Data-centric research on reliable LLM unlearning.',
    links: {}, selected: true,
  },
  {
    title: 'ForgetLLM: A Practical Implementation of LLM Unlearning',
    authors: ['Praveen Bushipaka', 'et al.'],
    venue: 'AAAI Demo', year: 2026, status: 'Under Review',
    description: 'A full-stack platform for modular LLM unlearning, data selection, distributed training, and experiment evaluation.',
    links: {}, selected: true,
  },
  {
    title: 'Standard vs. Modular Sampling: Best Practices for Reliable LLM Unlearning',
    authors: ['Praveen Bushipaka', 'Lucia Passaro', 'Tommaso Cucinotta'],
    venue: 'WIPE-OUT Workshop at ECML PKDD 2025 · Springer CCIS, vol. 2840 (2026)',
    year: 2025,
    citation: `@incollection{bushipaka2026standard,
  title={Standard vs. Modular Sampling: Best Practices for Reliable LLM Unlearning},
  author={Bushipaka, Praveen and Passaro, Lucia and Cucinotta, Tommaso},
  booktitle={Machine Learning and Principles and Practice of Knowledge Discovery in Databases},
  editor={Koprinska, Irena and Mendes-Moreira, João and Branco, Paula},
  series={Communications in Computer and Information Science},
  volume={2840},
  publisher={Springer},
  address={Cham},
  year={2026},
  doi={10.1007/978-3-032-19099-4_43},
  url={https://doi.org/10.1007/978-3-032-19099-4_43}
}`,
    links: { paper: 'https://doi.org/10.1007/978-3-032-19099-4_43' }, selected: true,
  },
  {
    title: 'Embracing Diversity: A Multi-Perspective Approach with Soft Labels',
    authors: ['Benedetto Muscato', 'Praveen Bushipaka', 'Gizem Gezici', 'Lucia PASS Aro', 'Fosca Giannotti', 'Tommaso Cucinotta'],
    venue: 'HHAI 2025: Proceedings of the 4th International Conference on Hybrid Human-Artificial Intelligence',
    year: 2025, pages: '370–383',
    citation: `@inproceedings{muscato2025embracing,
  title={Embracing Diversity: A Multi-Perspective Approach with Soft Labels},
  author={Muscato, Benedetto and Bushipaka, Praveen and Gezici, Gizem and Aro, Lucia PASS and Giannotti, Fosca and Cucinotta, Tommaso},
  booktitle={HHAI 2025: Proceedings of the 4th International Conference on Hybrid Human-Artificial Intelligence},
  pages={370--383},
  year={2025},
  doi={10.3233/FAIA250654},
  url={https://journals.sagepub.com/doi/10.3233/FAIA250654},
  organization={SAGE Publications 1 Oliver's Yard, 55 City Road, London, EC1Y 1SP}
}`,
    links: { paper: 'https://journals.sagepub.com/doi/10.3233/FAIA250654' }, selected: true,
  },
  {
    title: 'A Novel Multi-Step Prompt Approach for LLM-based Q&As on Banking Supervisory Regulation',
    authors: ['Daniele Licari', 'Canio Benedetto', 'Praveen Bushipaka', 'Alessandro De Gregorio', 'Marco De Leonardis', 'Tommaso Cucinotta'],
    venue: 'Proceedings of the Tenth Italian Conference on Computational Linguistics (CLiC-it 2024)',
    year: 2024, pages: '496–509',
    description: 'A multi-step prompt construction method for more precise and informative answers about banking supervisory reporting obligations.',
    citation: `@inproceedings{licari-etal-2024-novel,
  title={A Novel Multi-Step Prompt Approach for {LLM}-based {Q}{&}As on Banking Supervisory Regulation},
  author={Licari, Daniele and Benedetto, Canio and Bushipaka, Praveen and De Gregorio, Alessandro and De Leonardis, Marco and Cucinotta, Tommaso},
  editor={Dell'Orletta, Felice and Lenci, Alessandro and Montemagni, Simonetta and Sprugnoli, Rachele},
  booktitle={Proceedings of the Tenth Italian Conference on Computational Linguistics (CLiC-it 2024)},
  month={December},
  year={2024},
  address={Pisa, Italy},
  publisher={CEUR Workshop Proceedings},
  url={https://aclanthology.org/2024.clicit-1.59/},
  pages={496--509},
  isbn={979-12-210-7060-6}
}`,
    links: { paper: 'https://aclanthology.org/2024.clicit-1.59/' }, selected: true,
  },
  {
    title: 'Legal Holding Extraction from Italian Case Documents using Italian-LEGAL-BERT Text Summarization',
    authors: ['Daniele Licari', 'Praveen Bushipaka', 'Gabriele Marino', 'Giovanni Comandé', 'Tommaso Cucinotta'],
    venue: 'Proceedings of the Nineteenth International Conference on Artificial Intelligence and Law (ICAIL ’23)',
    year: 2023, pages: '148–156',
    citation: `@inproceedings{10.1145/3594536.3595177,
  author={Licari, Daniele and Bushipaka, Praveen and Marino, Gabriele and Comand{\\'e}, Giovanni and Cucinotta, Tommaso},
  title={Legal Holding Extraction from Italian Case Documents using Italian-LEGAL-BERT Text Summarization},
  year={2023},
  isbn={9798400701979},
  publisher={Association for Computing Machinery},
  address={New York, NY, USA},
  url={https://doi.org/10.1145/3594536.3595177},
  doi={10.1145/3594536.3595177},
  booktitle={Proceedings of the Nineteenth International Conference on Artificial Intelligence and Law},
  pages={148--156},
  numpages={9},
  keywords={Benchmark Dataset, Extractive Text Summarization, Holding Extraction, Italian-LEGAL-BERT},
  location={Braga, Portugal},
  series={ICAIL '23}
}`,
    links: { paper: 'https://doi.org/10.1145/3594536.3595177' }, selected: true,
  },
];

export const selectedPublications = publications.filter((publication) => publication.selected);
