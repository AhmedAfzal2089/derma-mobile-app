import { TreatmentOptionsMap } from "../models/treatment-options-map.model";

export const treatmentOptions : TreatmentOptionsMap = {
  "8-point-facelift": {
    name: "8 Point Facelift - Complete Non-Surgical Facelift",
    options: [
      {
        id: "complete-8-point",
        name: "Complete 8-Point Facelift",
        price: "£999",
        description: "Comprehensive non-surgical facelift targeting 8 key facial points for natural enhancement and lifting",
      },
    ],
  },
  "cheek-fillers": {
    name: "Cheek Fillers - Dermal Filler Treatments & Packages",
    options: [
      {
        id: "lip-cheek-chin",
        name: "Lip, Cheek, Chin (0.5-1.0ml)",
        price: "£250",
      },
      { id: "jawline", name: "Jawline (3.0ml)", price: "£450" },
      { id: "tear-trough", name: "Tear Trough", price: "£450" },
      { id: "russian-lip", name: "Russian Lip Technique", price: "£350" },
      { id: "additional-1ml", name: "Additional 1.0ml", price: "£110" },
      {
        id: "lift-reshape",
        name: "Lift & Reshape Package",
        price: "£1,950",
        description: "Includes Endolift + RF Microneedling + Profhilo + 2ml Dermal Filler",
      },
    ],
  },
  "chin-fillers": {
    name: "Chin Filler Treatments",
    options: [
      {
        id: "chin-filler",
        name: "Chin (0.5–1.0 ml)",
        price: "£250",
        description: "Perfect for enhancing chin definition and creating facial balance",
      },
      { id: "additional-1ml", name: "Additional 1.0 ml", price: "£110" },
      { id: "jawline-related", name: "Jawline (3.0 ml)", price: "£450" },
      { id: "lip-cheek-chin", name: "Lip, Cheek, Chin", price: "£250" },
    ],
  },
  "fat-dissolving-injections": {
    name: "Fat Dissolving Injections",
    options: [
      {
        id: "small-area",
        name: "Small Area (chin/jawline)",
        price: "£250 per session",
      },
      {
        id: "medium-area",
        name: "Medium Area (arms, small belly)",
        price: "£350 per session",
      },
      {
        id: "large-area",
        name: "Large Area (abdomen, thighs)",
        price: "£500 per session",
      },
    ],
  },
  "hand-rejuvenation": {
    name: "Hand Rejuvenation Treatments",
    options: [
      {
        id: "dermal-fillers",
        name: "Dermal Fillers (1–2 ml)",
        price: "£300 – £450",
        description: "Immediate restoration of volume and smoother appearance. Duration: 6–12 months",
      },
      {
        id: "prp-therapy",
        name: "PRP Therapy (3 Sessions)",
        price: "£500",
        description: "Gradual improvement in skin quality, texture, and glow. Results last several months",
      },
      {
        id: "pn-therapy",
        name: "Polynucleotide (PN) Therapy (2–3 Sessions)",
        price: "£350 – £500",
        description: "Increased hydration, elasticity, and tissue regeneration. Duration: 3–6 months",
      },
      {
        id: "laser-therapy",
        name: "Laser / Light Therapy (CO₂ / Phototherapy)",
        price: "From £200 per session",
        description: "Reduction in pigmentation, age spots, and wrinkles. Progressive results over weeks",
      },
    ],
  },
  "harmonyca-dermal-filler": {
    name: "HarmonyCA™ Hybrid Filler",
    options: [
      {
        id: "per-syringe",
        name: "Per Syringe",
        price: "£450",
        description: "Instant + Progressive results. Immediate lift with improvement over 3-6 months. Duration: Up to 18 Months",
      },
    ],
  },
  "lip-fillers": {
    name: "Lip Filler Treatments",
    options: [
      {
        id: "standard-lip",
        name: "Standard Lip Filler (0.5–1.0 ml)",
        price: "£250",
      },
      { id: "russian-lip", name: "Russian Lip Technique", price: "£350" },
      { id: "add-on", name: "Add-On (extra 1.0 ml)", price: "£110" },
    ],
  },
  "nctf-skin-revitalisation": {
    name: "NCTF® Skin Revitalisation",
    options: [
      { id: "single-session", name: "1 Session", price: "£180" },
      {
        id: "three-sessions",
        name: "3 Sessions (recommended)",
        price: "£450",
      },
      {
        id: "five-sessions",
        name: "5 Sessions (full course)",
        price: "£700",
      },
    ],
  },
  "tear-trough-filler": {
    name: "Tear Trough & Dermal Filler Treatments",
    options: [
      { id: "tear-trough", name: "Tear Trough Treatment", price: "£450" },
      {
        id: "lip-cheek-chin",
        name: "Lip, Cheek, Chin (0.5-1.0ml)",
        price: "£250",
      },
      { id: "jawline", name: "Jawline (3.0ml)", price: "£450" },
      { id: "russian-lip", name: "Russian Lip Technique", price: "£350" },
      { id: "additional-1ml", name: "Additional 1.0ml", price: "£110" },
    ],
  },
  "anti-wrinkle-treatment": {
    name: "Anti-Wrinkle Treatment (Advanced Anti-Wrinkle Treatment)",
    options: [
      {
        id: "one-area",
        name: "Precision Wrinkle Smoothing – One Area",
        price: "£125",
      },
      {
        id: "three-areas",
        name: "Precision Wrinkle Smoothing – Three Areas",
        price: "£250",
        description: "Forehead Lines, Glabellar Lines, Crow's Feet",
      },
      {
        id: "bunny-lines",
        name: "Bunny Lines (Add-on to Three Areas)",
        price: "+£70",
        description: "Lines on the sides of the nose when smiling or scrunching",
      },
      {
        id: "marionette-lines",
        name: "Marionette Lines (Add-on to Three Areas)",
        price: "+£70",
        description: "Lines running from the corners of the mouth downwards",
      },
      {
        id: "lip-lines",
        name: "Lip Lines / Smoker Lines (Add-on to Three Areas)",
        price: "+£70",
        description: "Fine vertical lines above the upper lip",
      },
      {
        id: "chin-dimpling",
        name: "Chin Dimpling / Orange Peel Chin (Add-on to Three Areas)",
        price: "+£70",
        description: "Uneven texture of the chin",
      },
      {
        id: "eyebrow-lift",
        name: "Eyebrow Lift (Add-on to Three Areas)",
        price: "+£70",
        description: "Subtle elevation of the eyebrows for a refreshed look",
      },
      {
        id: "gummy-smile",
        name: "Gummy Smile Correction (Add-on to Three Areas)",
        price: "+£70",
        description: "Reduces excessive gum exposure when smiling",
      },
      {
        id: "nasal-tip-lift",
        name: "Nasal Tip Lift / Nose Wrinkle Relaxation (Add-on to Three Areas)",
        price: "+£70",
        description: "Softens lines on the nose",
      },
      {
        id: "masseter",
        name: "Masseter Reduction / Jaw Slimming",
        price: "£300",
        description: "Reduces prominence of jaw muscles for facial contouring",
      },
      {
        id: "neckbands",
        name: "Neck Bands / Platysmal Bands",
        price: "£300",
        description: "Horizontal or vertical neck lines",
      },
      {
        id: "hyperhidrosis",
        name: "Excessive Sweating (Hyperhidrosis)",
        price: "£350",
        description: "Underarms, hands, or feet",
      },
      {
        id: "migraines",
        name: "Migraines / Tension Headaches",
        price: "£500",
        description: "Targeted injections for pain relief",
      },
      {
        id: "bruxism",
        name: "Teeth Grinding / Bruxism",
        price: "£300",
        description: "Relaxing jaw muscles",
      },
      {
        id: "tmj-relief",
        name: "TMJ Tension Relief",
        price: "£300",
        description: "Jaw discomfort reduction",
      },
    ],
  },
  "dermal-fillers": {
    name: "Dermal Fillers",
    options: [
      {
        id: "lip-cheek-chin",
        name: "Lip, Cheek, Chin (0.5–1 ml)",
        price: "£250",
      },
      { id: "add-on", name: "Add-On (Additional 1.0 ml)", price: "£110" },
      { id: "jawline", name: "Jawline (3.0 ml)", price: "£450" },
      { id: "tear-trough", name: "Tear Trough", price: "£450" },
      { id: "russian-lip", name: "Russian Lip Technique", price: "£350" },
    ],
  },
  "non-surgical-rhinoplasty": {
    name: "Non-Surgical Rhinoplasty",
    options: [{ id: "rhinoplasty", name: "Non-Surgical Rhinoplasty", price: "£450" }],
  },
  "polynucleotides-skin-rejuvenation-treatment": {
    name: "Polynucleotide (PN) Treatments - Face",
    options: [
      { id: "face-1", name: "Face - 1 Session", price: "£190" },
      { id: "face-2", name: "Face - 2 Sessions", price: "£350" },
      { id: "face-3", name: "Face - 3 Sessions", price: "£500" },
    ],
  },
  "polynucleotides-hair-loss-treatment": {
    name: "Polynucleotide (PN) Treatments - Hair",
    options: [
      { id: "hair-1", name: "Hair Restoration - 1 Session", price: "£250" },
      { id: "hair-2", name: "Hair Restoration - 2 Sessions", price: "£450" },
      { id: "hair-3", name: "Hair Restoration - 3 Sessions", price: "£600" },
    ],
  },
  "iv-drips": {
    name: "PRP Therapy & Exosome Therapy",
    options: [
      { id: "prp-face", name: "PRP Full Face (3 Sessions)", price: "£500" },
      {
        id: "prp-eyes",
        name: "PRP Under-Eye Area (3 Sessions)",
        price: "£300",
      },
      { id: "prp-hair", name: "PRP Hair (3 Sessions)", price: "£500" },
      {
        id: "exosome-3",
        name: "Exosome Therapy (3 Sessions)",
        price: "£500",
      },
      {
        id: "exosome-5",
        name: "Exosome Therapy (5 Sessions)",
        price: "£700",
      },
    ],
  },
  profhilo: {
    name: "Profhilo® Skin Booster",
    options: [
      { id: "profhilo-1", name: "1 Session", price: "£300" },
      { id: "profhilo-2", name: "2 Sessions", price: "£550" },
      { id: "profhilo-3", name: "3 Sessions", price: "£700" },
    ],
  },
  endolift: {
    name: "Endolift® (Skin & Tissue Rejuvenation)",
    options: [
      { id: "one-area", name: "One Area", price: "£800" },
      { id: "full-face", name: "Full Face", price: "£1,600" },
      {
        id: "upper-face",
        name: "Upper Face / Malar Bags (Under Eyes)",
        price: "£1,500",
      },
      { id: "upper-arms", name: "Upper Arms", price: "£1,800" },
      { id: "abdomen", name: "Abdomen / Tummy", price: "£2,000" },
      { id: "thighs", name: "Thighs / Other Body Areas", price: "£2,000" },
    ],
  },
  "co2-laser": {
    name: "CO₂ Fractional Laser",
    options: [
      { id: "patch-test", name: "Patch Test", price: "£50" },
      {
        id: "upper-face",
        name: "Single – One Area Upper Face",
        price: "£700",
      },
      {
        id: "lower-face",
        name: "Single – One Area Lower Face",
        price: "£700",
      },
      {
        id: "body-limb",
        name: "Single – Body (per limb)",
        price: "£700",
      },
      {
        id: "full-face-single",
        name: "Single – Full Face",
        price: "£1,250",
      },
      {
        id: "full-face-3",
        name: "3 Sessions – Full Face",
        price: "£2,500",
      },
    ],
  },
  microneedling: {
    name: "Microneedling",
    options: [
      {
        id: "full-face",
        name: "Single Treatment – Full Face",
        price: "£450",
      },
      {
        id: "scars-stretch",
        name: "Single Treatment – Scars & Stretch Marks (One Area)",
        price: "£350",
      },
      {
        id: "full-face-3",
        name: "3 Sessions – Full Face",
        price: "£1,250",
      },
    ],
  },
  "skinpen-microneedling": {
    name: "RF Microneedling",
    options: [
      {
        id: "full-face",
        name: "Single Treatment – Full Face",
        price: "£450",
      },
      {
        id: "scars-stretch",
        name: "Single Treatment – Scars & Stretch Marks (One Area)",
        price: "£350",
      },
      {
        id: "full-face-3",
        name: "3 Sessions – Full Face",
        price: "£1,250",
      },
    ],
  },
  "quad-laser-hair-removal": {
    name: "Quad Laser Hair Removal - Face",
    options: [
      { id: "upper-lip", name: "Upper Lip", price: "£45 (6 for £225)" },
      { id: "chin", name: "Chin", price: "£50 (6 for £250)" },
      { id: "lip-chin", name: "Lip & Chin", price: "£75 (6 for £375)" },
      { id: "sides-face", name: "Sides of Face", price: "£60 (6 for £300)" },
      { id: "full-face", name: "Full Face", price: "£120 (6 for £600)" },
      { id: "neck", name: "Neck (Front/Back)", price: "£60 (6 for £300)" },
      {
        id: "face-neck",
        name: "Full Face & Neck",
        price: "£160 (6 for £800)",
      },
    ],
  },
  "profusion-hydrafacial": {
    name: "ProFusion HydraFacial - Advanced Skin Rejuvenation",
    options: [
      {
        id: "signature-rf",
        name: "Signature + RF (40 min)",
        price: "£150",
        description: "Cleanse, exfoliate, extraction, hydration + RF tightening. Package: £750 for 6 sessions",
      },
      {
        id: "deluxe-rf",
        name: "Deluxe + RF (50 min)",
        price: "£180",
        description: "Signature + custom booster serum + LED therapy + RF. Package: £900 for 6 sessions",
      },
      {
        id: "platinum-rf",
        name: "Platinum + RF (70 min)",
        price: "£210",
        description: "Deluxe + lymphatic drainage + advanced RF lifting. Package: £1,050 for 6 sessions",
      },
      {
        id: "elite-cellular",
        name: "Elite – Cellular Repair & Lift (75 min)",
        price: "£250",
        description: "Platinum + enhanced serums + deep RF collagen stimulation. Package: £1,250 for 6 sessions",
      },
    ],
  },
  "v-hacker": {
    name: "V-Hacker Biohacking Treatment",
    options: [
      {
        id: "single-session",
        name: "1 Session",
        price: "£300",
        description: "Advanced biohacking treatment with peptides and exosomal delivery",
      },
      {
        id: "two-sessions",
        name: "2 Sessions",
        price: "£500",
        description: "Recommended course for enhanced results",
      },
      {
        id: "three-sessions",
        name: "3 Sessions",
        price: "£700",
        description: "Complete course for optimal cellular-level results",
      },
    ],
  },
  revitalizing: {
    name: "Hair+ Revitalizing Treatment",
    options: [
      {
        id: "four-session-package",
        name: "4-Session Package",
        price: "£600",
        description: "Complete treatment course for optimal hair restoration",
      },
      {
        id: "single-session",
        name: "Single Session",
        price: "£180",
        description: "Individual treatment session",
      },
      {
        id: "maintenance-session",
        name: "Maintenance Session",
        price: "£150",
        description: "After initial package completion",
      },
      {
        id: "with-prp",
        name: "With PRP Enhancement",
        price: "+£200",
        description: "Enhanced results with PRP therapy",
      },
      {
        id: "with-light-therapy",
        name: "With Light Therapy",
        price: "+£100",
        description: "Additional light therapy for better results",
      },
    ],
  },
  exosignal: {
    name: "ExoSignal™ Hair Treatment",
    options: [
      {
        id: "complete-course",
        name: "Complete Course (4 sessions)",
        price: "£700",
        description: "Full treatment course using synthetic exosome technology",
      },
      {
        id: "single-session",
        name: "Single Session",
        price: "£200",
        description: "Individual treatment session",
      },
      {
        id: "maintenance-session",
        name: "Maintenance Session",
        price: "£180",
        description: "After initial course completion",
      },
    ],
  },
  exo: {
    name: "EXO–NAD Skin Longevity Peeling",
    options: [
      {
        id: "single-session",
        name: "Single Session",
        price: "£380",
        description: "Multi-step peel with synthetic exosome technology",
      },
      {
        id: "three-sessions",
        name: "Course of 3 Sessions",
        price: "£1,000",
        description: "Recommended course for optimal results",
      },
      {
        id: "six-sessions",
        name: "Course of 6 Sessions",
        price: "£1,900",
        description: "Complete rejuvenation program",
      },
    ],
  },
  "skinfill-bacio": {
    name: "Skinfill™ Bacio Lip Enhancement",
    options: [
      {
        id: "single-session",
        name: "Single Session",
        price: "£230",
        description: "Professional lip booster with Vitamin B12 and HA",
      },
      {
        id: "three-sessions",
        name: "Course of 3 Sessions",
        price: "£600",
        description: "Complete treatment course (Save £90)",
      },
    ],
  },
  "skin-boosters": {
    name: "Skin Boosters",
    options: [
      { id: "profhilo-1", name: "Profhilo - 1 Session", price: "£300" },
      { id: "profhilo-2", name: "Profhilo - 2 Sessions", price: "£550" },
      { id: "profhilo-3", name: "Profhilo - 3 Sessions", price: "£700" },
      { id: "nctf-1", name: "NCTF - 1 Session", price: "£180" },
      { id: "nctf-3", name: "NCTF - 3 Sessions", price: "£450" },
      { id: "nctf-5", name: "NCTF - 5 Sessions", price: "£700" },
    ],
  },
  "profusion-hydrafacial-package": {
    name: "ProFusion HydraFacial Packages",
    options: [
      {
        id: "signature-rf-single",
        name: "Signature + RF (Single Session)",
        price: "£150",
        description: "40 min - Cleanse, exfoliate, extraction, hydration + RF tightening",
      },
      {
        id: "signature-rf-package",
        name: "Signature + RF (6 Sessions)",
        price: "£750",
        description: "40 min sessions - Complete package",
      },
      {
        id: "deluxe-rf-single",
        name: "Deluxe + RF (Single Session)",
        price: "£180",
        description: "50 min - Signature + custom booster serum + LED therapy + RF",
      },
      {
        id: "deluxe-rf-package",
        name: "Deluxe + RF (6 Sessions)",
        price: "£900",
        description: "50 min sessions - Complete package",
      },
      {
        id: "platinum-rf-single",
        name: "Platinum + RF (Single Session)",
        price: "£210",
        description: "70 min - Deluxe + lymphatic drainage + advanced RF lifting",
      },
      {
        id: "platinum-rf-package",
        name: "Platinum + RF (6 Sessions)",
        price: "£1,050",
        description: "70 min sessions - Complete package",
      },
      {
        id: "elite-cellular-single",
        name: "Elite – Cellular Repair & Lift (Single Session)",
        price: "£250",
        description: "75 min - Platinum + enhanced serums + deep RF collagen stimulation",
      },
      {
        id: "elite-cellular-package",
        name: "Elite – Cellular Repair & Lift (6 Sessions)",
        price: "£1,250",
        description: "75 min sessions - Complete package",
      },
    ],
  },
  "lift-reshape-package": {
    name: "Lift & Reshape Treatment Package",
    options: [
      {
        id: "complete-package",
        name: "Complete Lift & Reshape Package",
        price: "£2,500  ",
        description: "10-12 week program: Endolift + 3x RF Microneedling + 2x Profhilo + 2ml Dermal Filler + Facial Scan",
      },
    ],
  },
  "correct-rejuvenate-package": {
    name: "Correct & Rejuvenate Treatment Package",
    options: [
      {
        id: "complete-package",
        name: "Complete Correct & Rejuvenate Package",
        price: "£1,950  ",
        description:
          "8-12 week program: 3x CO₂ Laser + 3x Exosome Therapy + 3x Polynucleotide + 3 Area Neuro-Modulator + AI Facial Mapping",
      },
    ],
  },
  "restore-prevent-package": {
    name: "Restore & Prevent Hair Loss Package",
    options: [
      {
        id: "complete-package",
        name: "Complete Hair Restoration Package",
        price: "£1,190  ",
        description: "16-18 week program: 3x Polynucleotides + 4x PRP Hair + 5x Hair+ Treatments + 4x Phototherapy + ExoHair Kit",
      },
      {
        id: "with-exosignal",
        name: "Package + 4x Exo Signal Hair Treatments",
        price: "£1,590  ",
        description: "Complete package with additional 4x Exo Signal treatments for enhanced growth stimulation",
      },
    ],
  },
  "prescription-skincare": {
    name: "Prescription Skincare",
    options: [
      {
        id: "consultation",
        name: "Initial Consultation & Assessment",
        price: "£60",
        description: "Professional skin assessment and treatment plan (deductible from treatment costs)",
      },
      {
        id: "topical-formulations",
        name: "Topical Formulations",
        price: "From £40",
        description: "Custom prescription topical treatments",
      },
      {
        id: "oral-medications",
        name: "Oral Medications",
        price: "From £25",
        description: "Prescription oral therapies",
      },
      {
        id: "combination-therapy",
        name: "Combination Therapy",
        price: "From £65",
        description: "Combined topical and oral treatment approach",
      },
      {
        id: "follow-up",
        name: "Follow-up Consultations",
        price: "£30",
        description: "Regular monitoring and treatment adjustments",
      },
    ],
  },
  "weight-loss": {
    name: "Weight Loss Treatments",
    options: [
      {
        id: "consultation-assessment",
        name: "Initial Consultation & Assessment",
        price: "Consultation Required",
        description: "Comprehensive assessment with clinical team to determine your personalized treatment plan and pricing",
      },
      {
        id: "treatment-plan",
        name: "Personalized Treatment Plan",
        price: "Pricing Determined After Consultation",
        description: "Individual weight loss modulator injection plan tailored to your needs and goals",
      },
    ],
  },
  ablative: {
    name: "Ablative Laser Treatments",
    options: [
      {
        id: "consultation",
        name: "Initial Consultation & Assessment",
        price: "Consultation Required",
        description: "Comprehensive skin assessment and treatment planning",
      },
      {
        id: "co2-single-area",
        name: "CO₂ Fractional Laser - Single Area",
        price: "Consultation Required",
        description: "Pricing varies by treatment area and intensity",
      },
      {
        id: "co2-full-face",
        name: "CO₂ Fractional Laser - Full Face",
        price: "Consultation Required",
        description: "Complete facial resurfacing treatment",
      },
      {
        id: "co2-multiple-sessions",
        name: "Multiple Session Course",
        price: "Consultation Required",
        description: "Enhanced results with course of treatments",
      },
      {
        id: "aftercare-products",
        name: "Aftercare Products & Follow-up",
        price: "Included",
        description: "Required post-treatment care and monitoring",
      },
    ],
  },
  "prescription-hair": {
    name: "Prescription Hair Treatments",
    options: [
      {
        id: "hair-consultation",
        name: "Initial Hair Assessment",
        price: "Consultation Required",
        description: "Comprehensive hair loss consultation and treatment planning",
      },
      {
        id: "topical-treatments",
        name: "Prescription Topical Solutions",
        price: "Consultation Required",
        description: "Custom topical hair restoration treatments",
      },
      {
        id: "oral-therapies",
        name: "Oral Hair Therapies",
        price: "Consultation Required",
        description: "Prescription oral medications for hair health",
      },
      {
        id: "injection-treatments",
        name: "Injectable Hair Treatments",
        price: "Consultation Required",
        description: "Professional injectable therapies for hair restoration",
      },
      {
        id: "combination-plan",
        name: "Combination Treatment Plan",
        price: "Consultation Required",
        description: "Multi-modal approach combining various therapies",
      },
      {
        id: "follow-up-monitoring",
        name: "Follow-up & Monitoring",
        price: "Consultation Required",
        description: "Regular assessment and treatment adjustments",
      },
    ],
  },
};
