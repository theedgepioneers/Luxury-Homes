export type CaseStudy = {
  slug: string
  name: string
  location: string
  scope: string
  narrative: string
  stat: { label: string; value: string }
  image?: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'cliffside-pavilion',
    name: 'Cliffside Pavilion',
    location: 'Malibu, California',
    scope: 'New Custom Build',
    narrative:
      'A single-level glass pavilion cantilevered over the Pacific bluff, engineered to dissolve the line between interior and horizon. Board-formed concrete and rift-sawn oak ground the lightness of the structure.',
    stat: { label: 'Living Area', value: '11,400 sq ft' },
    image: '/images/case-cliffside.png',
    featured: true,
  },
  {
    slug: 'aspen-timber-house',
    name: 'Aspen Timber House',
    location: 'Aspen, Colorado',
    scope: 'New Custom Build',
    narrative:
      'A contemporary mountain residence in reclaimed timber and blackened steel, sited to capture Ajax Mountain views while sheltering an interior courtyard from alpine wind.',
    stat: { label: 'Build Duration', value: '34 months' },
    image: '/images/case-aspen.png',
    featured: true,
  },
  {
    slug: 'greenwich-georgian',
    name: 'Greenwich Georgian',
    location: 'Greenwich, Connecticut',
    scope: 'Whole-Home Transformation',
    narrative:
      'A meticulous reimagining of a 1920s Georgian estate, preserving its formal proportions while introducing a glass garden wing and a subterranean wellness level.',
    stat: { label: 'Investment Tier', value: '$24M+' },
    image: '/images/case-greenwich.png',
    featured: true,
  },
  {
    slug: 'dune-residence',
    name: 'Dune Residence',
    location: 'Malibu, California',
    scope: 'New Custom Build',
    narrative:
      'A weathered-cedar beach house composed as a sequence of gabled volumes, each framing a different relationship to the surf, the dunes, and the evening light.',
    stat: { label: 'Living Area', value: '8,200 sq ft' },
    image: '/images/case-dune.png',
  },
  {
    slug: 'highland-retreat',
    name: 'Highland Retreat',
    location: 'Aspen, Colorado',
    scope: 'New Custom Build',
    narrative:
      'A ski-in residence carved into the hillside, with a stone base anchoring upper volumes of glass and bronze. Radiant terraces extend the living space into the snow.',
    stat: { label: 'Elevation', value: '8,900 ft' },
    image: '/images/case-highland.png',
  },
  {
    slug: 'orchard-estate',
    name: 'Orchard Estate',
    location: 'Greenwich, Connecticut',
    scope: 'Whole-Home Transformation',
    narrative:
      'A historic farmhouse expanded into a connected family compound, with restored fieldstone, a glass conservatory, and an underground gallery for a private art collection.',
    stat: { label: 'Acreage', value: '14 acres' },
    image: '/images/case-orchard.png',
  },
  {
    slug: 'canyon-house',
    name: 'Canyon House',
    location: 'Malibu, California',
    scope: 'New Custom Build',
    narrative:
      'A drought-resilient residence terraced into a coastal canyon, with rammed-earth walls, a living roof, and a courtyard pool that mirrors the ridgeline.',
    stat: { label: 'Build Duration', value: '29 months' },
  },
  {
    slug: 'lakeside-modern',
    name: 'Lakeside Modern',
    location: 'Greenwich, Connecticut',
    scope: 'New Custom Build',
    narrative:
      'A horizontal composition of stone and glass set along a private shoreline, organized around a central water court that brings reflected light deep into the plan.',
    stat: { label: 'Living Area', value: '9,600 sq ft' },
  },
  {
    slug: 'summit-chalet',
    name: 'Summit Chalet',
    location: 'Aspen, Colorado',
    scope: 'Whole-Home Transformation',
    narrative:
      'A dated 1980s chalet stripped to its frame and rebuilt as a warm, light-filled retreat with hand-finished plaster, walnut joinery, and a re-engineered great room.',
    stat: { label: 'Investment Tier', value: '$12M+' },
  },
  {
    slug: 'meadow-pavilions',
    name: 'Meadow Pavilions',
    location: 'Greenwich, Connecticut',
    scope: 'New Custom Build',
    narrative:
      'A family residence composed as linked low pavilions around a central meadow, prioritizing privacy, daylight, and a near-passive energy envelope.',
    stat: { label: 'Living Area', value: '13,100 sq ft' },
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)
