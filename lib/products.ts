export type Category = "Mattresses" | "Bio Mattresses" | "Orthopedic" | "Toppers" | "Pillows"

export interface Product {
  slug: string
  nameGe: string
  nameEn: string
  category: Category
  categoryGe: string
  image: string
  priceRange: string
  descEn: string
  descGe: string
  sizes: { size: number; price: number }[]
  fixedPrice?: number
  contactForPrice?: boolean
  onSale?: boolean
}

const cat = (c: Category): string => {
  const map: Record<Category, string> = {
    Mattresses: "მატრასები",
    "Bio Mattresses": "ბიო მატრასები",
    Orthopedic: "ორთოპედიული",
    Toppers: "დამარბილებელი",
    Pillows: "ბალიშები",
  }
  return map[c]
}

const s = (arr: [number, number][]) => arr.map(([size, price]) => ({ size, price }))

const rawProducts: Omit<Product, "image">[] = [
  {
    slug: "bio-eco",
    nameGe: "ბიო ეკო",
    nameEn: "Bio Eco",
    category: "Bio Mattresses",
    categoryGe: cat("Bio Mattresses"),
    priceRange: "500–900 ₾",
    descEn:
      "Made on pocket springs. Sides reinforced with 8cm/24 DNS foam belt. Top surface uses batting. Additional 2cm/30 DNS soft foam on each side. Anti-allergenic fabric.",
    descGe:
      "შეფუთული ზამბარები. 8სმ/24 DNS ღრუბლის სარტყელი. ზედაპირი ნაბდით. ანტიალერგიული ქსოვილი.",
    sizes: s([
      [80, 500], [90, 530], [100, 560], [110, 580], [120, 620], [130, 650],
      [140, 700], [150, 750], [160, 800], [170, 830], [180, 870], [190, 900], [200, 900],
    ]),
  },
  {
    slug: "bio-memory-orthopedic",
    nameGe: "ბიო მემორი ორთოპედიული",
    nameEn: "Bio Memory Orthopedic",
    category: "Orthopedic",
    categoryGe: cat("Orthopedic"),
    priceRange: "520–1100 ₾",
    descEn:
      "Pocket springs. Side foam 8cm/24 DNS. One side: Memory Foam anatomic. Other side: summer. Cotton-blend, anti-allergenic, anti-bacterial.",
    descGe:
      "შეფუთული ზამბარები. ერთი მხარე: Memory Foam. მეორე: ზაფხულის. ბამბის, ანტიბაქტერიული.",
    sizes: s([
      [80, 520], [90, 550], [100, 600], [110, 650], [120, 700], [130, 750],
      [140, 800], [150, 850], [160, 900], [170, 950], [180, 1000], [190, 1100], [200, 1100],
    ]),
  },
  {
    slug: "gran-softi",
    nameGe: "გრან სოფთი",
    nameEn: "Gran Softi",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn: "Springless, excellent orthopedic properties. Core: 60 DNS granular foam. Double-sided use.",
    descGe: "უზამბარო. 60 DNS გრანულის ღრუბელი. ორმხრივი გამოყენება.",
    sizes: s([
      [80, 410], [90, 430], [100, 460], [110, 490], [120, 530], [130, 560],
      [140, 560], [150, 590], [160, 590], [170, 650], [180, 650], [190, 700], [200, 730],
    ]),
  },
  {
    slug: "eco-tobra",
    nameGe: "ეკო ტობრა",
    nameEn: "Eco Tobra",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "450–830 ₾",
    descEn: "Pocket spring mattress. Side belt 8cm/24 DNS. Batting surface. Orthopedic. Anti-allergenic fabric.",
    descGe: "შეფუთული ზამბარები. ნაბდის ზედაპირი. ორთოპედიული. ანტიალერგიული.",
    sizes: s([
      [80, 450], [90, 480], [100, 510], [110, 530], [120, 570], [130, 620],
      [140, 670], [150, 700], [160, 730], [170, 770], [180, 800], [190, 830], [200, 830],
    ]),
  },
  {
    slug: "elegance",
    nameGe: "ელეგანსი",
    nameEn: "Elegance",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "550–1000 ₾",
    descEn: "Premium pocket spring mattress with superior comfort layers for a luxurious sleep experience.",
    descGe: "პრემიუმ მატრასი მაღალი ხარისხის შეფუთული ზამბარებით.",
    sizes: s([
      [80, 550], [100, 620], [120, 700], [140, 800], [150, 850], [160, 900], [180, 950], [200, 1000],
    ]),
  },
  {
    slug: "comfort",
    nameGe: "კომფორტი",
    nameEn: "Comfort",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn: "Comfortable pocket spring mattress with foam layers for everyday use.",
    descGe: "კომფორტული მატრასი შეფუთულ ზამბარებზე ყოველდღიური გამოყენებისთვის.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "mattress-topper",
    nameGe: "მატრასის დამარბილებელი",
    nameEn: "Mattress Topper",
    category: "Toppers",
    categoryGe: cat("Toppers"),
    priceRange: "150–320 ₾",
    descEn: "Soft topper to add comfort and extend the life of your existing mattress.",
    descGe: "დამარბილებელი — ამატებს კომფორტს და ახანგრძლივებს მატრასის სიცოცხლეს.",
    sizes: s([
      [80, 150], [100, 180], [120, 210], [140, 240], [150, 260], [160, 280], [180, 300], [200, 320],
    ]),
  },
  {
    slug: "memory-therapy-anatomic",
    nameGe: "მემორი თერაპია-ანატომიური",
    nameEn: "Memory Therapy Anatomic",
    category: "Orthopedic",
    categoryGe: cat("Orthopedic"),
    priceRange: "410–730 ₾",
    descEn: "Anatomic memory foam mattress with pocket springs for spinal support and pressure relief.",
    descGe: "ანატომიური მემორი ქაფის მატრასი ხერხემლის მხარდაჭერისთვის.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "orthopedic-pillow",
    nameGe: "ორთოპედიული ბალიში",
    nameEn: "Orthopedic Pillow",
    category: "Pillows",
    categoryGe: cat("Pillows"),
    priceRange: "200 ₾",
    descEn: "Ergonomic orthopedic pillow for proper neck and spine alignment during sleep.",
    descGe: "ერგონომიული ბალიში კისრისა და ხერხემლის სწორი პოზიციისთვის.",
    sizes: [],
    fixedPrice: 200,
  },
  {
    slug: "planeta",
    nameGe: "პლანეტა",
    nameEn: "Planeta",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "300–800 ₾",
    descEn: "Versatile mattress for all sleep positions with balanced support and comfort.",
    descGe: "მრავალმხრივი მატრასი ყველა ძილის პოზიციისთვის.",
    sizes: s([
      [80, 300], [100, 380], [120, 460], [140, 560], [150, 600], [160, 650], [180, 730], [200, 800],
    ]),
  },
  {
    slug: "prestige",
    nameGe: "პრესტიჟი",
    nameEn: "Prestige",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn: "Prestigious pocket spring mattress with premium comfort layers.",
    descGe: "პრესტიჟული მატრასი შეფუთულ ზამბარებზე პრემიუმ კომფორტის ფენებით.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "smarti",
    nameGe: "სმარტი",
    nameEn: "Smarti",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn: "Smart pocket spring mattress with intelligent support zones and soft comfort layers.",
    descGe: "სმარტ მატრასი ჭკვიანი მხარდაჭერის ზონებით.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "softmore",
    nameGe: "სოფთმორის მატრასი",
    nameEn: "Softmore",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–700 ₾",
    descEn: "Our most popular model on sale. Exceptionally soft feel with durable spring core.",
    descGe: "ჩვენი ყველაზე პოპულარული მოდელი ფასდაკლებით.",
    onSale: true,
    sizes: s([
      [80, 410], [100, 460], [120, 520], [140, 580], [150, 610], [160, 640], [180, 670], [200, 700],
    ]),
  },
  {
    slug: "ultra-bag",
    nameGe: "ულტრა ბეგ",
    nameEn: "Ultra Bag",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn: "Rolled and vacuum-packed for easy delivery — expands to full size within hours.",
    descGe: "გახვეული და ვაკუუმირებული — რამდენიმე საათში ივსება.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "focus",
    nameGe: "ფოკუსი",
    nameEn: "Focus",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn: "Targeted orthopedic support with medium firmness and pressure relief.",
    descGe: "მიზნობრივი ორთოპედიული მხარდაჭერა საშუალო სიხისტით.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "bio-eco-premium",
    nameGe: "ბიო ეკო პრემიუმი",
    nameEn: "Bio Eco Premium",
    category: "Bio Mattresses",
    categoryGe: cat("Bio Mattresses"),
    priceRange: "Contact for price",
    descEn: "Premium Bio Eco variant — contact us for custom sizing and pricing.",
    descGe: "პრემიუმ ბიო ეკო — დაგვიკავშირდით ზომისა და ფასისთვის.",
    sizes: [],
    contactForPrice: true,
  },
]

const imageMap: Record<string, string> = {
  "bio-eco": "/products/bio-mattress.png",
  "bio-memory-orthopedic": "/products/memory-foam.png",
  "gran-softi": "/products/soft-mattress.png",
  "eco-tobra": "/products/classic-mattress.png",
  elegance: "/products/premium-mattress.png",
  comfort: "/products/soft-mattress.png",
  "mattress-topper": "/products/topper.png",
  "memory-therapy-anatomic": "/products/memory-foam.png",
  "orthopedic-pillow": "/products/pillow.png",
  planeta: "/products/classic-mattress.png",
  prestige: "/products/premium-mattress.png",
  smarti: "/products/classic-mattress.png",
  softmore: "/products/soft-mattress.png",
  "ultra-bag": "/products/rolled-mattress.png",
  focus: "/products/classic-mattress.png",
  "bio-eco-premium": "/products/bio-mattress.png",
}

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  image: imageMap[p.slug] ?? "/products/classic-mattress.png",
}))

export const WHATSAPP_URL = "https://wa.me/995555591306"
export const PHONE = "+995 555 59 13 06"
export const PHONE_TEL = "tel:+995555591306"
