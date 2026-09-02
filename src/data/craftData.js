// Shailreet (शैलरीत) - Authentic Handmade Himalayan & Indian Traditional Crafts Data

export const CATEGORIES = [
  { id: 'all', name: 'All Crafts', hindi: 'सभी कलाकृतियां', icon: 'Sparkles', count: 12 },
  { id: 'dehra', name: 'Dehra Artwork', hindi: 'हस्तनिर्मित देहरा', icon: 'Crown', count: 3 },
  { id: 'birthday-boards', name: 'Birthday & Name Boards', hindi: 'जन्मदिन व नाम पट्टिका', icon: 'Cake', count: 2 },
  { id: 'customized-gifts', name: 'Customized Gifts', hindi: 'अनुकूलित उपहार', icon: 'Gift', count: 3 },
  { id: 'festive-decor', name: 'Festive Decor & Torans', hindi: 'उत्सव व तोरण सज्जा', icon: 'Sun', count: 3 },
  { id: 'traditional-art', name: 'Traditional Art & Lippan', hindi: 'पारंपरिक चित्रकला व लिप्पन', icon: 'Palette', count: 3 },
  { id: 'new-arrivals', name: 'New Arrivals', hindi: 'नवीन संग्रह', icon: 'Flame', count: 5 }
];

export const PRODUCTS = [
  {
    id: 'sr-001',
    name: 'Handcrafted Himachali Peacock Dehra Frame',
    hindiName: 'हस्तनिर्मित मयूर देहरा काष्ठ कला',
    slug: 'handcrafted-peacock-dehra-frame',
    category: 'dehra',
    categoryLabel: 'Dehra Artwork',
    price: 3499,
    originalPrice: 4299,
    discountPercent: 19,
    rating: 4.95,
    reviewsCount: 48,
    isBestseller: true,
    isNew: false,
    isCustomizable: true,
    customFieldLabel: 'Deity / Motif Choice or Inscribed Name',
    customFieldPlaceholder: 'e.g. Mayur / Radha Krishna / Family Name',
    inStock: true,
    leadTimeDays: '3-5 Days (Handmade to order)',
    images: [
      '/images/dehra-peacock.jpg',
      '/images/hero-banner.jpg',
      '/images/gift-packaging.jpg'
    ],
    shortDesc: 'Hand-carved cedar wooden jharokha arch Dehra featuring miniature peacock painting, brass bells, and pure wool tassels.',
    fullDesc: 'The Dehra is a sacred and auspicious traditional architectural art form of the Himalayan hills. Each piece is carved from seasoned wood by master artisans in Himachal Pradesh, adorned with hand-painted folk peacock motifs using natural mineral tones, and finished with tinkling brass temple bells and dyed woolen tassels.',
    materials: [
      'Seasoned Himalayan Cedar / Teak Wood Frame',
      'Hand-painted acrylic & mineral pigments',
      'Solid cast brass jingling bells',
      'Pure organic wool tassels & braided jute cord',
      'Non-toxic matte protective varnish'
    ],
    dimensions: '14" Height x 9.5" Width x 1.2" Depth (Plus 6" tassel length)',
    weight: '850 grams',
    artisanNote: 'Handcrafted by Master Sunita Devi & team in Kangra Valley, taking over 18 hours of detailed carving and painting.',
    features: [
      'Authentic Himalayan Dehra sacred arch silhouette',
      'Ready to hang with heavy-duty brass hook',
      'Tinkling auspicious brass temple bells',
      'Hand-signed by the artisan on the reverse',
      'Free eco-friendly gift packaging'
    ]
  },
  {
    id: 'sr-002',
    name: 'Personalized Baby Milestone & Birthday Board',
    hindiName: 'हस्तनिर्मित जन्मदिन व माइलस्टोन बोर्ड',
    slug: 'personalized-baby-birthday-milestone-board',
    category: 'birthday-boards',
    categoryLabel: 'Birthday & Name Boards',
    price: 2199,
    originalPrice: 2799,
    discountPercent: 21,
    rating: 4.98,
    reviewsCount: 62,
    isBestseller: true,
    isNew: true,
    isCustomizable: true,
    customFieldLabel: 'Baby Name & Age / Special Text',
    customFieldPlaceholder: 'e.g. Aarav - One Today / Myra 1st Birthday',
    inStock: true,
    leadTimeDays: '2-4 Days (Custom Handcrafted)',
    images: [
      '/images/birthday-board.jpg',
      '/images/gift-packaging.jpg',
      '/images/artisan-crafting.jpg'
    ],
    shortDesc: 'Rustic natural pine wood milestone board embellished with handmade pastel felt wool flowers, clay figurines, and custom calligraphy.',
    fullDesc: 'Make birthdays and milestones forever memorable with our signature Shailreet customized name board. Crafted on natural live-edge pine wood, each board is carefully customized with your child’s name in graceful calligraphy, decorated with handcrafted merino wool felt florals, clay stars, and dried botanicals.',
    materials: [
      'Sustainable Natural Pine Wood Plaque',
      'Handmade Pastel Wool Felt Florals',
      'Miniature polymer clay charms (elephant, star, clouds)',
      'Natural dried eucalyptus and baby’s breath sprigs',
      'Custom pyrography & ink lettering'
    ],
    dimensions: '12" Width x 8.5" Height x 0.8" Wood Thickness',
    weight: '520 grams',
    artisanNote: 'Every petal and felt flower is hand-shaped and stitched individually. A keepsake to cherish for decades.',
    features: [
      '100% Customized with your baby/child name & milestone',
      'Can be displayed on easel or hung on wall',
      'Smooth sanded baby-safe organic finish',
      'Custom color themes available upon request',
      'Loved by 400+ parents across India'
    ]
  },
  {
    id: 'sr-003',
    name: 'Traditional Terracotta & Wool Medallion Wall Hanging',
    hindiName: 'पारंपरिक मृत्तिका व ऊन वॉल हैंगिंग',
    slug: 'traditional-terracotta-wool-wall-hanging',
    category: 'festive-decor',
    categoryLabel: 'Festive Decor & Torans',
    price: 1899,
    originalPrice: 2399,
    discountPercent: 20,
    rating: 4.92,
    reviewsCount: 39,
    isBestseller: true,
    isNew: false,
    isCustomizable: false,
    inStock: true,
    leadTimeDays: '1-2 Days (Ready to Ship)',
    images: [
      '/images/wall-hanging.jpg',
      '/images/hero-banner.jpg',
      '/images/lippan-art.jpg'
    ],
    shortDesc: 'Triple tier hand-painted terracotta mandala discs with braided jute ropes, brass bells, and vibrant wool pom-poms.',
    fullDesc: 'Infuse earthy warmth and traditional auspicious charm into your living room, balcony, or pooja corner. This 3-tier wall hanging features hand-cast clay medallions painted with sacred lotus and mandala patterns in mustard ochre, forest teal, and deep maroon, flanked by woven ropes and jingling brass bells.',
    materials: [
      'Terracotta clay medallions',
      'Natural mineral matte paints',
      'Hand-twisted natural golden jute ropes',
      'Fluffy wool pom-poms in mustard, teal & crimson',
      'Polished brass chime bells'
    ],
    dimensions: '26" Total Hanging Length x 7" Width',
    weight: '680 grams',
    artisanNote: 'Symbolizes tranquility, prosperity, and harmony according to traditional Vastu guidelines.',
    features: [
      'Vibrant festive colors that brighten any room',
      'Produces gentle soothing bell chime in light breeze',
      'Durable weather-resistant indoor & covered outdoor use',
      'Eco-friendly plastic-free packaging'
    ]
  },
  {
    id: 'sr-004',
    name: 'Custom Carved Teak Wood Family Nameplate',
    hindiName: 'हस्तनिर्मित काष्ठ पारिवारिक नेमप्लेट',
    slug: 'custom-carved-teak-wood-nameplate',
    category: 'customized-gifts',
    categoryLabel: 'Customized Gifts',
    price: 2899,
    originalPrice: 3599,
    discountPercent: 19,
    rating: 4.96,
    reviewsCount: 54,
    isBestseller: true,
    isNew: false,
    isCustomizable: true,
    customFieldLabel: 'Family / Home Name to Inscribe',
    customFieldPlaceholder: 'e.g. The Sharma Niwas / Anand Villa / Dr. Rajesh & Neha',
    inStock: true,
    leadTimeDays: '3-5 Days (Handmade to order)',
    images: [
      '/images/nameplate.jpg',
      '/images/gift-packaging.jpg',
      '/images/artisan-crafting.jpg'
    ],
    shortDesc: 'Solid carved teak wood entrance nameplate with intricate floral border, hand-painted peacock feather, and hanging brass bells.',
    fullDesc: 'Make your home entrance memorable with an authentic hand-carved teak nameplate. Bordered with traditional floral relief scrollwork and finished with royal emerald green backdrop, shimmering gold calligraphy, and 6 hanging brass bells for positive entrance energy.',
    materials: [
      'Solid seasoned Teak wood with water-resistant coat',
      'Deep emerald green weatherproof base paint',
      '24K gold-leaf effect calligraphic lettering',
      'Hand-painted peacock feather with subtle metallic sheen',
      'Solid brass hanging bells & rear mounting brackets'
    ],
    dimensions: '16" Width x 9.5" Height x 1" Wood Depth',
    weight: '1.2 kg',
    artisanNote: 'Coated with UV and moisture-resistant outdoor lacquer to ensure longevity for years.',
    features: [
      'Customized with your exact family name or apartment number',
      'Heavy-duty concealed wall mounting brackets included',
      'Traditional handcrafted aesthetics that stand out from laser-cut plastic',
      'Bespoke heirloom gift for housewarmings and weddings'
    ]
  },
  {
    id: 'sr-005',
    name: 'Handcrafted Festive Marigold & Mirror Door Toran',
    hindiName: 'पारंपरिक गेंदा व दर्पण द्वार तोरण',
    slug: 'handcrafted-festive-marigold-door-toran',
    category: 'festive-decor',
    categoryLabel: 'Festive Decor & Torans',
    price: 1599,
    originalPrice: 1999,
    discountPercent: 20,
    rating: 4.91,
    reviewsCount: 31,
    isBestseller: false,
    isNew: true,
    isCustomizable: false,
    inStock: true,
    leadTimeDays: '1-2 Days (Ready to Ship)',
    images: [
      '/images/festive-toran.jpg',
      '/images/wall-hanging.jpg',
      '/images/hero-banner.jpg'
    ],
    shortDesc: 'Artisanal entrance bandhanwar featuring embroidered fabric mango leaves, marigold florets, wooden beads, and mirrors.',
    fullDesc: 'Welcome prosperity, auspiciousness, and festive joy into your home with our handcrafted royal entrance Toran. Combining rich embroidered mango leaf motifs, handcrafted fabric marigold blooms, glistening mirror roundels, and hand-carved wooden beads with brass bells.',
    materials: [
      'Embroidered raw silk & cotton fabric leaves',
      'Handcrafted woolen marigold flowers (never fade)',
      'Reflective glass mirror accents with zari piping',
      'Hand-turned wooden beads in amber tone',
      'Solid brass tinkling bells'
    ],
    dimensions: '38" Standard Door Width x 12" Drop Length',
    weight: '450 grams',
    artisanNote: 'Traditional Torans represent welcoming Devi Lakshmi and positive prana into the household.',
    features: [
      'Fits standard 3ft to 3.5ft entrance doorways seamlessly',
      'Side hanging loops for easy wall nail or command hook hanging',
      'Everlasting reusable craft — store and use across all festivals',
      'Adds instant festive warmth for Diwali, Pooja, and Griha Pravesh'
    ]
  },
  {
    id: 'sr-006',
    name: 'Framed Kangra Miniature Radha Krishna Painting',
    hindiName: 'कांगड़ा लघु चित्रकला काष्ठ फ्रेम',
    slug: 'framed-kangra-miniature-radha-krishna',
    category: 'traditional-art',
    categoryLabel: 'Traditional Art & Lippan',
    price: 4499,
    originalPrice: 5499,
    discountPercent: 18,
    rating: 5.0,
    reviewsCount: 27,
    isBestseller: true,
    isNew: false,
    isCustomizable: false,
    inStock: true,
    leadTimeDays: '2-4 Days (Artisanal Hand-painted)',
    images: [
      '/images/pahari-painting.jpg',
      '/images/hero-banner.jpg',
      '/images/artisan-crafting.jpg'
    ],
    shortDesc: 'Fine hand-painted Pahari Kangra style miniature painting framed in heavily carved antique Himalayan cedar frame.',
    fullDesc: 'Kangra miniature art is celebrated worldwide for its lyrical grace and soft colors. This original painting portrays Radha and Krishna seated on an ornate floral swing beside a blooming lotus pond and peacocks. Housed in a hand-carved floral cedar wood frame.',
    materials: [
      'Handmade Sialkoti wasli paper surface',
      'Natural mineral & stone pigments with 22K gold highlights',
      'Hand-carved solid Himalayan cedar wood frame',
      'Anti-reflective archival glass cover'
    ],
    dimensions: '15" Height x 12" Width x 1.5" Frame Depth',
    weight: '1.4 kg',
    artisanNote: 'Created following the ancient Pahari school techniques passed down through 5 generations in Kangra.',
    features: [
      'Exquisite museum-grade miniature details with single-hair brushes',
      'Certified authentic handcrafted artwork by Kangra artisans',
      'Heirloom collector’s piece for heritage art enthusiasts',
      'Signed and dated by the master artist'
    ]
  },
  {
    id: 'sr-007',
    name: 'Traditional Lippan Mud & Mirror Art Wall Mandala',
    hindiName: 'पारंपरिक लिप्पन मिट्टी व दर्पण कला',
    slug: 'traditional-lippan-mud-mirror-wall-mandala',
    category: 'traditional-art',
    categoryLabel: 'Traditional Art & Lippan',
    price: 2699,
    originalPrice: 3299,
    discountPercent: 18,
    rating: 4.94,
    reviewsCount: 35,
    isBestseller: false,
    isNew: true,
    isCustomizable: true,
    customFieldLabel: 'Preferred Accent Color / Center Inscription',
    customFieldPlaceholder: 'e.g. Terracotta & Gold / Om symbol in center',
    inStock: true,
    leadTimeDays: '3-4 Days (Handmade to order)',
    images: [
      '/images/lippan-art.jpg',
      '/images/wall-hanging.jpg',
      '/images/gift-packaging.jpg'
    ],
    shortDesc: 'Circular handmade Lippan relief wall plate crafted with organic clay dough, sacred geometric mandalas, and sparkling mirrors.',
    fullDesc: 'Lippan Kaam is a heritage mural craft that reflects light and brings radiant energy into any room. Handcrafted on circular wooden base using organic clay dough, embossed with intricate lotus petals, and studded with hundreds of sparkling glass mirrors.',
    materials: [
      'Reinforced natural wooden base disc',
      'Organic clay & marble dust dough with binder',
      'Convex & teardrop shaped glass mirrors (Aabhla)',
      'Terracotta ochre, ivory cream, and turmeric paint'
    ],
    dimensions: '18" Diameter x 1" Thickness',
    weight: '1.1 kg',
    artisanNote: 'Mirrors are hand-aligned in circular concentric mandala geometry to reflect ambient evening lights.',
    features: [
      'Sparkles beautifully under warm indoor lighting & candles',
      'Sturdy pre-installed wall mounting hook',
      'Protected with moisture-resistant sealant for easy dusting',
      'Adds rich bohemian ethnic character to living rooms and hallways'
    ]
  },
  {
    id: 'sr-008',
    name: 'Artisan Heritage Gift Box with Handwritten Note',
    hindiName: 'शैलरीत हस्तनिर्मित उपहार बॉक्स',
    slug: 'artisan-heritage-gift-box',
    category: 'customized-gifts',
    categoryLabel: 'Customized Gifts',
    price: 3199,
    originalPrice: 3999,
    discountPercent: 20,
    rating: 4.99,
    reviewsCount: 44,
    isBestseller: true,
    isNew: false,
    isCustomizable: true,
    customFieldLabel: 'Gift Message for Recipient (Max 150 chars)',
    customFieldPlaceholder: 'e.g. Dear Ananya, Wishing you love and light on your new home! From Priya & Rohan',
    inStock: true,
    leadTimeDays: '2-3 Days (Custom Packaging)',
    images: [
      '/images/gift-packaging.jpg',
      '/images/dehra-peacock.jpg',
      '/images/birthday-board.jpg'
    ],
    shortDesc: 'Curated wooden art gift hamper wrapped in butter paper, tied with jute twine, dried wheat stalks, and wax-sealed note.',
    fullDesc: 'The ultimate thoughtful gift for weddings, housewarmings, anniversaries, and festive celebrations. Includes a handcrafted wooden relief frame of your choice, wrapped in organic craft paper with dried flowers, and a personalized handwritten calligraphy letter.',
    materials: [
      'Rigid biodegradable kraft keepsake box',
      'Natural jute twine & dried Himalayan floral sprigs',
      'Handmade deckle-edge cotton paper letter with wax seal',
      'Included handcrafted wooden relief art of your selection'
    ],
    dimensions: '14" x 12" x 4" Gift Box',
    weight: '1.3 kg',
    artisanNote: 'Every note is penned by hand in graceful calligraphy ink by our studio artist.',
    features: [
      '100% Plastic-free sustainable artisan packaging',
      'Includes your personalized handwritten gift letter',
      'Ready to present without any additional wrapping',
      'Direct gift dispatch to recipient address supported'
    ]
  },
  {
    id: 'sr-009',
    name: 'Handmade Blossom Wooden Milestone Plaque',
    hindiName: 'हस्तनिर्मित काष्ठ माइलस्टोन पट्टिका',
    slug: 'handmade-blossom-wooden-milestone-plaque',
    category: 'birthday-boards',
    categoryLabel: 'Birthday & Name Boards',
    price: 1999,
    originalPrice: 2499,
    discountPercent: 20,
    rating: 4.93,
    reviewsCount: 29,
    isBestseller: false,
    isNew: true,
    isCustomizable: true,
    customFieldLabel: 'Child / Baby Name & Birth Details',
    customFieldPlaceholder: 'e.g. Myra - Born 12 Oct 2025 / 1st Birthday',
    inStock: true,
    leadTimeDays: '2-3 Days (Handmade)',
    images: [
      '/images/birthday-board.jpg',
      '/images/gift-packaging.jpg',
      '/images/hero-banner.jpg'
    ],
    shortDesc: 'Artisanal pine wood milestone plaque featuring handcrafted merino wool florals and burnt calligraphy lettering.',
    fullDesc: 'Celebrate your little one’s journey with this charming keepsake plaque. Handcrafted from natural pine with live edges, embellished with handmade felt roses, delicate foliage, and personalized name lettering.',
    materials: [
      'Natural Pine Wood Plaque',
      'Handmade Merino Wool Felt Flowers',
      'Natural dried botanicals',
      'Non-toxic organic finish'
    ],
    dimensions: '11" x 8" x 0.75" Thick',
    weight: '480 grams',
    artisanNote: 'Each flower is hand-stitched by mountain artisan women in Dharamshala.',
    features: [
      'Customized with name and birth milestone details',
      'Wall mount or table easel display ready',
      'Safe organic non-toxic natural wood wax'
    ]
  },
  {
    id: 'sr-010',
    name: 'Goddess Durga Himachali Dehra Temple Wall Sanctum',
    hindiName: 'माँ दुर्गा हस्तनिर्मित देहरा देव मंदिर',
    slug: 'goddess-durga-himachali-dehra-sanctum',
    category: 'dehra',
    categoryLabel: 'Dehra Artwork',
    price: 3899,
    originalPrice: 4799,
    discountPercent: 19,
    rating: 4.97,
    reviewsCount: 38,
    isBestseller: true,
    isNew: true,
    isCustomizable: true,
    customFieldLabel: 'Auspicious Shloka or Family Name Inscription',
    customFieldPlaceholder: 'e.g. ॐ दुं दुर्गायै नमः / The Kapoor Family',
    inStock: true,
    leadTimeDays: '4-6 Days (Master Hand-carved)',
    images: [
      '/images/hero-banner.jpg',
      '/images/dehra-peacock.jpg',
      '/images/artisan-crafting.jpg'
    ],
    shortDesc: 'Ornate wooden Dehra shrine portraying Goddess Durga in traditional Pahari style with brass bells and marigold garlands.',
    fullDesc: 'A divine masterpiece for your home mandir or entrance. Features an intricately carved Himalayan cedar arch frame, traditional miniature deity painting with 22K gold highlights, hanging brass chime bells, and vibrant wool tassels.',
    materials: [
      'Carved Solid Himalayan Cedar Wood',
      'Hand-painted natural mineral pigments & gold leaf',
      'Cast brass sacred bells & wool tassels'
    ],
    dimensions: '18" Height x 12" Width x 1.5" Depth',
    weight: '1.3 kg',
    artisanNote: 'Inspired by ancient 14th-century wooden temple architecture of Chamba and Kangra.',
    features: [
      'Authentic sacred Pahari temple architecture',
      'Produces gentle soothing temple bell chimes',
      'Concealed heavy-duty wall bracket included'
    ]
  },
  {
    id: 'sr-011',
    name: 'Auspicious Brass Temple Bell & Wool Hanging Latkan',
    hindiName: 'मांगलिक पीतल घंटी व ऊन लटकन',
    slug: 'auspicious-brass-temple-bell-wool-latkan',
    category: 'festive-decor',
    categoryLabel: 'Festive Decor & Torans',
    price: 1299,
    originalPrice: 1699,
    discountPercent: 23,
    rating: 4.89,
    reviewsCount: 22,
    isBestseller: false,
    isNew: true,
    isCustomizable: false,
    inStock: true,
    leadTimeDays: '1-2 Days (Ready to Ship)',
    images: [
      '/images/wall-hanging.jpg',
      '/images/festive-toran.jpg',
      '/images/hero-banner.jpg'
    ],
    shortDesc: 'Festive pair of hanging latkans crafted with hand-painted terracotta discs, brass chime bells, and pom-poms.',
    fullDesc: 'Hang near doorways, mandirs, or balconies to bring auspicious warmth and positive energy into your home. Each latkan is handcrafted using terracotta clay, natural braided jute, and pure brass bells.',
    materials: [
      'Handmade Terracotta Discs',
      'Pure Brass Jingling Bells',
      'Braided Golden Jute & Woolen Pom-poms'
    ],
    dimensions: '22" Length x 4" Width',
    weight: '390 grams',
    artisanNote: 'Produces clear melodic resonance in the gentlest breeze.',
    features: [
      'Pack of 2 handcrafted latkans',
      'Vibrant festive colors for home entrance and pooja room',
      '100% natural plastic-free craft'
    ]
  },
  {
    id: 'sr-012',
    name: 'Kangra Valley Folk Terracotta Wall Plaque',
    hindiName: 'कांगड़ा लोक मृत्तिका भित्ति कला',
    slug: 'kangra-valley-folk-terracotta-wall-plaque',
    category: 'traditional-art',
    categoryLabel: 'Traditional Art & Lippan',
    price: 2199,
    originalPrice: 2699,
    discountPercent: 18,
    rating: 4.95,
    reviewsCount: 18,
    isBestseller: false,
    isNew: true,
    isCustomizable: false,
    inStock: true,
    leadTimeDays: '2-3 Days (Handmade)',
    images: [
      '/images/lippan-art.jpg',
      '/images/pahari-painting.jpg',
      '/images/wall-hanging.jpg'
    ],
    shortDesc: 'Hand-pressed terracotta clay wall plaque depicting traditional Himalayan folk dance and floral scrollwork.',
    fullDesc: 'Celebrate folk mountain heritage with this baked terracotta clay wall plaque. Finished with antique patina and organic beeswax polish for an authentic rustic look on interior walls.',
    materials: [
      'Natural River Terracotta Clay',
      'Natural Ochre & Mineral Wash',
      'Solid Teak Mounting Frame'
    ],
    dimensions: '10" x 10" x 1" Depth',
    weight: '750 grams',
    artisanNote: 'Pressed using antique hand-carved wooden blocks from Kangra.',
    features: [
      'Authentic Pahari folk relief motif',
      'Weather-sealed for long lasting beauty',
      'Heirloom artistic wall decor'
    ]
  }
];

export const ARTISAN_STORIES = [
  {
    name: 'Sunita Devi',
    role: 'Master Wood Carver & Dehra Artist',
    village: 'Kangra Valley, Himachal Pradesh',
    experience: '22+ Years in Heritage Craft',
    quote: 'Every line I carve into cedar wood is a prayer and a celebration of our mountain ancestors. Creating art with our hands keeps our soul alive.',
    image: '/images/artisan-crafting.jpg'
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Dr. Meenakshi Sundaram',
    location: 'Bangalore, Karnataka',
    rating: 5,
    date: '28 Aug 2026',
    verified: true,
    productName: 'Handcrafted Himachali Peacock Dehra Frame',
    productImage: '/images/dehra-peacock.jpg',
    comment: 'Received my parcel today, it’s beautiful ❤️ The wooden carving and miniature peacock painting is so intricate. The brass bells have a sweet gentle chime. Packaging was impeccable with a lovely handwritten note!',
    likes: 24
  },
  {
    id: 'rev-2',
    author: 'Pooja & Sameer Verma',
    location: 'Chandigarh',
    rating: 5,
    date: '24 Aug 2026',
    verified: true,
    productName: 'Personalized Baby Milestone & Birthday Board',
    productImage: '/images/birthday-board.jpg',
    comment: 'Thank you so much Shailreet team, loved the handmade detailing! The wool flowers on Aarav’s birthday board look so tender and sweet. All guests at the party asked where we got it.',
    likes: 31
  },
  {
    id: 'rev-3',
    author: 'Vikramaditya Rathore',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    date: '19 Aug 2026',
    verified: true,
    productName: 'Custom Carved Teak Wood Family Nameplate',
    productImage: '/images/nameplate.jpg',
    comment: 'The nameplate for our new villa exceeded all expectations. Genuine solid teak wood, gorgeous peacock feather painting, and gold script. Worth every single rupee!',
    likes: 19
  },
  {
    id: 'rev-4',
    author: 'Ananya Deshmukh',
    location: 'Pune, Maharashtra',
    rating: 5,
    date: '15 Aug 2026',
    verified: true,
    productName: 'Traditional Terracotta & Wool Wall Hanging',
    productImage: '/images/wall-hanging.jpg',
    comment: 'The colors are so warm and soothing. Perfect earthy aesthetic for my living room wall. It arrived safely in very eco-friendly packaging without any plastic.',
    likes: 14
  },
  {
    id: 'rev-5',
    author: 'Ruchira Banerjee',
    location: 'Kolkata, West Bengal',
    rating: 5,
    date: '10 Aug 2026',
    verified: true,
    productName: 'Framed Kangra Miniature Radha Krishna Painting',
    productImage: '/images/pahari-painting.jpg',
    comment: 'Pure masterpiece. As an art collector, I truly appreciate the fine single-hair brushstrokes and natural mineral pigments. Proud to support our traditional mountain artists.',
    likes: 42
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Dehra Temple Arch Wall Display',
    category: 'Home Decor',
    image: '/images/hero-banner.jpg',
    caption: 'Handcrafted Dehra frames bringing auspicious Himalayan warmth to living room sanctum.',
    productId: 'sr-001'
  },
  {
    id: 'gal-2',
    title: 'Artisan Sunita at Studio Work',
    category: 'Behind The Scenes',
    image: '/images/artisan-crafting.jpg',
    caption: 'Meticulously hand-painting floral vines with natural gouache pigments in Kangra Valley studio.',
    productId: 'sr-006'
  },
  {
    id: 'gal-3',
    title: 'Unboxing & Sustainable Kraft Packaging',
    category: 'Artisan Packaging',
    image: '/images/gift-packaging.jpg',
    caption: 'Each order is packed with dried botanical sprigs, natural jute twine, and handwritten thank you calligraphy.',
    productId: 'sr-008'
  },
  {
    id: 'gal-4',
    title: 'Custom Baby Milestone Board',
    category: 'Custom Milestone',
    image: '/images/birthday-board.jpg',
    caption: 'Handmade wool felt florals & personalized calligraphy for baby Aarav’s first birthday celebration.',
    productId: 'sr-002'
  },
  {
    id: 'gal-5',
    title: 'Festive Toran on Vintage Wooden Door',
    category: 'Festive Entrance',
    image: '/images/festive-toran.jpg',
    caption: 'Embroidered mango leaves, marigold flowers, and mirror bells welcoming festive joy.',
    productId: 'sr-005'
  },
  {
    id: 'gal-6',
    title: 'Lippan Mud & Mirror Mandala Detail',
    category: 'Sacred Geometry',
    image: '/images/lippan-art.jpg',
    caption: 'Intricate concentric clay relief work reflecting soft warm ambient evening lighting.',
    productId: 'sr-007'
  }
];

export const FAQS = [
  {
    q: 'How long does a customized craft order take to make and deliver?',
    a: 'Because each piece is individually hand-carved, painted, and assembled by our artisans in Himachal Pradesh, customized orders typically take 3-5 business days to craft. Standard pan-India shipping takes 3-5 days via insured courier.'
  },
  {
    q: 'Can I customize names, colors, or sizes according to my space?',
    a: 'Yes, absolutely! We love creating bespoke pieces. You can enter your custom text and color preferences directly on the product page or use our "Made Especially For You" custom order studio.'
  },
  {
    q: 'How are the fragile artworks packed for long-distance transit?',
    a: 'We use high-grade multi-layer shock-absorbent eco-friendly packaging, bubble corners, rigid kraft boxes, and fragile transit insurance. In the rare event of transit damage, we provide immediate free replacement.'
  },
  {
    q: 'How do I care for and clean my wooden Dehra and handmade artworks?',
    a: 'Gently wipe with a soft, dry cotton cloth or soft feather duster. Avoid spraying harsh liquid chemical cleaners directly onto the hand-painted surfaces.'
  }
];
