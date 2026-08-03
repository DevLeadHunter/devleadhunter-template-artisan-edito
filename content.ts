import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent used by the `.playground` to preview the template in isolation.
 * Not shipped to production — edit it freely while designing your template.
 *
 * Exemple volontairement NON-plombier (un menuisier-agenceur) couvrant les clés du contrat
 * `SiteContent`, afin de prouver le rendu de chaque section de la template multi-métier.
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Atelier Vallée Bois',
  phone: '04 79 00 42 18',
  email: 'contact@atelier-vallee-bois.fr',
  city: 'Chambéry',
  area: 'Savoie',
  subtitle:
    'Menuiserie, agencement et pose sur mesure à Chambéry — un atelier où le bois est travaillé avec patience et livré fini, prêt à durer.',

  heroBadge: 'Menuisier-agenceur',
  heroPoints: ['Devis gratuit', 'Sur mesure', 'Pose comprise'],
  ctaCallLabel: 'Appeler l’atelier',
  ctaQuoteLabel: 'Demander un devis',

  trustItems: [
    { value: '20 ans', label: 'De métier' },
    { value: 'Sur mesure', label: 'Fabriqué à l’atelier' },
    { value: 'Devis 0 €', label: 'Sans engagement' },
    { value: 'Local', label: 'Artisan de Savoie' },
  ],

  servicesHeading: 'Nos savoir-faire',
  services: [
    {
      title: 'Menuiserie sur mesure',
      description:
        'Placards, dressings, bibliothèques et meubles pensés pour votre intérieur et fabriqués à l’atelier.',
    },
    {
      title: 'Agencement intérieur',
      description:
        'Cuisines, plans de travail, verrières et rangements : un agencement au millimètre, posé proprement.',
    },
    {
      title: 'Portes & fenêtres bois',
      description:
        'Fabrication et pose de portes, fenêtres et volets bois, du contemporain à la rénovation à l’ancienne.',
    },
    {
      title: 'Escaliers & parquet',
      description:
        'Escaliers bois, pose et rénovation de parquet massif, ponçage et finition huilée ou vitrifiée.',
    },
    {
      title: 'Terrasses & bardage',
      description:
        'Terrasses, pergolas et bardages bois pour prolonger la maison vers l’extérieur, durablement.',
    },
    {
      title: 'Rénovation & restauration',
      description:
        'Remise en état de meubles, portes anciennes et boiseries — on répare plutôt que de jeter.',
    },
  ],

  aboutHeading: 'L’atelier',
  about:
    'Atelier Vallée Bois, c’est un menuisier-agenceur installé à Chambéry qui travaille le bois massif comme les panneaux techniques, à l’ancienne et avec les machines d’aujourd’hui.\nChaque projet commence par une visite et un croquis : on prend les mesures, on choisit ensemble l’essence et les finitions, puis on fabrique à l’atelier avant de poser chez vous.\nDu petit meuble à l’agencement complet, la même exigence : des assemblages soignés, des finitions douces au toucher et un chantier laissé propre.',
  aboutImage:
    'https://images.unsplash.com/photo-1659930087003-2d64e33181f7?auto=format&fit=crop&w=1200&q=80',

  heroImage:
    'https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?auto=format&fit=crop&w=1600&q=80',

  galleryHeading: 'L’atelier & nos réalisations',
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1547609434-b732edfee020?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sciage à l’établi',
    },
    {
      url: 'https://images.unsplash.com/photo-1679797850019-3d0d8659a695?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ajustage d’une pièce de bois',
    },
    {
      url: 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Le mur d’outils de l’atelier',
    },
    {
      url: 'https://images.unsplash.com/photo-1499744349893-0c6de53516e6?auto=format&fit=crop&w=1200&q=80',
      alt: 'L’atelier et son établi',
    },
    {
      url: 'https://images.unsplash.com/photo-1453806839674-d1a9087ca1ed?auto=format&fit=crop&w=1200&q=80',
      alt: 'Outillage traditionnel',
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pose sur chantier',
    },
  ],

  reviewsHeading: 'Ce que disent nos clients',
  reviews: [
    {
      author: 'Nadia B.',
      rating: 5,
      text: 'Un dressing sur mesure impeccable, posé au millimètre. Conseils précieux sur les finitions, je recommande vivement.',
    },
    {
      author: 'Christophe M.',
      rating: 5,
      text: 'Ils ont restauré une porte ancienne que tout le monde voulait remplacer. Travail d’orfèvre et prix honnête.',
    },
    {
      author: 'Sylvie R.',
      rating: 4,
      text: 'Belle bibliothèque en chêne, livrée dans les délais. Un léger ajustement à la pose, réglé aussitôt.',
    },
    {
      author: 'Karim D.',
      rating: 5,
      text: 'Cuisine agencée du sol au plafond, aucun espace perdu. Un artisan qui écoute et qui tient parole.',
    },
  ],

  faqHeading: 'Vos questions',
  faq: [
    {
      question: 'Travaillez-vous uniquement sur mesure ?',
      answer:
        'Oui, chaque réalisation est dessinée et fabriquée pour votre espace. C’est ce qui garantit un rendu net et un rangement optimisé.',
    },
    {
      question: 'Quelles essences de bois proposez-vous ?',
      answer:
        'Chêne, hêtre, frêne, pin ou panneaux plaqués selon l’usage et le budget. On vous conseille l’essence adaptée à chaque pièce.',
    },
    {
      question: 'Assurez-vous aussi la pose ?',
      answer:
        'Oui, la fabrication comme la pose sont réalisées par l’atelier. Vous avez un seul interlocuteur, du devis à la finition.',
    },
    {
      question: 'Le devis est-il gratuit ?',
      answer:
        'Oui, la visite, les mesures et le devis sont gratuits et sans engagement de votre part.',
    },
  ],

  contactHeading: 'Parlons de votre projet',
  openingHours: [
    { day: 'Lundi – Vendredi', hours: '8h00 – 12h00 · 14h00 – 18h30' },
    { day: 'Samedi', hours: '9h00 – 12h00 sur rendez-vous' },
    { day: 'Dimanche', hours: 'Fermé' },
  ],

  social: [
    { network: 'facebook', url: 'https://facebook.com/atelier-vallee-bois' },
    { network: 'instagram', url: 'https://instagram.com/atelier_vallee_bois' },
  ],

  palette: {
    primary: '#1b1813',
    secondary: '#f6f3ec',
    accent: '#c8781f',
  },
}
