import { ReportSection, ChecklistItem, IngredientInfo, ClaimEvaluation } from '../types';

export const REPORT_METADATA = {
  documentTitle: "FDA Regulatory Compliance Report",
  productName: "Pure Glow Handmade Soap",
  manufacturer: "Pure Glow Naturals",
  companyType: "Small, home-based Indian startup",
  originCountry: "India",
  targetMarket: "United States of America",
  jurisdiction: "U.S. FDA (Food and Drug Administration) & CPSC (Consumer Product Safety Commission)",
  dossierId: "FDA-REG-PGN-2024-V1",
  effectiveDate: "March 2025 (Reflecting MoCRA Enforcement Updates)",
  leadRegulatoryStatus: "Regulated as a Cosmetic under U.S. FDA / MoCRA",
  regulatoryReasoning: "Formulated with glycerin base & botanical additives; marketed with skin-conditioning and moisturizing claims beyond pure saponified fatty acid cleansing."
};

export const REPORT_SECTIONS: ReportSection[] = [
  {
    id: "sec-1",
    number: 1,
    title: "Introduction",
    subtitle: "Brand Profile, Product Concept & Market Positioning",
    summary: "Pure Glow Naturals is an Indian artisanal startup producing eco-friendly, handmade soap formulated with coconut oil, honey, and aloe vera.",
    content: [
      "Pure Glow Naturals is a small, home-based Indian startup that produces handmade, natural and eco-friendly personal care products. Its main product, Pure Glow Handmade Soap, is designed to provide gentle cleansing while using ingredients such as glycerin soap base, coconut oil, honey and aloe vera gel.",
      "As an international micro-enterprise originating in India and contemplating distribution into the United States, Pure Glow Naturals must navigate U.S. federal regulatory frameworks governing personal care products. This report examines the exact statutory boundaries between consumer soaps, cosmetics, and over-the-counter (OTC) drugs under the U.S. Food, Drug, and Cosmetic Act (FD&C Act) and the Modernization of Cosmetics Regulation Act of 2022 (MoCRA)."
    ],
    statutes: [
      {
        name: "FD&C Act",
        citation: "21 U.S.C. § 321 et seq.",
        note: "Primary federal authority governing cosmetics and drugs in interstate commerce."
      },
      {
        name: "MoCRA",
        citation: "P.L. 117-328 (2022)",
        note: "Substantially modernized FDA cosmetics authority, introducing mandatory adverse event reporting, facility registration, product listing, and safety substantiation."
      }
    ],
    keyTakeaways: [
      "Home-based Indian startup targeting U.S. cross-border or domestic import channels.",
      "Core formulation: Glycerin soap base, Cocos Nucifera (Coconut) Oil, Mel (Honey), and Aloe Vera Gel.",
      "Value proposition: Gentle cleansing, skin moisturizing, natural origin, and biodegradable packaging."
    ]
  },
  {
    id: "sec-2",
    number: 2,
    title: "FDA Classification of Soap",
    subtitle: "The Three-Prong Statutory Test & Regulatory Jurisdictions",
    summary: "Under 21 CFR 701.20, traditional soap is exempt from FDA cosmetic regulations and governed by the CPSC. However, products with cosmetic claims are regulated by the FDA.",
    content: [
      "The U.S. Food and Drug Administration (FDA) has a specific regulatory definition of “soap.” A product is considered soap under FDA rules when it meets three cumulative statutory conditions defined in 21 CFR 701.20:",
      "1. Compositional Requirement: The bulk of the nonvolatile matter in the product consists of an alkali salt of fatty acids and the product's detergent properties are due to the alkali-fatty acid compounds.",
      "2. Functional Mechanism: The cleansing action of the product comes exclusively from those soap compounds and not synthetic detergents or extraneous non-soap cleaning agents.",
      "3. Marketing & Labeling: The product is marketed, labeled, and represented solely as soap for cleansing purposes, without any cosmetic claims.",
      "Products that meet all three prongs of this definition are legally exempt from the definition of a 'cosmetic' under Section 201(i) of the FD&C Act. Consequently, traditional soaps are regulated as consumer products by the Consumer Product Safety Commission (CPSC) under the Consumer Product Safety Act (CPSA) and the Federal Hazardous Substances Act (FHSA), rather than as cosmetics by the FDA.",
      "However, a product sold as “soap” can be considered a cosmetic if it does not meet the FDA's definition of soap (e.g., uses synthetic detergents, surfactant blends, or a non-alkali salt base) or if it is marketed with cosmetic claims such as moisturizing, deodorizing, beautifying, or skin-softening benefits."
    ],
    statutes: [
      {
        name: "FDA Soap Definition",
        citation: "21 CFR § 701.20",
        note: "Codifies the 3-part test exempting traditional alkali-fatty acid soaps from cosmetic regulations."
      },
      {
        name: "FD&C Act Cosmetic Definition",
        citation: "21 U.S.C. § 321(i)",
        note: "Defines cosmetics as articles intended to be rubbed, poured, or sprayed on the human body for cleansing, beautifying, or altering appearance."
      },
      {
        name: "CPSC Jurisdiction",
        citation: "15 U.S.C. § 2052(a)(5)",
        note: "True traditional soaps fall under the Consumer Product Safety Commission, not FDA."
      }
    ],
    keyTakeaways: [
      "True soap requires alkali salts of fatty acids (saponified oils + lye).",
      "Traditional soap marketed only for cleansing is governed by CPSC, not FDA.",
      "Adding moisturizing, softening, or deodorizing claims legally converts the product into an FDA-regulated cosmetic."
    ]
  },
  {
    id: "sec-3",
    number: 3,
    title: "Pure Glow Soap and FDA Requirements",
    subtitle: "Application of Federal Rules to Pure Glow Formulation & Marketing",
    summary: "Pure Glow contains glycerin base, coconut oil, honey, and aloe vera, promoting moisturizing and soothing. This legally establishes it as an FDA Cosmetic.",
    content: [
      "Pure Glow is described in the project as a handmade soap containing glycerin soap base, coconut oil, honey and aloe vera gel. The project also describes benefits such as moisturizing and soothing the skin.",
      "Therefore, the exact FDA classification would depend on the product's actual composition and how it is marketed. If the product is a traditional soap marketed only for cleansing, it may fall under the FDA's definition of soap. If it is marketed as a cosmetic product with claims beyond cleansing, it may instead be regulated as a cosmetic.",
      "Regulatory Analysis of Pure Glow's Profile:",
      "A. Base Chemistry: Most commercial 'glycerin soap bases' used by artisanal crafters are 'melt-and-pour' formulations containing synthetic detergents, emulsifiers (such as Sodium Laureth Sulfate, Propylene Glycol, or Sorbitol), rather than pure alkali salts of fatty acids. Unless Pure Glow's glycerin base is 100% saponified vegetable oils without added synthetic surfactants, it fails Prong 1 of 21 CFR 701.20.",
      "B. Express Cosmetic Claims: Pure Glow explicitly highlights that it is 'moisturizing and soothing the skin.' Under longstanding FDA enforcement policy, claims of skin moisturization, softening, and conditioning are cosmetic claims under 21 U.S.C. § 321(i). Because the product is represented for benefits beyond simple cleansing, it fails Prong 3 of the soap exemption.",
      "Conclusion for Pure Glow: Pure Glow Handmade Soap must be categorized and handled as an FDA-Regulated Cosmetic under the FD&C Act and MoCRA for its U.S. market debut."
    ],
    statutes: [
      {
        name: "Cosmetic Representation",
        citation: "21 U.S.C. § 321(i)(1)",
        note: "Articles intended to cleanse, beautify, promote attractiveness, or alter the appearance."
      },
      {
        name: "FDA Regulatory Warning Letters",
        citation: "FDA CFSAN Compliance Precedents",
        note: "FDA routinely issues warning letters to soap makers who promote moisturizing or therapeutic skin benefits while claiming soap exemption."
      }
    ],
    keyTakeaways: [
      "Pure Glow fails the strict 3-prong soap test due to formulation and moisturizing claims.",
      "Must comply with FDA cosmetic standards rather than CPSC consumer product standards.",
      "Subject to Modernization of Cosmetics Regulation Act (MoCRA) oversight."
    ]
  },
  {
    id: "sec-4",
    number: 4,
    title: "Safety Requirements",
    subtitle: "Safety Substantiation, Good Manufacturing & Recordkeeping",
    summary: "Cosmetics must not be adulterated. Pure Glow must substantiate safety under MoCRA Section 608 and maintain clean batch production records.",
    content: [
      "Manufacturers are responsible for ensuring that cosmetic products are safe for consumers under their labeled or customary conditions of use. Products must also be properly labeled and must not be adulterated or misbranded.",
      "Pure Glow should therefore maintain appropriate records concerning its ingredients, production process and product safety. Claims made about the soap should be truthful and should not mislead consumers.",
      "Adulteration Rules (FD&C Act Section 601): A cosmetic is deemed adulterated if it bears or contains any poisonous or deleterious substance which may render it injurious to users, if it consists in whole or in part of any filthy, putrid, or decomposed substance, or if it is produced under insanitary conditions.",
      "Home-Based Production Risks: Because Pure Glow Naturals originates as a home-based artisan enterprise, strict sanitation protocols must be documented. Water quality used in compounding (must be purified/distilled), microbial controls (especially when incorporating natural honey and aloe vera gel which are prone to microbial proliferation), and batch sanitization are vital.",
      "MoCRA Safety Substantiation (FD&C Act § 608): The responsible person must maintain records demonstrating 'adequate substantiation of safety' for each cosmetic product prior to commercial distribution. This includes toxicological profiles of each ingredient and stability/microbiological challenge testing."
    ],
    statutes: [
      {
        name: "Adulterated Cosmetics",
        citation: "21 U.S.C. § 361 (FD&C Act § 601)",
        note: "Strict prohibition against deleterious substances, microbial contamination, or unsanitary production."
      },
      {
        name: "MoCRA Safety Substantiation",
        citation: "21 U.S.C. § 364d (FD&C Act § 608)",
        note: "Mandates that responsible entities maintain documented evidence supporting product safety."
      }
    ],
    keyTakeaways: [
      "No FDA pre-market safety approval exists for cosmetics; safety burden rests 100% on the manufacturer.",
      "Honey and aloe vera are bio-active, water-containing elements that require preservative validation or water activity control to prevent mold/bacterial growth.",
      "Written batch records, sanitation standard operating procedures (SSOPs), and safety dossiers must be retained."
    ]
  },
  {
    id: "sec-5",
    number: 5,
    title: "Labeling Requirements",
    subtitle: "Principal Display Panel (PDP), Information Panel & INCI Declarations",
    summary: "Cosmetic labels must include product identity, net weight (dual metric/oz), responsible entity contact, and full INCI ingredient list in descending order.",
    content: [
      "If Pure Glow is regulated as a cosmetic in the United States, its labeling must meet applicable FDA requirements under 21 CFR Part 701 and the Fair Packaging and Labeling Act (FPLA). Cosmetic labeling generally includes the identity of the product, the net quantity of contents and appropriate ingredient information.",
      "The project's proposed packaging already includes important information such as the brand name, ingredients, usage instructions and tagline.",
      "The brand should ensure that any additional claims, such as claims about moisturizing or skin benefits, are truthful and not misleading. FDA does not generally pre-approve cosmetic products or cosmetic claims before they are marketed.",
      "Mandatory Label Elements under FDA Cosmetic Regulations:",
      "1. Statement of Identity: The common or customary name (e.g., 'Handmade Cleansing Bar' or 'Handmade Moisturizing Soap Bar') prominently displayed on the Principal Display Panel (PDP) parallel to the base.",
      "2. Net Quantity of Contents: Must appear in the lower 30% of the PDP, expressed in both U.S. Customary units (ounces) and Metric units (grams), e.g., 'Net Wt. 3.5 oz (100 g)'.",
      "3. Name and Place of Business: Name and street address of the manufacturer, packer, or distributor. For an Indian manufacturer, this should include an authorized U.S. agent or domestic contact for consumer inquiries and adverse event reporting.",
      "4. Declaration of Ingredients: Placed on an information panel in descending order of predominance by weight using standardized International Nomenclature of Cosmetic Ingredients (INCI) names (e.g., 'Glycerin, Cocos Nucifera (Coconut) Oil, Mel (Honey), Aloe Barbadensis Leaf Juice').",
      "5. MoCRA Adverse Event Contact: A domestic U.S. address, domestic phone number, or electronic contact (website/email) through which the responsible person can receive adverse event reports."
    ],
    statutes: [
      {
        name: "Cosmetic Labeling Regulations",
        citation: "21 CFR Part 701",
        note: "Defines placement, type size, statement of identity, net quantity, and ingredient disclosures."
      },
      {
        name: "Fair Packaging and Labeling Act",
        citation: "15 U.S.C. § 1451 et seq.",
        note: "Requires accurate net contents declarations in dual metric and US customary units."
      },
      {
        name: "MoCRA Contact Labeling",
        citation: "21 U.S.C. § 364c (FD&C Act § 607)",
        note: "Requires cosmetics labels to display domestic contact details for adverse event reporting."
      }
    ],
    keyTakeaways: [
      "Dual units required on PDP: Net Wt. [oz] ([g]).",
      "Ingredients must be listed in descending order by INCI nomenclature.",
      "Must list responsible entity location and an accessible domestic adverse event channel."
    ]
  },
  {
    id: "sec-6",
    number: 6,
    title: "Packaging",
    subtitle: "Eco-Friendly Material Integrity, Protection & Transport Protocols",
    summary: "Pure Glow utilizes butter paper/biodegradable primary wrap, recycled cardboard sleeves, and corrugated bulk shippers, supporting its eco-friendly mission.",
    content: [
      "Pure Glow uses butter paper or biodegradable paper as primary packaging and recycled cardboard or paper sleeves as secondary packaging. Corrugated cardboard cartons are proposed for transportation and bulk handling.",
      "This packaging approach supports the firm's stated focus on sustainability and eco-friendly production.",
      "Regulatory Packaging Evaluation:",
      "A. Primary Packaging (Butter Paper / Biodegradable Paper): The primary wrapper directly contacts the soap formulation. Under 21 CFR § 700.14 and Section 601(d) of the FD&C Act, packaging materials must not leach toxic chemicals, dyes, or plasticizers into the cosmetic product. Butter paper (greaseproof vegetable parchment) is chemically inert, non-reactive with fatty acids and glycerin, and environmentally benign.",
      "B. Secondary Packaging (Recycled Cardboard / Paper Sleeve): The secondary sleeve provides the ideal surface area for the regulatory Information Panel, barcoding, batch number, expiration/period-after-opening (PAO) marks, and mandatory disclosures without compromising the artisanal aesthetic.",
      "C. Bulk Transport Protection (Corrugated Cartons): Transporting artisanal handmade bars from India to the U.S. involves maritime or air cargo spanning 8,000+ miles with significant humidity and temperature differentials. Glycerin is a natural humectant that attracts airborne moisture ('glycerin sweat'). Moisture-barrier outer packaging or silica desiccants in bulk corrugated cartons will prevent deformation and microbial exposure during international ocean freight."
    ],
    statutes: [
      {
        name: "Cosmetic Packaging Container Safety",
        citation: "21 U.S.C. § 361(d)",
        note: "A cosmetic is adulterated if its container is composed in whole or in part of any poisonous or deleterious substance."
      }
    ],
    keyTakeaways: [
      "Biodegradable butter paper aligns with eco-friendly branding and is non-reactive with glycerin.",
      "Secondary kraft sleeve delivers structural real estate for mandatory FDA font sizing and INCI declarations.",
      "Trans-continental freight from India requires climate and moisture control to counteract glycerin sweating."
    ]
  },
  {
    id: "sec-7",
    number: 7,
    title: "Marketing and Advertising",
    subtitle: "Cosmetic vs. Drug Claims, Social Media & FTC Compliance",
    summary: "Instagram marketing must remain strictly cosmetic. Any claims of treating, curing, or preventing disease will legally reclassify the soap as an unapproved drug.",
    content: [
      "Pure Glow plans to use social media platforms such as Instagram to promote the product through product images, ingredient information and educational posts.",
      "When marketing the product in the United States, the company should make sure that its claims are accurate and not misleading. Claims suggesting that a product treats, cures or prevents a disease can cause the product to be regulated as a drug rather than simply as a cosmetic.",
      "The 'Cosmetic vs. Drug' Line in U.S. Law:",
      "Under Section 201(g)(1) of the FD&C Act (21 U.S.C. § 321(g)(1)), an article is a 'drug' if it is intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease, or intended to affect the structure or any function of the body.",
      "Acceptable Cosmetic Claims for Pure Glow:",
      "• 'Gently cleanses and refreshes the skin'",
      "• 'Formulated with moisturizing coconut oil and honey'",
      "• 'Leaves skin feeling soft, smooth, and nourished'",
      "• 'Handmade with natural plant-derived ingredients'",
      "Prohibited Drug Claims (Unless approved under OTC Drug Monograph or NDA):",
      "• ❌ 'Heals or soothes eczema, psoriasis, or dermatitis'",
      "• ❌ 'Antibacterial action that kills acne-causing bacteria'",
      "• ❌ 'Relieves skin inflammation or allergic hives'",
      "• ❌ 'Cellular skin repair and anti-fungal protection'",
      "If Pure Glow's social media captions, website, or packaging make any of these disease-related claims, the FDA will classify the soap as an unapproved new drug, subjecting it to border detention, import alerts, and regulatory seizure."
    ],
    statutes: [
      {
        name: "Drug Definition",
        citation: "21 U.S.C. § 321(g)(1)",
        note: "Articles intended for treatment/prevention of disease or to affect bodily structure/function."
      },
      {
        name: "FTC Act Section 5 & 12",
        citation: "15 U.S.C. §§ 45, 52",
        note: "Federal Trade Commission prohibits unfair, deceptive, or unsubstantiated advertising claims."
      }
    ],
    keyTakeaways: [
      "Keep all Instagram captions and influencer collaborations strictly cosmetic (cleansing, appearance, texture).",
      "Never reference eczema, acne treatment, antibacterial effects, or dermatitis relief.",
      "Social media posts are legally considered product labeling if linked to retail conversion."
    ]
  },
  {
    id: "sec-8",
    number: 8,
    title: "FDA Compliance Checklist",
    subtitle: "U.S. Market Launch Readiness Audit & MoCRA Action Plan",
    summary: "Pure Glow must execute this 6-point statutory checklist prior to shipping commercial consignments to the United States.",
    content: [
      "For a U.S. market launch, Pure Glow should:",
      "1. Determine whether the product legally qualifies as “soap” or as a cosmetic.",
      "2. Confirm that the ingredients and finished product are safe for their intended use.",
      "3. Ensure that product labeling is accurate and not misleading.",
      "4. Provide the required product information on the label if the product is regulated as a cosmetic.",
      "5. Avoid unsupported medical or disease-treatment claims.",
      "6. Ensure that any applicable cosmetic requirements under the Modernization of Cosmetics Regulation Act (MoCRA) are followed if the product is a cosmetic."
    ],
    statutes: [
      {
        name: "MoCRA Small Business Exemption",
        citation: "21 U.S.C. § 364h",
        note: "Entities with average gross annual sales in the US under $1,000,000 for the previous 3-year period qualify as small businesses exempt from certain facility registration rules, but NOT exempt from safety substantiation, adverse event records, or labeling requirements."
      }
    ],
    keyTakeaways: [
      "Classification finalized: Regulated as a Cosmetic.",
      "Safety substantiation file must be assembled before crossing U.S. Customs.",
      "Check MoCRA small business exemption threshold ($1M annual sales).",
      "Dual metric/imperial labels and domestic contact channel are mandatory."
    ]
  },
  {
    id: "sec-9",
    number: 9,
    title: "Conclusion",
    subtitle: "Strategic Summary & Regulatory Roadmap for U.S. Market Entry",
    summary: "Pure Glow Handmade Soap holds strong market appeal with eco-friendly credentials. Achieving U.S. success requires strict adherence to FDA cosmetic labeling and MoCRA safety files.",
    content: [
      "Pure Glow Handmade Soap is positioned as a natural, handmade and eco-friendly personal care product. Its proposed ingredients, sustainable packaging and marketing strategy support its brand identity.",
      "From an FDA perspective, the most important consideration is determining whether Pure Glow qualifies as traditional “soap” under U.S. regulations or whether it is classified as a cosmetic based on its composition and intended use. The company should ensure that its product is safe, properly labeled and marketed with truthful claims before entering the U.S. market.",
      "Strategic Action Summary for Pure Glow Naturals:",
      "1. Accept Cosmetic Classification: Because the soap formulation contains skin-conditioning honey and aloe vera and is marketed for moisturizing, formalize all compliance workflows under the FDA Cosmetic / MoCRA framework.",
      "2. Finalize Dual Unit Packaging: Ensure the recycled paper sleeve features 'Net Wt. 3.5 oz (100 g)' in the lower 30% of the PDP, with complete INCI ingredients and U.S. contact info on the information panel.",
      "3. Establish a Safety Dossier: Document raw material Certificates of Analysis (CoA) from Indian suppliers for the glycerin base, cold-pressed coconut oil, raw honey, and aloe gel.",
      "4. Police Social Media Copy: Review all Instagram campaigns, captions, and retail listings to excise any inadvertent therapeutic, antibacterial, or medical claims.",
      "5. Appoint U.S. Agent: Designate an authorized U.S. agent or domestic distributor to serve as the responsible entity for adverse event reporting and customs clearance."
    ],
    statutes: [
      {
        name: "FDA Import Compliance",
        citation: "21 U.S.C. § 381 (Section 801)",
        note: "Customs and Border Protection (CBP) inspects foreign personal care imports in cooperation with FDA. Non-compliant cosmetics face immediate Notice of FDA Action and refusal of admission."
      }
    ],
    keyTakeaways: [
      "Cosmetic classification provides a clear, compliant path to U.S. retail.",
      "Artisanal credentials and eco-friendly packaging are major market assets when paired with compliant labeling.",
      "Pre-launch compliance prevents costly border detentions and regulatory enforcement."
    ]
  }
];

export const CHECKLIST_DATA: ChecklistItem[] = [
  {
    id: "chk-1",
    category: "Classification",
    title: "Determine Legal Product Classification (Soap vs Cosmetic)",
    fdaRequirement: "Ascertain whether the product qualifies as traditional soap under 21 CFR § 701.20 or as an FDA-regulated cosmetic under 21 U.S.C. § 321(i).",
    status: "compliant",
    regulatoryReference: "21 CFR § 701.20 / FD&C Act § 201(i)",
    guidance: "Traditional soap requires 100% alkali salts of fatty acids and cleansing-only claims. Products with glycerin bases, botanical additives, and moisturizing claims are cosmetics.",
    pureGlowAction: "Pure Glow is designated as an FDA-regulated cosmetic based on its glycerin base, coconut oil, honey, aloe vera, and moisturizing/soothing claims."
  },
  {
    id: "chk-2",
    category: "Safety & Quality",
    title: "Confirm Ingredients & Finished Product Safety Substantiation",
    fdaRequirement: "Maintain records proving adequate substantiation of product safety prior to commercial distribution under MoCRA Section 608.",
    status: "in_progress",
    regulatoryReference: "21 U.S.C. § 364d (MoCRA § 608)",
    guidance: "Compile ingredient toxicological profiles, supplier Certificates of Analysis (CoA), stability testing, and microbial challenge testing (especially for honey and aloe vera).",
    pureGlowAction: "Request batch CoAs from Indian supplier for glycerin base, cold-pressed coconut oil, raw honey, and aloe gel. Conduct water-activity and microbial stability tests."
  },
  {
    id: "chk-3",
    category: "Labeling",
    title: "Verify PDP Identity & Dual Net Quantity of Contents",
    fdaRequirement: "Principal Display Panel must show statement of identity and net quantity in dual US customary (oz) and metric (g) units in the lower 30% of the panel.",
    status: "in_progress",
    regulatoryReference: "21 CFR § 701.11, § 701.13 / FPLA § 4",
    guidance: "Text must be parallel to the base of the package. Font height must meet minimum size guidelines based on total PDP surface area (e.g. at least 1/8 inch for most soap bars).",
    pureGlowAction: "Update sleeve artwork to feature 'Pure Glow Handmade Soap' (Identity) and 'Net Wt. 3.5 oz (100 g)' positioned in lower 30% of front face."
  },
  {
    id: "chk-4",
    category: "Labeling",
    title: "Standardize Full INCI Ingredient Declaration",
    fdaRequirement: "List all ingredients in descending order of predominance by weight using recognized INCI nomenclature on an Information Panel.",
    status: "action_needed",
    regulatoryReference: "21 CFR § 701.3 / FPLA § 5",
    guidance: "Ingredients at 1% or less may be listed in any order after those above 1%. Avoid informal marketing terms in the ingredient block (e.g. write 'Mel', not 'Raw Organic Forest Honey').",
    pureGlowAction: "Formalize ingredient block: 'Ingredients: Glycerin, Cocos Nucifera (Coconut) Oil, Mel (Honey), Aloe Barbadensis Leaf Juice.' Disclose full breakdown of glycerin base if compounded."
  },
  {
    id: "chk-5",
    category: "Marketing & Claims",
    title: "Screen Claims to Avoid Unapproved Drug Claims",
    fdaRequirement: "Strictly omit claims indicating the product diagnoses, treats, cures, or prevents disease, or alters skin structure.",
    status: "compliant",
    regulatoryReference: "21 U.S.C. § 321(g)(1) / FTC Act § 5",
    guidance: "Permitted: Cleansing, skin softening, moisturizing, refreshing. Prohibited: Eczema relief, acne eradication, antibacterial, antifungal, anti-inflammatory.",
    pureGlowAction: "Social media and packaging claims sanitized to: 'Gentle cleansing, hydrating coconut oil, moisturizing honey, and soothing aloe vera.'"
  },
  {
    id: "chk-6",
    category: "MoCRA Compliance",
    title: "MoCRA Small Business Exemption & Mandatory Obligations",
    fdaRequirement: "Determine eligibility under MoCRA Section 612 ($1M gross annual sales small business exemption) while maintaining adverse event reporting and safety files.",
    status: "in_progress",
    regulatoryReference: "21 U.S.C. § 364h (MoCRA § 612) / § 364a",
    guidance: "Small businesses are exempt from FDA facility registration and product listing, but MUST still label a domestic contact for serious adverse events and retain safety records for 3 years.",
    pureGlowAction: "As a small startup, Pure Glow qualifies for the MoCRA small business exemption. Must designate a U.S. representative/channel for consumer adverse event reports."
  }
];

export const INGREDIENT_DOSSIER: IngredientInfo[] = [
  {
    commonName: "Glycerin Soap Base",
    inciName: "Glycerin (and) Aqua (and) Sodium Stearate / Vegetable Soap Base",
    casNumber: "56-81-5 (Glycerin)",
    origin: "Vegetable origin (Coconut/Palm derived)",
    function: "Primary cleansing vehicle & humectant",
    fdaStatus: "Generally Recognized as Safe (GRAS) / Permitted Cosmetic Ingredient",
    cirRating: "Safe as used",
    allergensNotes: "Hypoallergenic. Must verify base is free from undeclared synthetic surfactants if claimed 100% natural.",
    labelPositionRecommendation: "Rank 1 (Highest concentration, typically 60-80% of formulation)"
  },
  {
    commonName: "Coconut Oil",
    inciName: "Cocos Nucifera (Coconut) Oil",
    casNumber: "8001-31-8",
    origin: "Botanical (Kernel of Cocos Nucifera)",
    function: "Skin conditioning agent, emollient, natural lather booster",
    fdaStatus: "Direct food substance / Permitted Cosmetic Ingredient",
    cirRating: "Safe as used",
    allergensNotes: "FDA classifies coconut as a tree nut for food labeling, but rarely sensitizing in topical wash-off soaps. No cosmetic fragrance allergen warnings required.",
    labelPositionRecommendation: "Rank 2 (5-15% of formulation)"
  },
  {
    commonName: "Honey",
    inciName: "Mel (or Honey)",
    casNumber: "8028-66-8",
    origin: "Natural apicultural substance",
    function: "Humectant, skin conditioning, soothing agent",
    fdaStatus: "GRAS Food Substance / Permitted Cosmetic Ingredient",
    cirRating: "Safe as used",
    allergensNotes: "Trace pollen components. Being an unrefined biological agent, raw honey requires strict microbiological bioburden testing (Clostridium botulinum spores / osmophilic yeasts).",
    labelPositionRecommendation: "Rank 3 (1-5% of formulation)"
  },
  {
    commonName: "Aloe Vera Gel",
    inciName: "Aloe Barbadensis Leaf Juice",
    casNumber: "85507-69-3 / 94349-62-9",
    origin: "Botanical (Parenchyma gel of Aloe Barbadensis Miller leaves)",
    function: "Skin protectant, humectant, soothing emollient",
    fdaStatus: "Permitted Cosmetic Ingredient; subject to aloin/anthraquinone limit (<10 ppm)",
    cirRating: "Safe as used",
    allergensNotes: "High water activity (99% moisture) provides fertile ground for microbial growth. Must ensure adequate preservation in water phase or low water activity in cured bar.",
    labelPositionRecommendation: "Rank 4 (1-3% of formulation)"
  }
];

export const MARKETING_CLAIMS_DATABASE: ClaimEvaluation[] = [
  {
    id: "cl-1",
    claimText: "Provides gentle cleansing for daily hand and body wash",
    category: "Cosmetic (Compliant)",
    status: "allowed",
    fdaRationale: "Standard cosmetic cleansing representation. Accurately describes product function without therapeutic overreach.",
    suggestedRevision: "Approved for packaging, website, and Instagram."
  },
  {
    id: "cl-2",
    claimText: "Enriched with coconut oil and honey to moisturize and soothe the skin",
    category: "Cosmetic (Compliant)",
    status: "allowed",
    fdaRationale: "Moisturizing and skin-conditioning claims are fully recognized cosmetic representations under 21 U.S.C. § 321(i).",
    suggestedRevision: "Approved. Affirms cosmetic classification under FDA."
  },
  {
    id: "cl-3",
    claimText: "Handmade eco-friendly soap made with natural ingredients",
    category: "Cosmetic (Compliant)",
    status: "allowed",
    fdaRationale: "Describes production method and composition. Supported by biodegradable paper and recycled packaging.",
    suggestedRevision: "Approved. Keep supplier receipts/formula records substantiating 'natural'."
  },
  {
    id: "cl-4",
    claimText: "Cures eczema, psoriasis, and calms allergic rashes",
    category: "Drug Claim (Violation)",
    status: "prohibited",
    fdaRationale: "Eczema and psoriasis are recognized medical diseases. Claiming cure or treatment converts the soap into an unapproved new drug under FD&C Act Section 505.",
    suggestedRevision: "Replace with: 'Helps comfort dry, delicate skin with soothing aloe vera.'"
  },
  {
    id: "cl-5",
    claimText: "Natural antibacterial shield that kills 99.9% of acne-causing bacteria",
    category: "Drug Claim (Violation)",
    status: "prohibited",
    fdaRationale: "Antibacterial and anti-acne claims are therapeutic drug claims regulated under FDA OTC Topical Antimicrobial and Acne monographs.",
    suggestedRevision: "Replace with: 'Washes away daily impurities and excess surface oil.'"
  },
  {
    id: "cl-6",
    claimText: "100% Chemical-Free Soap",
    category: "Unsubstantiated / High Risk",
    status: "warning",
    fdaRationale: "FTC and FDA discourage 'chemical-free' claims because all matter (water, glycerin, botanical oils) consists of chemicals. Can be penalized as false and misleading under FPLA.",
    suggestedRevision: "Replace with: 'Formulated without synthetic sulfates, artificial dyes, or parabens.'"
  }
];
