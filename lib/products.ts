export type Category = "Mattresses" | "Bio Mattresses" | "Orthopedic" | "Premium" | "Toppers" | "Pillows"

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
    Premium: "პრემიუმი",
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
      "Orthopedic pocket spring mattress. Side foam belt: 8cm / 24 DNS — bonded to springs. Batting: 3000g/m² / 2cm — bonded both sides. Both top and bottom surfaces feature an additional 2cm / 28 DNS soft elastic foam (Turkish Soft). Anti-allergenic, anti-bacterial, cotton-blend fabric quilted with foam and synthetic fiber. Hotel line — engineered for weight distribution. Thickness: 26–27cm. Double-sided use.",
    descGe:
      "ორთოპედიული მატრასი შეფუთული ზამბარებით (პოკეტ სპრინგ სისტემა). გვერდითა ღრუბელი — 8სმ სისქის, 16სმ სიმაღლის, 24 DNS — მიწებებულია ზამბარებზე. ნაბადი (ქეჩა) — 3000გრ/მ², 2სმ — ორივე მხრიდან გადაწებებული. ზედა და ქვედა ორივე მხარეს დამატებულია 2სმ-იანი ელასტიური ღრუბელი 28 DNS (თურქული სოფტი). ქსოვილი ანტიალერგიული, ანტიბაქტერიული, ბამბის შემცველობის, მოქსოვილია თელასის ღრუბელთან და სინთიფონთან ერთად. სასტუმროს ხაზი — წონაზე გათვლილი. სისქე 26–27სმ. გამოიყენება ორივე მხარე.",
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
      "Anatomic-orthopedic pocket spring mattress. Side foam belt: 8cm / 24 DNS. Batting: 3000g/m² / 2cm — both sides. One side: 5cm / 50 DNS memory foam — soft, body-contouring (anatomic side). Other side: 2cm / 28 DNS elastic foam — firmer (summer side). Anti-allergenic, anti-bacterial, cotton-blend fabric. Winter/summer sides. Thickness: 28–29cm.",
    descGe:
      "ანატომიურ-ორთოპედიული მატრასი შეფუთული ზამბარებით (პოკეტ სპრინგ სისტემა). გვერდითა ღრუბელი — 8სმ სისქის, 16სმ სიმაღლის, 24 DNS — მიწებებულია ზამბარებზე. ნაბადი (ქეჩა) — 3000გრ/მ², 2სმ — ორივე მხრიდან გადაწებებული. ერთ მხარეზე 5სმ სისქის, 50 DNS მემორი ღრუბელი — ფაფუკი, ინარჩუნებს სხეულის ფორმას (ანატომიური მხარე). მეორე მხარეს 2სმ, 28 DNS ელასტიური ღრუბელი — უფრო მკვრივი. ქსოვილი ანტიალერგიული, ანტიბაქტერიული, ბამბის შემცველობის, მოქსოვილია თელასის ღრუბელთან და სინთიფონთან ერთად. ზამთარ-ზაფხულის მხარეები. სისქე 28–29სმ.",
    sizes: s([
      [80, 520], [90, 550], [100, 600], [110, 650], [120, 700], [130, 750],
      [140, 800], [150, 850], [160, 900], [170, 950], [180, 1000], [190, 1100], [200, 1100],
    ]),
  },
  {
    slug: "eco-tobra",
    nameGe: "ეკო ტობრა",
    nameEn: "Eco Tobra",
    category: "Orthopedic",
    categoryGe: cat("Orthopedic"),
    priceRange: "450–830 ₾",
    descEn:
      "Orthopedic pocket spring mattress. Side foam belt: 8cm / 24 DNS — bonded to springs. Batting: 3000g/m² / 2cm — bonded both sides. One side features an additional 4cm / 60 DNS granular foam layer. Fabric is anti-allergenic, anti-bacterial, cotton-blend, quilted with foam padding and synthetic fiber. Side fabric: velvet (barkhat). Thickness: 25cm. Both sides firm with different densities.",
    descGe:
      "ორთოპედიული მატრასი შეფუთული ზამბარებით (პოკეტ სპრინგ სისტემა). გვერდითა ღრუბელი — 8სმ სისქის, 16სმ სიმაღლის, 24 DNS — მიწებებულია ზამბარებზე. ნაბადი (ქეჩა) — 3000გრ/მ², 2სმ — ორივე მხრიდან გადაწებებული. ერთ მხარეზე დამატებულია 4სმ სისქის, 60 DNS გრანულის მყარი ღრუბელი. ქსოვილი ანტიალერგიული, ანტიბაქტერიული, ბამბის შემცველობის, მოქსოვილია თელასის ღრუბელთან და სინთიფონთან ერთად. გვერდითა ქსოვილი ბარხატი (ხავერდი). სისქე 25სმ. ორივე მხარე მკვრივია სხვადასხვა სიმკვრივეებით.",
    sizes: s([
      [80, 450], [90, 480], [100, 510], [110, 530], [120, 570], [130, 620],
      [140, 670], [150, 700], [160, 730], [170, 770], [180, 800], [190, 830], [200, 830],
    ]),
  },
  {
    slug: "elegance",
    nameGe: "ელეგანსი",
    nameEn: "Elegance",
    category: "Premium",
    categoryGe: cat("Premium"),
    priceRange: "550–1000 ₾",
    descEn:
      "Premium orthopedic pocket spring mattress. Side foam belt: 8cm / 24 DNS. Batting: 2cm / 3000g/m² both sides. Comfort layer in separate topper: 4cm / 60 DNS granular foam + 2cm / 28 DNS Turkish Soft foam. Side fabric: velvet. Top and bottom fabric: 400g/m², anti-allergenic, anti-bacterial, quilted with synthetic fiber, foam padding and batting. Firm orthopedic. Thickness: 30cm. Premium quality.",
    descGe:
      "პრემიუმ ორთოპედიული მატრასი შეფუთული ზამბარებით. გვერდითა ღრუბელი — 8სმ სისქის, 24 DNS. ნაბადი (ქეჩა) — 2სმ სისქის, 3000გრ/მ², ორივე მხარეს. გამოყოფილ ლეიბში: 4სმ 60 DNS გრანულის ღრუბელი + 2სმ 28 DNS სოფტის ღრუბელი. გვერდითა ქსოვილი ბარხატი. ზედა და ქვედა ქსოვილი 400გრ/მ², ანტიალერგიული, ანტიბაქტერიული, მოქსოვილია სინთიფონთან, თელასთან და ღრუბელთან ერთად. მკვრივი ორთოპედიული. სისქე 30სმ. პრემიუმ ხარისხი.",
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
    descEn:
      "Semi-soft orthopedic Bonnell spring mattress. Batting: 1000g/m² — 1 layer each side. Comfort foam: 1cm / 20 DNS on each side. Synthetic fabric. Thickness: 20cm.",
    descGe:
      "ნახევრად რბილი ორთოპედიული მატრასი ბონელის გადაბმული ზამბარებით. ნაბადი (ქეჩა) — 1000გრ/მ², 1 ფენა ორივე მხარეს. დარბილება — 1სმ, 20 DNS ღრუბელი ორივე მხარეს. ქსოვილი სინთეტიკა. სისქე 20სმ.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "memory-therapy-anatomic",
    nameGe: "მემორი თერაპია-ანატომიური",
    nameEn: "Memory Therapy Anatomic",
    category: "Orthopedic",
    categoryGe: cat("Orthopedic"),
    priceRange: "410–730 ₾",
    descEn:
      "Soft, plush, anatomic pocket spring mattress. Side foam belt: 8cm / 24 DNS. Batting: 2cm / 3000g/m². Comfort layer in separate topper: 10cm / 50 DNS memory foam — body-contouring, provides anatomic spinal support. Surface fabric: 450g/m², cotton-blend, quilted with batting, foam and synthetic fiber. Soft and anatomic.",
    descGe:
      "რბილი, ფაფუკი, ანატომიური მატრასი შეფუთული ზამბარებით. გვერდითა ღრუბელი — 8სმ, 24 DNS. ნაბადი (ქეჩა) — 2სმ სისქის, 3000გრ/მ². გამოყოფილ ლეიბში: 10სმ მემორი ფოუმი (ქაფი), 50 DNS — ინარჩუნებს სხეულის ფორმას და ანატომიურად უმხარდაჭერებს ხერხემალს. ქსოვილი 450გრ/მ², ბამბის შემცველობის, მოქსოვილია თელასთან, სინთიფონთან და ღრუბელთან ერთად.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "planeta",
    nameGe: "პლანეტა",
    nameEn: "Planeta",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "300–800 ₾",
    descEn:
      "Orthopedic mattress with Bonnell interconnected spring system. Side foam belt: 5.5cm / 18 DNS. Batting: 2 layers on top, 1 layer on bottom — 1000g/m². Comfort topper layer: 4cm / 60 DNS granular foam + 2cm / 28 DNS Turkish Soft foam. Side fabric: anti-allergenic anti-bacterial velvet. Surface fabric: anti-allergenic, anti-bacterial, cotton-blend, quilted with batting, foam and synthetic fiber. Medium-soft orthopedic. Thickness: 26cm.",
    descGe:
      "ორთოპედიული მატრასი ბონელის გადაბმული ზამბარებით. გვერდითა ღრუბელი — 5.5სმ სისქის, 18 DNS. ნაბადი (ქეჩა): ზედა მხარეს 2 ფენა, ქვედა მხარეს 1 ფენა — 1000გრ/მ². გამოყოფილ ლეიბში: 4სმ 60 DNS გრანულის ღრუბელი + 2სმ 28 DNS თურქული სოფტის ღრუბელი. გვერდითა ქსოვილი ანტიალერგიული, ანტიბაქტერიული ბარხატი. ზედა ქსოვილი ანტიალერგიული, ანტიბაქტერიული, ბამბის შემცველობის, მოქსოვილია თელასთან, ღრუბელთან და სინთიფონთან ერთად. საშუალოდ რბილი ორთოპედიული. სისქე 26სმ.",
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
    descEn:
      "Firm orthopedic Bonnell spring mattress. Side foam belt: 5.5cm / 18 DNS. Batting: 1000g/m² — 2 layers on top, 2 layers on bottom (4 layers total, very firm). Comfort foam: 1.5cm / 22 DNS on each side. Synthetic fabric. Thickness: 22cm.",
    descGe:
      "მკვრივი ორთოპედიული მატრასი ბონელის გადაბმული ზამბარებით. გვერდითა ღრუბელი — 5.5სმ, 18 DNS. ნაბადი (ქეჩა) — 1000გრ/მ²: ზედა მხარეს 2 ფენა, ქვედა მხარეს 2 ფენა, ჯამში 4 მკვრივი ფენა. დარბილება — 1.5სმ 22 DNS ღრუბელი ერთ მხარეს, 1.5სმ მეორე მხარეს. ქსოვილი სინთეტიკა. სისქე 22სმ.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
  {
    slug: "smarti",
    nameGe: "სმარტი",
    nameEn: "Smarti",
    category: "Orthopedic",
    categoryGe: cat("Orthopedic"),
    priceRange: "410–730 ₾",
    descEn:
      "Orthopedic mattress with pocket spring system. Side foam belt: 8cm thick, 16cm height, 24 DNS density — glued to springs to prevent lateral collapse. Batting (felted wool): 3000g/m², 2cm thick — bonded to springs and side foam on both sides, providing firmness and body support. Top fabric is quilted together with 1.5cm foam padding for comfort and appearance. Anti-allergenic, cotton-blend fabric. Thickness: 22cm. Medium-firm.",
    descGe:
      "ორთოპედიული მატრასი შეფუთული ზამბარებით (პოკეტ სპრინგ სისტემა). გვერდითა ღრუბელი — 8სმ სისქის, 16სმ სიმაღლის, 24 DNS სიმკვრივის — მიწებებულია ზამბარებზე და არ აძლევს საშუალებას მატრასს გვერდით გამოვარდეს. ნაბადი (ქეჩა) — 3000გრ/მ², 2სმ სისქის — ორივე მხრიდან გადაწებებულია ზამბარებზე და გვერდით ღრუბელზე, კრავს მატრასს, აძლევს სიმყარეს და უზრუნველყოფს სხეულის მხარდაჭერას. ზედა ქსოვილი მოქსოვილია 1.5სმ-იანი თელასის ღრუბელთან ერთად, რაც მატრასს კომფორტულობასა და ვიზუალურ სახეს აძლევს. ქსოვილი ანტიალერგიული და ბამბის შემცველობის. სისქე 22სმ.",
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
    descEn:
      "Orthopedic pocket spring mattress. Side foam belt: 8cm / 24 DNS. Batting: 2cm / 3000g/m². Comfort topper layer: 4cm / 60 DNS granular foam + 2cm / 28 DNS soft foam. Side fabric: velvet. Surface fabric: 450g/m², anti-allergenic, anti-bacterial, quilted with batting, foam and synthetic fiber. Medium-firm orthopedic. Rolled and vacuum-packed for easy delivery — expands to full size within hours.",
    descGe:
      "ორთოპედიული მატრასი შეფუთული ზამბარებით. გვერდითა ღრუბელი — 8სმ სისქის, 24 DNS. ნაბადი (ქეჩა) — 2სმ სისქის, 3000გრ/მ². გამოყოფილ ლეიბში: 4სმ 60 DNS გრანულის ღრუბელი + 2სმ 28 DNS სოფტის დარბილება. გვერდითა ქსოვილი ბარხატი. ქსოვილი 450გრ/მ², ანტიალერგიული, ანტიბაქტერიული, მოქსოვილია თელასთან, სინთიფონთან და ღრუბელთან ერთად. საშუალოდ მკვრივი ორთოპედიული. გახვეული და ვაკუუმირებული — მარტივი მიწოდებისთვის.",
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
    slug: "bravo",
    nameGe: "ბრავო",
    nameEn: "Bravo",
    category: "Mattresses",
    categoryGe: cat("Mattresses"),
    priceRange: "410–730 ₾",
    descEn:
      "Entry-level Bonnell spring mattress. Batting: 1000g/m² on each side. Simple fabric with 0.5mm foam lining. Thickness: 17cm. Budget-friendly option.",
    descGe:
      "საბაზისო მატრასი ბონელის გადაბმული ზამბარებით. ნაბადი (ქეჩა) — 1000გრ/მ², ორივე მხარეს. ქსოვილი უბრალო, 0.5მმ ღრუბელთან ერთად. სისქე 17სმ. საწყისი დონის მატრასი.",
    sizes: s([
      [80, 410], [100, 460], [120, 530], [140, 600], [150, 620], [160, 650], [180, 700], [200, 730],
    ]),
  },
]

const imageMap: Record<string, string> = {
  "bio-eco": "/products/bio-mattress.png",
  "bio-memory-orthopedic": "/products/memory-foam.png",
  "eco-tobra": "/products/classic-mattress.png",
  elegance: "/products/premium-mattress.png",
  comfort: "/products/soft-mattress.png",
  "memory-therapy-anatomic": "/products/memory-foam.png",
  planeta: "/products/classic-mattress.png",
  prestige: "/products/premium-mattress.png",
  smarti: "/products/classic-mattress.png",
  softmore: "/products/soft-mattress.png",
  "ultra-bag": "/products/rolled-mattress.png",
  focus: "/products/classic-mattress.png",
  bravo: "/products/soft-mattress.png",
}

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  image: imageMap[p.slug] ?? "/products/classic-mattress.png",
}))

export const WHATSAPP_URL = "https://wa.me/995555591306"
export const PHONE = "+995 555 59 13 06"
export const PHONE_TEL = "tel:+995555591306"
