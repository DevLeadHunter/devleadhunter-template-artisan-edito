import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent used by the `.playground` to preview the template in isolation.
 * Not shipped to production — edit it freely while designing your template.
 *
 * Exemple volontairement NON-plombier (un garagiste) couvrant TOUTES les clés du contrat
 * `SiteContent`, afin de prouver le rendu de chaque section de la template multi-métier.
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Garage Vallée Auto',
  phone: '04 79 00 42 18',
  email: 'contact@vallee-auto.fr',
  city: 'Chambéry',
  area: 'Savoie',
  subtitle:
    'Entretien, réparation et diagnostic toutes marques — un atelier familial où l’on vous explique ce qu’on fait, et pourquoi.',

  heroBadge: 'Mécanicien de confiance',
  heroPoints: ['Diagnostic offert', 'Devis sous 24h', 'Toutes marques'],
  ctaCallLabel: 'Appeler le garage',
  ctaQuoteLabel: 'Demander un devis',

  trustItems: [
    { value: '25 ans', label: 'D’expérience' },
    { value: 'Toutes marques', label: 'Essence & diesel' },
    { value: 'Devis 24h', label: 'Réponse rapide' },
    { value: 'Agréé', label: 'Toutes assurances' },
  ],

  servicesHeading: 'Nos services auto',
  services: [
    {
      title: 'Entretien & révision',
      description:
        'Vidange, filtres, courroies, freins : la révision complète pour rouler l’esprit tranquille, carnet à l’appui.',
    },
    {
      title: 'Freinage & pneumatiques',
      description:
        'Plaquettes, disques, montage et équilibrage de pneus toutes dimensions, avec contrôle de la géométrie.',
    },
    {
      title: 'Diagnostic électronique',
      description:
        'Voyant allumé ? Lecture de la valise multimarque pour identifier la panne avant de toucher au moindre boulon.',
    },
    {
      title: 'Distribution & embrayage',
      description:
        'Remplacement de la courroie ou de la chaîne de distribution et de l’embrayage, dans les règles du constructeur.',
    },
    {
      title: 'Climatisation',
      description:
        'Recharge, désinfection et recherche de fuite pour un air sain et une clim efficace toute l’année.',
    },
    {
      title: 'Pré-contrôle technique',
      description:
        'On vérifie les points sensibles avant le passage au contrôle et on corrige ce qui doit l’être.',
    },
  ],

  aboutHeading: 'Le garage',
  about:
    'Garage Vallée Auto, c’est d’abord une histoire de famille : trois générations de mécaniciens installés à Chambéry, qui réparent les voitures du quartier depuis plus de vingt-cinq ans.\nIci, pas de jargon ni de facture qui gonfle en douce. On vous montre les pièces usées, on explique la panne, et on ne remplace que ce qui doit l’être.\nToutes marques, essence comme diesel, du petit entretien au gros chantier mécanique — avec la même exigence de travail bien fait.',
  aboutImage: 'https://picsum.photos/seed/vallee-auto-atelier/900/1100',

  heroImage: 'https://picsum.photos/seed/vallee-auto-hero/1000/1250',

  galleryHeading: 'L’atelier & nos chantiers',
  gallery: [
    {
      url: 'https://picsum.photos/seed/vallee-auto-g1/800/600',
      alt: 'Pont élévateur de l’atelier',
    },
    { url: 'https://picsum.photos/seed/vallee-auto-g2/800/600', alt: 'Montage de pneus neufs' },
    { url: 'https://picsum.photos/seed/vallee-auto-g3/800/600', alt: 'Diagnostic à la valise' },
    { url: 'https://picsum.photos/seed/vallee-auto-g4/800/600', alt: 'Réfection moteur' },
    { url: 'https://picsum.photos/seed/vallee-auto-g5/800/600', alt: 'Banc de géométrie' },
    { url: 'https://picsum.photos/seed/vallee-auto-g6/800/600', alt: 'Espace accueil client' },
  ],

  beforeAfter: [
    {
      before: 'https://picsum.photos/seed/vallee-auto-ba1-before/900/600',
      after: 'https://picsum.photos/seed/vallee-auto-ba1-after/900/600',
      label: 'Aile avant — débosselage & peinture',
    },
    {
      before: 'https://picsum.photos/seed/vallee-auto-ba2-before/900/600',
      after: 'https://picsum.photos/seed/vallee-auto-ba2-after/900/600',
      label: 'Optiques de phares — rénovation',
    },
  ],

  reviewsHeading: 'Ce que disent nos clients',
  reviews: [
    {
      author: 'Nadia B.',
      rating: 5,
      text: 'Diagnostic clair, devis respecté au centime près et voiture prête le jour même. On se sent en confiance.',
    },
    {
      author: 'Christophe M.',
      rating: 5,
      text: 'Ils m’ont montré la pièce usée et évité un changement inutile que le concessionnaire voulait me facturer. Honnêtes.',
    },
    {
      author: 'Sylvie R.',
      rating: 4,
      text: 'Accueil sympathique et travail soigné sur la distribution. Un léger retard mais prévenue à l’avance.',
    },
    {
      author: 'Karim D.',
      rating: 5,
      text: 'Mon garage depuis dix ans. Toujours de bon conseil, tarifs corrects et aucune mauvaise surprise.',
    },
  ],

  faqHeading: 'Vos questions',
  faq: [
    {
      question: 'Faut-il prendre rendez-vous ?',
      answer:
        'Pour l’entretien et les gros travaux, oui — cela nous permet de vous garantir un créneau. Pour un simple voyant ou un doute, passez, on regarde avec vous.',
    },
    {
      question: 'Réparez-vous toutes les marques ?',
      answer:
        'Oui, toutes marques françaises et étrangères, essence comme diesel. Nos outils de diagnostic sont multimarques.',
    },
    {
      question: 'Un véhicule de prêt est-il disponible ?',
      answer:
        'Nous disposons de quelques véhicules de courtoisie, à réserver à l’avance selon la durée de l’immobilisation.',
    },
    {
      question: 'Puis-je apporter mes propres pièces ?',
      answer:
        'C’est possible sur demande, mais la garantie ne couvre alors que la main-d’œuvre. On vous conseille au cas par cas.',
    },
  ],

  contactHeading: 'Prendre rendez-vous',
  openingHours: [
    { day: 'Lundi – Vendredi', hours: '8h00 – 12h00 · 14h00 – 18h30' },
    { day: 'Samedi', hours: '8h30 – 12h00' },
    { day: 'Dimanche', hours: 'Fermé' },
  ],

  social: [
    { network: 'facebook', url: 'https://facebook.com/vallee-auto' },
    { network: 'instagram', url: 'https://instagram.com/vallee_auto' },
  ],

  palette: {
    primary: '#1b1813',
    secondary: '#f6f3ec',
    accent: '#c8781f',
  },
}
