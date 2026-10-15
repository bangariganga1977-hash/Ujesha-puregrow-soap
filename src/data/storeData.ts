import { Product, Review, SkincareTip, InstagramPost } from '../types';
import { ASSET_IMAGES } from '../assets/images';

export const STORE_PRODUCTS: Product[] = [
  {
    id: 'pg-soap-signature',
    name: 'Pure Glow Signature Botanical Soap Bar',
    category: 'body-care',
    isBestseller: true,
    price: 549,
    originalPrice: 649,
    rating: 4.95,
    reviewCount: 148,
    weightVolume: '120g / 4.2 oz',
    tagline: 'Gentle cleansing infused with raw Indian forest honey and fresh aloe vera.',
    image: ASSET_IMAGES.botanicalSoap,
    ingredientsSnippet: 'Vegetable Glycerin, Cold-Pressed Coconut Oil, Raw Forest Honey, Fresh Aloe Vera Gel',
    keyIngredients: [
      { name: 'Vegetable Glycerin', inci: 'Glycerin', benefit: 'Draws ambient moisture to soothe skin barrier' },
      { name: 'Cold-Pressed Coconut Oil', inci: 'Cocos Nucifera (Coconut) Oil', benefit: 'Rich fatty acids that cushion and nourish' },
      { name: 'Raw Forest Honey', inci: 'Mel / Honey', benefit: 'Natural humectant with enzymes that calm dry skin' },
      { name: 'Fresh Aloe Vera Gel', inci: 'Aloe Barbadensis Leaf Juice', benefit: 'Delivers soothing relief and vitamins A, C, & E' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua (Water)',
      'Sodium Stearate',
      'Cocos Nucifera (Coconut) Oil',
      'Sodium Laurate',
      'Mel (Honey)',
      'Aloe Barbadensis Leaf Juice',
      'Tocopherol (Vitamin E)'
    ],
    benefits: [
      'Gentle daily cleansing without stripping natural lipid mantle',
      'Locks in hydration with natural raw forest honey',
      'Soothes skin redness and dryness after warm showers',
      'MoCRA § 608 safety substantiation verified'
    ],
    skinType: 'All Skin Types, especially Dry, Sensitive, and Eczema-Prone',
    scentProfile: 'Subtle warm honey, sweet coconut, and herbal dew (100% natural, no synthetic fragrance)',
    howToUse: 'Lather between warm hands or onto a natural sisal washcloth. Massage over damp skin in gentle circular motions, then rinse thoroughly. Store in a draining soap dish.',
    fdaNote: 'Classified under FDA 21 CFR § 701 as a moisturizing cosmetic soap bar. Formulation certified safe under CIR guidelines.',
    inStock: true
  },
  {
    id: 'pg-soap-turmeric',
    name: 'Pure Glow Golden Turmeric & Saffron Radiance Soap Bar',
    category: 'face-care',
    isBestseller: true,
    price: 599,
    originalPrice: 699,
    rating: 4.96,
    reviewCount: 124,
    weightVolume: '110g / 3.9 oz',
    tagline: 'Ayurvedic glow soap with cold-pressed turmeric, Kashmiri saffron, and raw wildflower honey.',
    image: ASSET_IMAGES.turmericSoap,
    ingredientsSnippet: 'Kashmiri Saffron, Wild Turmeric Root, Raw Honey, Cold-Pressed Jojoba Oil',
    keyIngredients: [
      { name: 'Wild Turmeric Root', inci: 'Curcuma Longa Root Extract', benefit: 'Promotes even tone and illuminates natural complexion' },
      { name: 'Kashmiri Saffron', inci: 'Crocus Sativus Flower Extract', benefit: 'Revered antioxidant spice that restores golden luminosity' },
      { name: 'Raw Wild Honey', inci: 'Mel', benefit: 'Deep humectant that prevents post-wash tightness' },
      { name: 'Golden Jojoba Seed Oil', inci: 'Simmondsia Chinensis Seed Oil', benefit: 'Balances sebum and softens delicate facial pores' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua',
      'Cocos Nucifera (Coconut) Oil',
      'Mel (Honey)',
      'Curcuma Longa (Turmeric) Root Powder',
      'Crocus Sativus (Saffron) Flower Extract',
      'Simmondsia Chinensis (Jojoba) Seed Oil',
      'Tocopherol'
    ],
    benefits: [
      'Illuminates dull skin for a healthy, vibrant morning glow',
      'Gentle micro-lather suited for morning facial cleansing',
      'Fades look of uneven tan and dark spots naturally'
    ],
    skinType: 'Dull, Uneven, Normal to Dry Facial Skin',
    scentProfile: 'Earthy warm golden saffron with notes of sunlit honey',
    howToUse: 'Work up a gentle micro-lather with lukewarm water. Massage onto damp face in light circles for 30 seconds, then rinse with cool water.',
    inStock: true
  },
  {
    id: 'pg-soap-charcoal',
    name: 'Pure Glow Activated Charcoal & Tea Tree Detoxifying Soap Bar',
    category: 'face-care',
    isBestseller: true,
    price: 649,
    originalPrice: 749,
    rating: 4.92,
    reviewCount: 108,
    weightVolume: '150g / 5.3 oz',
    tagline: 'Deep pore clarifying soap bar with activated bamboo charcoal and organic tea tree.',
    image: ASSET_IMAGES.charcoalSoap,
    ingredientsSnippet: 'Activated Bamboo Charcoal, Organic Tea Tree, White Kaolin Clay, Fresh Mint',
    keyIngredients: [
      { name: 'Activated Bamboo Charcoal', inci: 'Carbon / Charcoal Powder', benefit: 'Acts as a natural magnet to draw excess sebum and impurities' },
      { name: 'Australian Tea Tree Leaf Oil', inci: 'Melaleuca Alternifolia Leaf Oil', benefit: 'Clarifies blemish-prone skin and calms flare-ups' },
      { name: 'White Kaolin Clay', inci: 'Kaolin', benefit: 'Silky mineral clay that gently smooths texture without stripping' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua',
      'Sodium Stearate',
      'Charcoal Powder',
      'Melaleuca Alternifolia (Tea Tree) Leaf Oil',
      'Kaolin',
      'Mentha Piperita (Peppermint) Leaf Oil',
      'Tocopherol'
    ],
    benefits: [
      'Removes deep environmental grime, sweat, and makeup residue',
      'Controls excess mid-day T-zone shine without overdrying',
      'Soothes chest, back, and facial blemishes'
    ],
    skinType: 'Oily, Combination, and Blemish-Prone Skin',
    scentProfile: 'Crisp invigorating tea tree and refreshing crushed garden mint',
    howToUse: 'Glide wet bar across hands until rich dark lather blooms. Massage over oily zones or back and shoulders, then rinse thoroughly.',
    inStock: true
  },
  {
    id: 'pg-soap-calendula',
    name: 'Pure Glow Calendula & Oatmeal Soothing Comfort Soap Bar',
    category: 'body-care',
    isNew: true,
    price: 699,
    originalPrice: 799,
    rating: 4.94,
    reviewCount: 62,
    weightVolume: '120g / 4.2 oz',
    tagline: 'Ultra-calming artisanal bar with whole dried calendula petals and colloidal oat milk.',
    image: ASSET_IMAGES.soapHero,
    ingredientsSnippet: 'Colloidal Oat Flour, Organic Calendula Petals, Raw Shea Butter, Sweet Almond Oil',
    keyIngredients: [
      { name: 'Colloidal Oat Flour', inci: 'Avena Sativa Kernel Flour', benefit: 'Clinically renowned oat beta-glucan that shields irritated skin' },
      { name: 'Calendula Flower Petals', inci: 'Calendula Officinalis Flower Extract', benefit: 'Traditional herbal soother that eases red, windburned skin' },
      { name: 'Raw Shea Butter', inci: 'Butyrospermum Parkii Butter', benefit: 'Deeply softens rough dry patches and strengthens skin resilience' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua',
      'Avena Sativa (Oat) Kernel Flour',
      'Calendula Officinalis Flower',
      'Butyrospermum Parkii (Shea) Butter',
      'Prunus Amygdalus Dulcis (Sweet Almond) Oil',
      'Sodium Stearate',
      'Tocopherol'
    ],
    benefits: [
      'Instant comfort for tight, itchy, or weather-sensitive skin',
      'Creamy oat-milk lather with subtle natural exfoliation from petals',
      'Fragrance-free formula ideal for toddlers and vulnerable skin'
    ],
    skinType: 'Sensitive, Reactive, Eczema-Prone, and Ultra-Dry Skin',
    scentProfile: 'Naturally warm, comforting toasted oats and subtle sweet marigold',
    howToUse: 'Lather directly against damp skin. The gentle oat texture helps buff rough spots softly while showering.',
    inStock: true
  },
  {
    id: 'pg-soap-rose-clay',
    name: 'Pure Glow Rose Petal & French Pink Clay Luxury Soap Bar',
    category: 'face-care',
    price: 749,
    originalPrice: 849,
    rating: 4.91,
    reviewCount: 54,
    weightVolume: '115g / 4.0 oz',
    tagline: 'Velvety cold-process soap bar infused with wild Damask rose water and pink clay.',
    image: ASSET_IMAGES.soapHero,
    ingredientsSnippet: 'French Pink Clay, Damask Rose Hydrosol, Rosehip Seed Oil, Virgin Coconut Oil',
    keyIngredients: [
      { name: 'French Pink Kaolin Clay', inci: 'Montmorillonite / Kaolin', benefit: 'Refines delicate pores while boosting skin elasticity' },
      { name: 'Organic Rosehip Seed Oil', inci: 'Rosa Canina Fruit Oil', benefit: 'Rich in essential omegas 3 & 6 for youthful firmness' },
      { name: 'Pure Rose Water', inci: 'Rosa Damascena Flower Water', benefit: 'Tones and balances pH during every face cleanse' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua',
      'Rosa Damascena Flower Water',
      'Montmorillonite (Pink Clay)',
      'Rosa Canina (Rosehip) Seed Oil',
      'Cocos Nucifera (Coconut) Oil',
      'Sodium Stearate',
      'Tocopherol'
    ],
    benefits: [
      'Leaves skin silky, velvety-soft, and delicately plump',
      'Purifies without depleting essential skin moisture',
      'Gentle enough for morning and evening facial cleansing'
    ],
    skinType: 'Mature, Dry, and Delicate Sensitive Skin',
    scentProfile: 'Fresh dewy morning roses and delicate sun-warmed petals',
    howToUse: 'Build a creamy micro-foam between palms, press into face and neck for 30 seconds, then splash clean with cool water.',
    inStock: true
  },
  {
    id: 'pg-soap-honey-goatmilk',
    name: 'Pure Glow Raw Honey & Goat Milk Ultra-Nourishing Soap Bar',
    category: 'body-care',
    isBestseller: true,
    price: 799,
    originalPrice: 899,
    rating: 4.98,
    reviewCount: 97,
    weightVolume: '125g / 4.4 oz',
    tagline: 'Decadent slow-cured soap bar with farm-fresh goat milk, forest honey, and cocoa butter.',
    image: ASSET_IMAGES.botanicalSoap,
    ingredientsSnippet: 'Fresh Goat Milk, Raw Indian Honey, Unrefined Cocoa Butter, Sweet Almond Oil',
    keyIngredients: [
      { name: 'Whole Goat Milk', inci: 'Caprae Lac (Goat Milk)', benefit: 'Naturally rich in lactic acid (AHA) to gently dissolve dead cells' },
      { name: 'Raw Forest Honey', inci: 'Mel', benefit: 'Cushions and hydrates with potent natural enzymes' },
      { name: 'Unrefined Cocoa Butter', inci: 'Theobroma Cacao Seed Butter', benefit: 'Locks in 24-hour hydration with velvety lipid barrier' }
    ],
    fullInci: [
      'Caprae Lac (Goat Milk)',
      'Aqua',
      'Glycerin',
      'Mel (Honey)',
      'Theobroma Cacao (Cocoa) Seed Butter',
      'Cocos Nucifera (Coconut) Oil',
      'Sodium Laurate',
      'Tocopherol'
    ],
    benefits: [
      'Lactic acid softly renews skin without mechanical scrub irritation',
      'Luscious custard-like lather that conditions even the driest elbows and legs',
      'Zero synthetic detergents, phthalates, or chemical foaming agents'
    ],
    skinType: 'Extremely Dry, Flaky, and Weather-Stressed Skin',
    scentProfile: 'Creamy warm milk, golden honeycomb, and rich cocoa butter',
    howToUse: 'Massage over wet body in circular motions. Enjoy the dense, rich lather before rinsing clean with warm water.',
    inStock: true
  },
  {
    id: 'pg-soap-neem-tulsi',
    name: 'Pure Glow Neem & Sacred Tulsi Clarifying Ayurvedic Soap Bar',
    category: 'hair-care',
    isNew: true,
    price: 849,
    originalPrice: 999,
    rating: 4.88,
    reviewCount: 46,
    weightVolume: '110g / 3.9 oz',
    tagline: 'Ayurvedic clarifying bar for scalp, face, and body with cold-pressed neem and sacred tulsi.',
    image: ASSET_IMAGES.charcoalSoap,
    ingredientsSnippet: 'Cold-Pressed Neem Oil, Sacred Holy Basil (Tulsi), Fresh Aloe, Tea Tree Oil',
    keyIngredients: [
      { name: 'Cold-Pressed Neem Seed Oil', inci: 'Melia Azadirachta Seed Oil', benefit: 'Time-tested Ayurvedic purifying botanical that calms scalp flakes' },
      { name: 'Sacred Tulsi Leaf Extract', inci: 'Ocimum Sanctum Leaf Extract', benefit: 'Potent adaptogenic herb that soothes redness and builds resilience' },
      { name: 'Pure Aloe Juice', inci: 'Aloe Barbadensis Leaf Juice', benefit: 'Cools scalp heat and replenishes moisture roots' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua',
      'Melia Azadirachta (Neem) Seed Oil',
      'Ocimum Sanctum (Tulsi) Leaf Extract',
      'Aloe Barbadensis Leaf Juice',
      'Cocos Nucifera (Coconut) Oil',
      'Sodium Stearate',
      'Tocopherol'
    ],
    benefits: [
      'Dual use: balances oily scalp roots while clarifying blemish-prone body skin',
      'Helps eliminate stubborn scalp flaking without stripping hair moisture',
      '100% biodegradable zero-waste solid bar replaces 2 plastic bottles'
    ],
    skinType: 'Flaky Scalp, Oily Skin, and Hot-Climate Prone Skin',
    scentProfile: 'Fresh herbal tulsi leaves with crisp clarifying camphoraceous notes',
    howToUse: 'For scalp: lather between hands and massage into wet roots. For body: glide over damp skin and rinse clean.',
    inStock: true
  },
  {
    id: 'pg-soap-sandalwood',
    name: 'Pure Glow Royal Sandalwood & Shea Butter Reserve Soap Bar',
    category: 'body-care',
    isBestseller: true,
    price: 1149,
    originalPrice: 1200,
    rating: 4.99,
    reviewCount: 82,
    weightVolume: '135g / 4.8 oz',
    tagline: 'Artisanal reserve soap cured 6 weeks with authentic Mysore sandalwood and African shea butter.',
    image: ASSET_IMAGES.turmericSoap,
    ingredientsSnippet: 'Authentic Mysore Sandalwood Oil, Raw African Shea Butter, Golden Jojoba, Raw Honey',
    keyIngredients: [
      { name: 'Pure Mysore Sandalwood Oil', inci: 'Santalum Album Wood Oil', benefit: 'Precious aromatic oil that calms skin inflammation and settles the mind' },
      { name: 'Grade-A Raw Shea Butter', inci: 'Butyrospermum Parkii Butter', benefit: 'Ultra-rich fatty acids that replenish stressed moisture barriers' },
      { name: 'Golden Jojoba Seed Oil', inci: 'Simmondsia Chinensis Seed Oil', benefit: 'Mimics natural skin lipids for a silky, non-greasy satin finish' }
    ],
    fullInci: [
      'Glycerin',
      'Aqua',
      'Butyrospermum Parkii (Shea) Butter',
      'Santalum Album (Sandalwood) Wood Oil',
      'Simmondsia Chinensis (Jojoba) Seed Oil',
      'Mel (Honey)',
      'Sodium Stearate',
      'Tocopherol'
    ],
    benefits: [
      'The crown jewel of Pure Glow artisanal soap craftsmanship',
      'Slow-cured for six weeks in wooden racks for maximum longevity and density',
      'Incredible lingering natural fragrance of sacred forest sandalwood'
    ],
    skinType: 'All Skin Types, Luxury Spa Rituals, Dry and Mature Skin',
    scentProfile: 'Enchanting sacred sandalwood, warm amber, and golden velvet honey',
    howToUse: 'Lather under a warm running shower. Breathe in the authentic sandalwood steam and massage gently over entire body.',
    inStock: true
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ananya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    date: 'March 24, 2026',
    verifiedBuyer: true,
    productName: 'Pure Glow Signature Botanical Soap Bar',
    title: 'Transformed my eczema-prone winter skin completely',
    comment: 'Most store-bought commercial soaps leave my arms tight and itchy within 5 minutes. Pure Glow is entirely different—the honey and fresh aloe leave a cushion of moisture that actually lasts. Plus, knowing it has full MoCRA safety substantiation documented gives me so much peace of mind.',
    skinType: 'Sensitive & Dry Skin',
    avatarBg: 'bg-[#F9D5DD]'
  },
  {
    id: 'rev-2',
    author: 'Emily Richardson',
    location: 'Austin, Texas, USA',
    rating: 5,
    date: 'April 2, 2026',
    verifiedBuyer: true,
    productName: 'Pure Glow Golden Turmeric & Saffron Radiance Soap Bar',
    title: 'The best turmeric facial bar I have ever used',
    comment: 'The lather is so silky and warm! You can see the real saffron strands in the soap. It doesn’t stain my face yellow at all, but washes away SPF and leaves my skin glowing and calm. Arrived in Texas wrapped in lovely butter paper and recycled cardboard.',
    skinType: 'Combination / Dull Skin',
    avatarBg: 'bg-[#CADCCB]'
  },
  {
    id: 'rev-3',
    author: 'Priya Patel',
    location: 'London, UK',
    rating: 5,
    date: 'April 9, 2026',
    verifiedBuyer: true,
    productName: 'Pure Glow Activated Charcoal & Tea Tree Detoxifying Soap Bar',
    title: 'Gentle on acne-prone skin without stripping',
    comment: 'I was hesitant to use a bar soap on my face, but the INCI list is so clean. It washes away oil and makeup cleanly, and my skin feels balanced and supple, not tight. This is my third charcoal bar already.',
    skinType: 'Oily / Blemish-Prone',
    avatarBg: 'bg-[#EFE8DE]'
  },
  {
    id: 'rev-4',
    author: 'David Vance',
    location: 'Seattle, WA, USA',
    rating: 5,
    date: 'March 18, 2026',
    verifiedBuyer: true,
    productName: 'Pure Glow Neem & Sacred Tulsi Clarifying Ayurvedic Soap Bar',
    title: 'Surpassed every liquid cleanser in my shower',
    comment: 'The lather is surprisingly thick and creamy. It rinses completely clean without leaving that waxy film other solid bars have. My scalp and shoulders have zero breakouts now, and the herbal tulsi-neem scent is subtle and grounding.',
    skinType: 'Oily Scalp / Normal Skin',
    avatarBg: 'bg-[#FCE7EC]'
  },
  {
    id: 'rev-5',
    author: 'Meera Sengupta',
    location: 'Bengaluru, India',
    rating: 5,
    date: 'February 27, 2026',
    verifiedBuyer: true,
    productName: 'Pure Glow Royal Sandalwood & Shea Butter Reserve Soap Bar',
    title: 'Pure royalty in a soap bar',
    comment: 'The authentic sandalwood scent is divine—it smells like a traditional Indian temple at dawn. The bar is hard, lasts weeks without turning soggy, and leaves my skin smelling subtly majestic all day.',
    skinType: 'Dry & Mature Skin',
    avatarBg: 'bg-[#E8EFE9]'
  }
];

export const SKINCARE_TIPS: SkincareTip[] = [
  {
    id: 'tip-soap-care',
    title: 'How to Make Your Pure Glow Artisanal Soap Last 3x Longer',
    readTime: '3 min read',
    category: 'Soap Care Ritual',
    summary: 'Handcrafted soaps are rich in natural plant glycerin. Here is the simple draining ritual to keep your bar firm and long-lasting.',
    image: ASSET_IMAGES.botanicalSoap,
    content: [
      'Commercial mass-market soaps often extract glycerin to sell separately and replace it with chemical hardeners and synthetic detergents (like SLS). Pure Glow soaps retain 100% of their skin-softening plant glycerin.',
      'Because glycerin is a humectant that naturally attracts water molecules from the air, handmade soap needs proper airflow between uses.',
      'Always rest your soap on a self-draining wooden or ceramic slatted dish outside the direct shower stream.',
      'Letting the bar dry completely between showers keeps it firm and extends each 120g bar to over 45 relaxing showers.'
    ],
    keyTakeaways: [
      'Use a grooved or slatted draining soap dish',
      'Keep away from standing puddles of water',
      'Cut bars in half if using for travel or guest basins'
    ]
  },
  {
    id: 'tip-honey-aloe-synergy',
    title: 'Honey & Aloe Vera: The Ultimate Skin Barrier Soap Synergy',
    readTime: '4 min read',
    category: 'Botanical Science',
    summary: 'Why Ayurvedic wisdom and modern dermatology agree on the soothing moisture synergy of raw forest honey and cold-cut aloe in artisan soaps.',
    image: ASSET_IMAGES.turmericSoap,
    content: [
      'Your stratum corneum (the outermost skin barrier) relies on lipids and natural moisturizing factors (NMF) to prevent transepidermal water loss.',
      'Raw unpasteurized forest honey contains gluconic acid and natural oligosaccharides that attract hydration deep into skin cells while delivering enzymes that gently calm redness.',
      'Fresh Aloe Barbadensis leaf juice provides polysaccharides like acemannan, along with essential amino acids that signal the skin to cool inflammation and seal micro-tears.',
      'When paired in our cold-process soap formulation, honey prevents moisture evaporation while aloe delivers instant soothing relief.'
    ],
    keyTakeaways: [
      'Natural humectants hold up to 1,000 times their weight in water',
      'Zero synthetic film formers or artificial foaming agents',
      'Clinically documented safety substantiation under MoCRA § 608'
    ]
  },
  {
    id: 'tip-label-reading',
    title: 'The Truth About Cosmetic Soap Labels: How to Read INCI',
    readTime: '5 min read',
    category: 'Consumer Education',
    summary: 'Learn what FDA 21 CFR § 701.3 descending weight order means and why Pure Glow lists every single botanical with complete honesty.',
    image: ASSET_IMAGES.soapHero,
    content: [
      'Under United States FDA regulations (21 CFR § 701.3), ingredients in cosmetic soap products must be disclosed in descending order of predominance by weight until the 1% concentration mark.',
      'Many brands advertise "honey and aloe" on the front label while burying them below synthetic silicones, artificial dyes, and fragrance (parfum) on the actual ingredient list.',
      'At Pure Glow Naturals, our raw honey, cold-pressed coconut oil, and fresh aloe vera appear right at the top of our INCI declaration because they make up the bulk of our formulation.',
      'We welcome MoCRA 2022 standards because transparency protects you and your family.'
    ],
    keyTakeaways: [
      'Always look at the top 5 ingredients on any soap package',
      'Look for botanical names (INCI) like Cocos Nucifera rather than vague terms',
      'Our full regulatory dossier is openly published for customer review'
    ]
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    handle: '@pureglownaturals',
    image: ASSET_IMAGES.botanicalSoap,
    caption: 'Freshly unmolded morning batch! 🌿 Pure Glow Signature Botanical Soap Bars cured for 4 weeks in our workshop before being wrapped in unbleached butter paper. #PureGlowSoap #CleanSkincare #ArtisanSoap',
    likes: 842,
    productTag: 'Signature Botanical Soap Bar',
    productId: 'pg-soap-signature'
  },
  {
    id: 'ig-2',
    handle: '@pureglownaturals',
    image: ASSET_IMAGES.turmericSoap,
    caption: 'Golden morning light on our Golden Turmeric & Saffron Radiance soap bar. 💛 Infused with raw wild honey and hand-picked Kashmiri saffron. Zero synthetic dyes, just pure golden botanical glow. #PureGlowArtisan',
    likes: 1205,
    productTag: 'Turmeric & Saffron Soap Bar',
    productId: 'pg-soap-turmeric'
  },
  {
    id: 'ig-3',
    handle: '@pureglownaturals',
    image: ASSET_IMAGES.charcoalSoap,
    caption: 'Detox your pores naturally. 🖤 Activated bamboo charcoal and Australian tea tree soap bar in action. Silky micro-lather that lifts impurities without tightness. #PureGlowCharcoal #ArtisanSkincare',
    likes: 914,
    productTag: 'Activated Charcoal Soap Bar',
    productId: 'pg-soap-charcoal'
  },
  {
    id: 'ig-4',
    handle: '@pureglownaturals',
    image: ASSET_IMAGES.soapHero,
    caption: 'Meet the entire handcrafted Pure Glow soap bar family! ✨ From calming Calendula Oatmeal to luxurious Damask Rose Clay. 100% plastic-free, cold-processed, and made with love. #PureGlowFamily #HandmadeSoap',
    likes: 1420,
    productTag: 'Artisan Soap Collection',
    productId: 'pg-soap-calendula'
  }
];

export const STORE_POLICIES = {
  shipping: {
    freeThreshold: 999.0,
    standardRate: 99.0,
    expressRate: 199.0,
    handlingTime: '1-2 business days (fresh small-batch dispatch)',
    standardDeliveryTime: '3-5 business days across US & India',
    internationalDeliveryTime: '6-10 business days worldwide with tracked eco-courier',
    packagingPledge: '100% plastic-free packaging using unbleached butter paper, recycled paper sleeves, and biodegradable corrugated mailers.'
  },
  returns: {
    windowDays: 30,
    guarantee: '30-Day Pure Glow Satisfaction Guarantee',
    policy: 'If your skin does not love our handcrafted botanicals, simply contact our concierge within 30 days for an effortless refund or exchange. No questions asked.',
    damagedPledge: 'Any item damaged in transit will be replaced immediately via express priority dispatch at zero cost to you.'
  },
  artisanPledge: {
    smallBatch: 'Small-batch crafted in hygienic workshops under strict MoCRA sanitary operating procedures.',
    ethicalSourcing: 'Raw forest honey sourced directly from certified tribal beekeepers in rural India with fair living wages.',
    crueltyFree: '100% cruelty-free. We test on ourselves and loved ones, never on animals.'
  }
};
