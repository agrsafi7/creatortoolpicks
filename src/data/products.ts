/**
 * CreatorToolPicks - Central Product & Gear Catalog (2026)
 *
 * NOTE ON AFFILIATE LINKS:
 * Every external outbound link uses placeholder href "#" with a TODO comment marking
 * where the actual partner/affiliate URL will be inserted. No fake affiliate URLs are invented.
 */

export interface Product {
  id: string;
  name: string;
  type: 'software' | 'gear' | 'own_product';
  category: string;
  badge?: 'Top Pick' | 'Best Value' | 'Budget Pick' | 'Top Innovation' | 'Our Product';
  verdict: string;
  bestFor: string;
  pricing?: {
    primary: string;
    secondary?: string;
  };
  ctaText: string;
  ctaUrl: string; // Internal route or external placeholder '#'
  isExternal: boolean;
  affiliatePlaceholderNote: string;
  iconName: string;
}

export const PRODUCTS: Product[] = [
  // 1. Systeme.io
  {
    id: 'systeme-io',
    name: 'Systeme.io',
    type: 'software',
    category: 'Business Tools',
    badge: 'Top Pick',
    verdict: 'All-in-one funnels, email and course platform with a genuinely free plan.',
    bestFor: 'creators who want funnels, email and courses in one tool',
    pricing: {
      primary: 'Free forever ($0)',
      secondary: 'Paid from $17/mo',
    },
    ctaText: 'Read Review',
    ctaUrl: '/tools/systeme-io-review',
    isExternal: false,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for direct outbound conversions if needed',
    iconName: 'Layers',
  },
  // 2. ElevenLabs
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    type: 'software',
    category: 'AI Voice',
    badge: 'Best Value',
    verdict: 'Natural-sounding AI voiceovers for faceless narration.',
    bestFor: 'realistic voiceovers and voice cloning',
    // Strict rule: NO price
    ctaText: 'Visit Site',
    ctaUrl: '#', // TODO: Replace with real affiliate link for ElevenLabs
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for ElevenLabs',
    iconName: 'Mic',
  },
  // 3. Pictory
  {
    id: 'pictory',
    name: 'Pictory',
    type: 'software',
    category: 'AI Video',
    badge: 'Budget Pick',
    verdict: 'Turns scripts and articles into narrated videos fast.',
    bestFor: 'long-form faceless YouTube videos',
    // Strict rule: NO price
    ctaText: 'Visit Site',
    ctaUrl: '#', // TODO: Replace with real affiliate link for Pictory
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for Pictory',
    iconName: 'Video',
  },
  // 4. HeyGen
  {
    id: 'heygen',
    name: 'HeyGen',
    type: 'software',
    category: 'AI Video',
    badge: 'Top Innovation',
    verdict: 'AI avatars and video translation for on-camera-free content.',
    bestFor: 'avatar-led explainers',
    // Strict rule: NO price
    ctaText: 'Visit Site',
    ctaUrl: '#', // TODO: Replace with real affiliate link for HeyGen
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for HeyGen',
    iconName: 'Sparkles',
  },
  // 5. Hostinger
  {
    id: 'hostinger',
    name: 'Hostinger',
    type: 'software',
    category: 'Hosting',
    // Strict rule: no badge
    verdict: 'Affordable web hosting for creator sites and blogs.',
    bestFor: 'launching a creator website on a budget',
    // Strict rule: NO price
    ctaText: 'Visit Site',
    ctaUrl: '#', // TODO: Replace with real affiliate link for Hostinger
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for Hostinger',
    iconName: 'Server',
  },
  // 6. GetResponse
  {
    id: 'getresponse',
    name: 'GetResponse',
    type: 'software',
    category: 'Email Marketing',
    // Strict rule: no badge
    verdict: 'Email marketing with automation and landing pages.',
    bestFor: 'newsletters and autoresponder sequences',
    // Strict rule: NO price
    ctaText: 'Visit Site',
    ctaUrl: '#', // TODO: Replace with real affiliate link for GetResponse
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for GetResponse',
    iconName: 'Mail',
  },
  // 7. InVideo
  {
    id: 'invideo',
    name: 'InVideo',
    type: 'software',
    category: 'AI Video',
    // Strict rule: no badge
    verdict: 'Prompt-to-video generator for short-form and quick edits.',
    bestFor: 'Shorts/Reels and fast video drafts',
    // Strict rule: NO price
    ctaText: 'Visit Site',
    ctaUrl: '#', // TODO: Replace with real affiliate link for InVideo
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link for InVideo',
    iconName: 'Film',
  },

  // 8. Shure MV7+ microphone
  {
    id: 'shure-mv7-plus',
    name: 'Shure MV7+ microphone',
    type: 'gear',
    category: 'Studio Gear',
    // Strict rule: no badge
    verdict: 'Broadcast-style USB/XLR mic for clear narration.',
    bestFor: 'voiceover recordings with background noise suppression',
    // Strict rule: NO price
    ctaText: 'Check on Amazon',
    ctaUrl: '#', // TODO: Replace with real affiliate link (Amazon Associates) for Shure MV7+
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link (Amazon Associates) for Shure MV7+',
    iconName: 'Mic2',
  },
  // 9. Elgato Key Light Air
  {
    id: 'elgato-key-light-air',
    name: 'Elgato Key Light Air',
    type: 'gear',
    category: 'Studio Gear',
    // Strict rule: no badge
    verdict: 'Soft, adjustable key light for desk recording.',
    bestFor: 'even, diffuse desktop lighting without eye strain',
    // Strict rule: NO price
    ctaText: 'Check on Amazon',
    ctaUrl: '#', // TODO: Replace with real affiliate link (Amazon Associates) for Elgato Key Light Air
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link (Amazon Associates) for Elgato Key Light Air',
    iconName: 'Sun',
  },
  // 10. Ulanzi desktop tripod
  {
    id: 'ulanzi-desktop-tripod',
    name: 'Ulanzi desktop tripod',
    type: 'gear',
    category: 'Studio Gear',
    // Strict rule: no badge
    verdict: 'Compact tripod for overhead and desk shots.',
    bestFor: 'overhead product b-roll and desk b-roll capture',
    // Strict rule: NO price
    ctaText: 'Check on Amazon',
    ctaUrl: '#', // TODO: Replace with real affiliate link (Amazon Associates) for Ulanzi desktop tripod
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link (Amazon Associates) for Ulanzi desktop tripod',
    iconName: 'Maximize2',
  },
  // 11. Logitech Brio 4K webcam
  {
    id: 'logitech-brio-4k',
    name: 'Logitech Brio 4K webcam',
    type: 'gear',
    category: 'Studio Gear',
    // Strict rule: no badge
    verdict: 'Sharp 4K webcam for talking-head clips.',
    bestFor: 'crisp reference clips and high-resolution capture',
    // Strict rule: NO price
    ctaText: 'Check on Amazon',
    ctaUrl: '#', // TODO: Replace with real affiliate link (Amazon Associates) for Logitech Brio 4K
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link (Amazon Associates) for Logitech Brio 4K',
    iconName: 'Camera',
  },
  // 12. BenQ ScreenBar Halo desk lamp
  {
    id: 'benq-screenbar-halo',
    name: 'BenQ ScreenBar Halo desk lamp',
    type: 'gear',
    category: 'Studio Gear',
    // Strict rule: no badge
    verdict: 'Glare-free desk lighting for long editing sessions.',
    bestFor: 'screen-mounted illumination that saves desk space',
    // Strict rule: NO price
    ctaText: 'Check on Amazon',
    ctaUrl: '#', // TODO: Replace with real affiliate link (Amazon Associates) for BenQ ScreenBar Halo
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link (Amazon Associates) for BenQ ScreenBar Halo',
    iconName: 'Lightbulb',
  },
  // 13. Aluminum laptop stand
  {
    id: 'aluminum-laptop-stand',
    name: 'Aluminum laptop stand',
    type: 'gear',
    category: 'Studio Gear',
    // Strict rule: no badge
    verdict: 'Ergonomic stand for editing setups.',
    bestFor: 'elevating editing displays to eye level',
    // Strict rule: NO price
    ctaText: 'Check on Amazon',
    ctaUrl: '#', // TODO: Replace with real affiliate link (Amazon Associates) for Aluminum laptop stand
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real affiliate link (Amazon Associates) for Aluminum laptop stand',
    iconName: 'Monitor',
  },

  // 14. Faceless Digital Marketing Playbook (Own Product)
  {
    id: 'faceless-playbook',
    name: 'Faceless Digital Marketing Playbook',
    type: 'own_product',
    category: 'Playbooks & Ebooks',
    badge: 'Our Product',
    verdict: 'A digital marketing playbook for faceless content covering niche selection, content systems and monetization basics.',
    bestFor: 'faceless creators setting up structured content systems',
    pricing: {
      primary: '$37 (verified)',
    },
    ctaText: 'Get the Playbook',
    ctaUrl: '#', // TODO: Replace with real affiliate link / Gumroad checkout link for Faceless Digital Marketing Playbook
    isExternal: true,
    affiliatePlaceholderNote: '// TODO: Replace with real Gumroad link: https://gumroad.com/l/faceless-digital-marketing-playbook',
    iconName: 'BookOpen',
  },
];
