// Remplacez les données d’exemple ici. null = information non fournie, aucun faux lien.
export const portfolio = {
  name: 'Antoine Michel', title: 'Technicien informatique', location: 'Strasbourg, France',
  description: 'J’accompagne les utilisateurs et les entreprises dans leurs défis technologiques. Avec méthode, patience et un vrai sens du service.',
  about: { lead: 'Rendre l’informatique plus simple, plus fiable et plus accessible.', body: 'Spécialisé dans le support technique et la maintenance informatique, j’interviens sur le diagnostic, la configuration des équipements et la résolution des incidents. Mon fil conducteur : comprendre les besoins des utilisateurs et les accompagner au quotidien.' },
  contact: { email: null, phone: null, linkedin: null, github: null },
  values: [{ title: 'Comprendre avant d’agir', text: 'Écouter, analyser et remonter à la source du problème.', icon: '◎' }, { title: 'Transmettre avec patience', text: 'Expliquer simplement et accompagner les utilisateurs.', icon: '↗' }, { title: 'Continuer à apprendre', text: 'Rester curieux face aux évolutions de l’informatique.', icon: '✳' }],
  skills: [
    { title: 'Support & maintenance', icon: '↗', description: 'Remettre la technique au service du quotidien.', items: ['Dépannage informatique', 'Assistance technique', 'Maintenance matérielle et logicielle', 'Diagnostic des incidents'] },
    { title: 'Systèmes & réseaux', icon: '⌘', description: 'Connecter les équipements et les usages.', items: ['Configuration réseau', 'Installation de systèmes', 'Configuration des équipements'] },
    { title: 'Outils & environnements', icon: '▦', description: 'Comprendre et entretenir le parc informatique.', items: ['Matériel informatique', 'Gestion de parc informatique', 'Logiciels et environnements : à préciser'] },
    { title: 'Qualités humaines', icon: '✳', description: 'Le bon diagnostic commence par l’écoute.', items: ['Écoute des utilisateurs', 'Pédagogie', 'Résolution de problèmes', 'Apprentissage continu'] }
  ],
  experience: [
    { period: 'MARS 2017 — AUJOURD’HUI', title: 'Technicien informatique indépendant', company: 'Indépendant', tasks: ['Assistance technique et diagnostic des incidents.', 'Installation et configuration des équipements.', 'Maintenance informatique et accompagnement des utilisateurs.'] },
    { period: 'AVRIL 2013 — FÉVRIER 2017', title: 'Technicien informatique', company: 'LeBonChoix', tasks: ['Support et assistance auprès des utilisateurs.', 'Diagnostic et résolution des problèmes informatiques.', 'Maintenance des systèmes et aide à la prise en main.'] }
  ],
  education: [{ period: '2009 — 2010', title: 'Licence technologique informatique', school: 'Université de Strasbourg' }],
  projects: [
    { id: 'support', category: 'support', title: 'L’assistance, en toute simplicité.', subtitle: 'Support informatique', description: 'Exemple de fiche pour présenter une démarche d’assistance : prise en compte de la demande, diagnostic et accompagnement. À remplacer par un projet réel.', tags: ['Support', 'Assistance utilisateurs'], github: null, live: null, visual: 'support' },
    { id: 'reseau', category: 'reseau', title: 'Créer les bonnes connexions.', subtitle: 'Infrastructure réseau', description: 'Exemple de fiche pour documenter la configuration d’un réseau : contexte, schéma, équipements et vérifications. À remplacer par un projet réel.', tags: ['Réseau', 'Configuration'], github: null, live: null, visual: 'network' },
    { id: 'maintenance', category: 'maintenance', title: 'Comprendre. Puis réparer.', subtitle: 'Maintenance & diagnostic', description: 'Exemple de fiche pour expliquer un diagnostic matériel et les étapes d’une intervention de maintenance. À remplacer par un projet réel.', tags: ['Diagnostic', 'Maintenance'], github: null, live: null, visual: 'maintenance' }
  ],
  languages: ['Français', 'Anglais'], interests: [{ name: 'Drones', icon: '⌘' }, { name: 'Aviation', icon: '↗' }, { name: 'Danse', icon: '✳' }]
};
