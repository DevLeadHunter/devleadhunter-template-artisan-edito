/**
 * Types + construction du contenu de la template 'artisan-edito' (« Artisan Édito »).
 *
 * La template est une couche (layer) Nuxt autonome : elle ne connaît rien de Storyblok,
 * du tunnel ou de PostHog. Elle rend un `SiteContent` typé (les données variables réelles
 * du prospect) et POSSÈDE sa propre copie éditoriale/boilerplate MULTI-MÉTIER (titres de
 * sections, badge hero, libellés CTA, repères de confiance, services et FAQ par défaut…)
 * sous forme de valeurs par défaut — c'est du design, pas de la donnée client.
 *
 * `buildArtisanEditoContent` fusionne les deux : données variables issues de `SiteContent`,
 * boilerplate issu des défauts ci-dessous, pour produire la structure typée que les
 * sections attendent. Chaque section consomme sa clé `content.X` avec fallback sur un défaut
 * de la template (copie éditoriale) OU se masque entièrement quand la donnée client manque
 * (galerie, avant/après, avis, à-propos, photos, horaires).
 */
import type { SiteContent } from '~/types/SiteContent'

/** Palette client résolue. La DA reste noir & blanc : seul l'accent ambre est teintable. */
export interface EditoTheme {
  /** Couleur primaire éventuelle (conservée pour cohérence, non appliquée aux surfaces). */
  primary: string
  /** Couleur secondaire éventuelle (conservée pour cohérence). */
  secondary: string
  /** Accent « annotation » — teinte les marques ambre (défaut miel `#e8a33c`). */
  accent: string
}

/** Accent ambre miel par défaut de la landing DevLeadHunter. */
export const defaultAccent: string = '#e8a33c'

/** Une ancre de navigation du header (masquée quand sa section est absente). */
export interface EditoNavItem {
  label: string
  href: string
}

export interface EditoTrustItem {
  value: string
  label: string
}

export interface EditoService {
  title: string
  description: string
}

export interface EditoGalleryImage {
  url: string
  alt: string
}

export interface EditoBeforeAfterPair {
  before: string
  after: string
  label: string
}

export interface EditoReview {
  author: string
  rating: number
  text: string
}

export interface EditoFaqItem {
  question: string
  answer: string
}

export interface EditoOpeningHours {
  day: string
  hours: string
}

export interface EditoSocialLink {
  /** Réseau normalisé (facebook, instagram, linkedin, tiktok, youtube, twitter). */
  network: string
  /** Libellé lisible du réseau. */
  label: string
  /** URL complète du profil. */
  url: string
}

export interface EditoHeroBlock {
  badge: string
  /** Nom de l'entreprise (titre principal, en Fraunces). */
  businessName: string
  /** Amorce éditoriale (Fraunces) précédant le mot en italique. */
  leadStart: string
  /** Mot d'accent rendu en italique dans l'amorce éditoriale. */
  leadAccent: string
  subtitle: string
  points: string[]
  ctaCallLabel: string
  ctaQuoteLabel: string
  phone: string
  city: string
  image: string
}

export interface EditoTrustBlock {
  items: EditoTrustItem[]
}

export interface EditoServicesBlock {
  heading: string
  lede: string
  items: EditoService[]
}

export interface EditoAboutBlock {
  heading: string
  text: string
  image: string
}

export interface EditoGalleryBlock {
  heading: string
  items: EditoGalleryImage[]
}

export interface EditoBeforeAfterBlock {
  heading: string
  pairs: EditoBeforeAfterPair[]
}

export interface EditoReviewsBlock {
  heading: string
  items: EditoReview[]
}

export interface EditoFaqBlock {
  heading: string
  items: EditoFaqItem[]
}

export interface EditoContactBlock {
  heading: string
  lede: string
  phone: string
  email: string
  city: string
  area: string
  ctaCallLabel: string
  openingHours: EditoOpeningHours[]
}

/** Contenu complet de la page, prêt à être rendu par les sections. */
export interface ArtisanEditoPageContent {
  theme: EditoTheme
  businessName: string
  phone: string
  city: string
  hero: EditoHeroBlock
  trust: EditoTrustBlock
  services: EditoServicesBlock
  about: EditoAboutBlock
  gallery: EditoGalleryBlock
  beforeAfter: EditoBeforeAfterBlock
  reviews: EditoReviewsBlock
  faq: EditoFaqBlock
  contact: EditoContactBlock
  social: EditoSocialLink[]
}

/**
 * Copie éditoriale/boilerplate MULTI-MÉTIER possédée par la template (design, pas donnée
 * client). Générique : passe-partout pour plombier, électricien, garagiste, menuisier,
 * paysagiste, coiffeur… Ces libellés reproduisent l'intention d'une page entièrement remplie
 * afin que le rendu soit soigné même quand `SiteContent` ne fournit que les données variables.
 */
export const editoDefaults = {
  heroBadge: 'Artisan à votre service',
  heroLeadStart: 'Le travail bien fait,',
  heroLeadAccent: 'sans mauvaise surprise.',
  heroSubtitle:
    'Un savoir-faire local, un travail soigné et des délais tenus — du premier devis à la dernière finition.',

  ctaCallLabel: 'Appeler',
  ctaQuoteLabel: 'Demander un devis',

  heroPoints: ['Devis gratuit', 'Intervention soignée', 'Travail garanti'] as string[],

  trustItems: [
    { value: '7j/7', label: 'Disponibilité' },
    { value: 'Devis 0 €', label: 'Sans engagement' },
    { value: 'Local', label: 'Près de chez vous' },
    { value: 'Garantie', label: 'Travail assuré' },
  ] as EditoTrustItem[],

  servicesHeading: 'Nos prestations',
  servicesLede:
    'Un seul interlocuteur, du conseil à la finition — chaque intervention menée avec le même soin.',
  services: [
    {
      title: 'Devis & conseil',
      description:
        'Un rendez-vous, un état des lieux honnête et un devis clair, gratuit et sans engagement.',
    },
    {
      title: 'Intervention & pose',
      description:
        'Un travail réalisé dans les règles de l’art, avec des matériaux de qualité et un chantier tenu propre.',
    },
    {
      title: 'Dépannage & entretien',
      description:
        'Une intervention rapide en cas d’imprévu et un suivi régulier pour garder vos installations en bon état.',
    },
    {
      title: 'Rénovation & finitions',
      description:
        'De la petite retouche au chantier complet, des finitions soignées jusque dans le moindre détail.',
    },
  ] as EditoService[],

  galleryHeading: 'Nos réalisations',
  beforeAfterHeading: 'Avant / après',

  aboutHeading: 'À propos',

  reviewsHeading: 'Ils nous font confiance',

  faqHeading: 'Questions fréquentes',
  faq: [
    {
      question: 'Le devis est-il vraiment gratuit ?',
      answer:
        'Oui. Le déplacement pour évaluer votre besoin et l’établissement du devis sont gratuits et sans engagement de votre part.',
    },
    {
      question: 'Dans quels secteurs intervenez-vous ?',
      answer:
        'Nous intervenons dans votre ville et ses alentours. Un doute sur votre commune ? Un simple appel suffit à vérifier.',
    },
    {
      question: 'Sous quel délai pouvez-vous intervenir ?',
      answer:
        'Selon la nature de la demande, nous nous efforçons d’intervenir au plus vite — souvent sous quelques jours, et en urgence quand la situation l’exige.',
    },
    {
      question: 'Comment se passe le paiement ?',
      answer:
        'Le règlement se fait une fois le travail terminé et vérifié ensemble. Plusieurs moyens de paiement sont acceptés.',
    },
  ] as EditoFaqItem[],

  contactHeading: 'Parlons de votre projet',
  contactLede: 'Un besoin, une question, un imprévu ? Réponse rapide et devis gratuit.',

  images: {
    hero: 'https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?auto=format&fit=crop&w=1600&q=80',
    about:
      'https://images.unsplash.com/photo-1659930087003-2d64e33181f7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1547609434-b732edfee020?auto=format&fit=crop&w=1200&q=80',
        alt: 'Le geste du métier',
      },
      {
        url: 'https://images.unsplash.com/photo-1679797850019-3d0d8659a695?auto=format&fit=crop&w=1200&q=80',
        alt: 'Travail de précision',
      },
      {
        url: 'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?auto=format&fit=crop&w=1200&q=80',
        alt: 'L’établi et les outils',
      },
      {
        url: 'https://images.unsplash.com/photo-1499744349893-0c6de53516e6?auto=format&fit=crop&w=1200&q=80',
        alt: 'L’atelier',
      },
      {
        url: 'https://images.unsplash.com/photo-1453806839674-d1a9087ca1ed?auto=format&fit=crop&w=1200&q=80',
        alt: 'Outillage de l’artisan',
      },
      {
        url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Chantier en cours',
      },
    ] as EditoGalleryImage[],
  },
} as const

/**
 * Style inline portant le délai d'entrée d'un reveal au scroll (staggered).
 * @param delayMs - Délai en millisecondes.
 * @returns Un objet de style avec la variable CSS `--edito-reveal-delay`.
 */
export function editoRevealDelay(delayMs: number): Record<string, string> {
  return { '--edito-reveal-delay': `${delayMs}ms` }
}

/**
 * Retourne le texte éditorial du contenu s'il est non vide, sinon le défaut de la template.
 * @param value - Texte éditorial issu de `SiteContent` (potentiellement absent).
 * @param templateDefault - Copie par défaut possédée par la template.
 * @returns Le texte à afficher.
 */
function resolveEditorialText(value: string | undefined, templateDefault: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : templateDefault
}

/**
 * Normalise les services issus de `SiteContent` (filtre les entrées vides).
 * @param services - Services bruts du prospect (optionnels).
 * @returns Les services normalisés, ou un tableau vide.
 */
function normalizeServices(services: SiteContent['services']): EditoService[] {
  if (!Array.isArray(services)) {
    return []
  }
  return services
    .map((service): EditoService => ({
      title: service.title ?? '',
      description: service.description ?? '',
    }))
    .filter((service): boolean => service.title.length > 0)
}

/**
 * Normalise les images de galerie (ne garde que celles pourvues d'une URL).
 * @param gallery - Images brutes du prospect (optionnelles).
 * @returns Les images normalisées, ou un tableau vide.
 */
function normalizeGallery(gallery: SiteContent['gallery']): EditoGalleryImage[] {
  const fallback = (): EditoGalleryImage[] =>
    editoDefaults.images.gallery.map((item): EditoGalleryImage => ({ ...item }))
  if (!Array.isArray(gallery)) {
    return fallback()
  }
  const images: EditoGalleryImage[] = gallery
    .filter((image): boolean => typeof image.url === 'string' && image.url.length > 0)
    .map((image): EditoGalleryImage => ({ url: image.url ?? '', alt: image.alt ?? '' }))
  return images.length > 0 ? images : fallback()
}

/**
 * Normalise les paires avant/après (les deux photos doivent être présentes).
 * @param pairs - Paires brutes du prospect (optionnelles).
 * @returns Les paires normalisées, ou un tableau vide.
 */
function normalizeBeforeAfter(pairs: SiteContent['beforeAfter']): EditoBeforeAfterPair[] {
  if (!Array.isArray(pairs)) {
    return []
  }
  return pairs
    .filter(
      (pair): boolean =>
        typeof pair.before === 'string' &&
        pair.before.length > 0 &&
        typeof pair.after === 'string' &&
        pair.after.length > 0,
    )
    .map((pair): EditoBeforeAfterPair => ({
      before: pair.before ?? '',
      after: pair.after ?? '',
      label: pair.label ?? '',
    }))
}

/**
 * Normalise les avis (ne garde que ceux avec un texte, borne la note à 0–5).
 * @param reviews - Avis bruts du prospect (optionnels).
 * @returns Les avis normalisés, ou un tableau vide.
 */
function normalizeReviews(reviews: SiteContent['reviews']): EditoReview[] {
  if (!Array.isArray(reviews)) {
    return []
  }
  return reviews
    .filter((review): boolean => typeof review.text === 'string' && review.text.length > 0)
    .map((review): EditoReview => ({
      author: review.author ?? '',
      rating: Math.min(5, Math.max(0, Math.round(review.rating ?? 0))),
      text: review.text ?? '',
    }))
}

/**
 * Normalise les repères de confiance (au moins une valeur ou un libellé non vide).
 * @param trustItems - Repères bruts du prospect (optionnels).
 * @returns Les repères normalisés, ou un tableau vide.
 */
function normalizeTrustItems(trustItems: SiteContent['trustItems']): EditoTrustItem[] {
  if (!Array.isArray(trustItems)) {
    return []
  }
  return trustItems
    .map((item): EditoTrustItem => ({ value: item.value ?? '', label: item.label ?? '' }))
    .filter((item): boolean => item.value.length > 0 || item.label.length > 0)
}

/**
 * Normalise les horaires (au moins un jour ou une plage horaire non vide).
 * @param openingHours - Horaires bruts du prospect (optionnels).
 * @returns Les horaires normalisés, ou un tableau vide.
 */
function normalizeOpeningHours(openingHours: SiteContent['openingHours']): EditoOpeningHours[] {
  if (!Array.isArray(openingHours)) {
    return []
  }
  return openingHours
    .filter(
      (slot): boolean =>
        (typeof slot.day === 'string' && slot.day.length > 0) ||
        (typeof slot.hours === 'string' && slot.hours.length > 0),
    )
    .map((slot): EditoOpeningHours => ({ day: slot.day ?? '', hours: slot.hours ?? '' }))
}

/**
 * Normalise les points forts du hero (chaînes non vides).
 * @param points - Points bruts du prospect (optionnels).
 * @returns Les points normalisés, ou un tableau vide.
 */
function normalizeHeroPoints(points: SiteContent['heroPoints']): string[] {
  if (!Array.isArray(points)) {
    return []
  }
  return points
    .map((point): string => (typeof point === 'string' ? point.trim() : ''))
    .filter((point): boolean => point.length > 0)
}

/**
 * Construit le contenu de page entièrement typé à partir d'un `SiteContent`.
 *
 * Les champs VARIABLES (nom, téléphone, ville, sous-titre, à-propos, images, galerie,
 * avant/après, avis, FAQ, horaires, services, email) proviennent de `content` ; les champs
 * BOILERPLATE (badge hero, amorce éditoriale, repères de confiance, titres de sections,
 * services et FAQ par défaut) proviennent des défauts de la template. La copie ÉDITORIALE
 * éditable par le client (badge, libellés CTA, points hero, repères, titres de sections)
 * est reprise de `content` quand elle est non vide, sinon retombe sur les défauts. Les
 * services et la FAQ retombent sur des défauts passe-partout pour rester complets. Les
 * sections adossées à du contenu prospect (à-propos, galerie, avant/après, avis, horaires)
 * restent VIDES quand la clé manque — la racine les masque.
 * @param content - Données variables du prospect (toutes clés optionnelles).
 * @returns Le contenu typé prêt pour le rendu par les sections.
 */
/** Réseaux connus → libellés lisibles (accessibilité + title au survol). */
const SOCIAL_LABELS: Record<string, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  twitter: 'X (Twitter)',
}

/**
 * Normalise les liens réseaux sociaux (une URL non vide est requise).
 * @param social - Liens bruts du prospect (optionnels).
 * @returns Les liens normalisés avec un libellé lisible.
 */
function normalizeSocial(social: SiteContent['social']): EditoSocialLink[] {
  if (!Array.isArray(social)) {
    return []
  }
  return social
    .filter((link): boolean => typeof link.url === 'string' && link.url.trim().length > 0)
    .map((link): EditoSocialLink => {
      const network: string = (link.network ?? '').trim().toLowerCase()
      return {
        network,
        label: SOCIAL_LABELS[network] ?? (network ? network : 'Lien'),
        url: (link.url ?? '').trim(),
      }
    })
}

export function buildArtisanEditoContent(content: SiteContent): ArtisanEditoPageContent {
  const palette = content.palette ?? {}

  const businessName: string = content.businessName ?? ''
  const phone: string = content.phone ?? ''
  const email: string = content.email ?? ''
  const city: string = content.city ?? ''
  const area: string = content.area ?? ''

  const accent: string =
    typeof palette.accent === 'string' && palette.accent.trim().length > 0
      ? palette.accent
      : defaultAccent

  const heroPoints: string[] = normalizeHeroPoints(content.heroPoints)
  const trustFromContent: EditoTrustItem[] = normalizeTrustItems(content.trustItems)
  const servicesFromContent: EditoService[] = normalizeServices(content.services)

  const ctaCallLabel: string = resolveEditorialText(
    content.ctaCallLabel,
    editoDefaults.ctaCallLabel,
  )

  return {
    theme: {
      primary:
        typeof palette.primary === 'string' && palette.primary.length > 0 ? palette.primary : '',
      secondary:
        typeof palette.secondary === 'string' && palette.secondary.length > 0
          ? palette.secondary
          : '',
      accent,
    },
    businessName,
    phone,
    city,
    hero: {
      badge: resolveEditorialText(content.heroBadge, editoDefaults.heroBadge),
      businessName,
      leadStart: editoDefaults.heroLeadStart,
      leadAccent: editoDefaults.heroLeadAccent,
      subtitle: resolveEditorialText(content.subtitle, editoDefaults.heroSubtitle),
      points: heroPoints.length > 0 ? heroPoints : editoDefaults.heroPoints,
      ctaCallLabel,
      ctaQuoteLabel: resolveEditorialText(content.ctaQuoteLabel, editoDefaults.ctaQuoteLabel),
      phone,
      city,
      image: content.heroImage || editoDefaults.images.hero,
    },
    trust: {
      items: trustFromContent.length > 0 ? trustFromContent : editoDefaults.trustItems,
    },
    services: {
      heading: resolveEditorialText(content.servicesHeading, editoDefaults.servicesHeading),
      lede: editoDefaults.servicesLede,
      items: servicesFromContent.length > 0 ? servicesFromContent : editoDefaults.services,
    },
    about: {
      heading: resolveEditorialText(content.aboutHeading, editoDefaults.aboutHeading),
      text: content.about ?? '',
      image: content.aboutImage || editoDefaults.images.about,
    },
    gallery: {
      heading: resolveEditorialText(content.galleryHeading, editoDefaults.galleryHeading),
      items: normalizeGallery(content.gallery),
    },
    beforeAfter: {
      heading: editoDefaults.beforeAfterHeading,
      pairs: normalizeBeforeAfter(content.beforeAfter),
    },
    reviews: {
      heading: resolveEditorialText(content.reviewsHeading, editoDefaults.reviewsHeading),
      items: normalizeReviews(content.reviews),
    },
    faq: {
      heading: resolveEditorialText(content.faqHeading, editoDefaults.faqHeading),
      items: normalizeFaq(content.faq),
    },
    contact: {
      heading: resolveEditorialText(content.contactHeading, editoDefaults.contactHeading),
      lede: editoDefaults.contactLede,
      phone,
      email,
      city,
      area,
      ctaCallLabel,
      openingHours: normalizeOpeningHours(content.openingHours),
    },
    social: normalizeSocial(content.social),
  }
}

/**
 * Normalise la FAQ issue de `SiteContent`, avec repli sur la FAQ passe-partout par défaut.
 * @param faq - Entrées brutes du prospect (optionnelles).
 * @returns Les entrées normalisées, ou la FAQ par défaut si le client n'en fournit pas.
 */
function normalizeFaq(faq: SiteContent['faq']): EditoFaqItem[] {
  const fromContent: EditoFaqItem[] = Array.isArray(faq)
    ? faq
        .filter((item): boolean => typeof item.question === 'string' && item.question.length > 0)
        .map((item): EditoFaqItem => ({ question: item.question ?? '', answer: item.answer ?? '' }))
    : []
  return fromContent.length > 0 ? fromContent : editoDefaults.faq
}
