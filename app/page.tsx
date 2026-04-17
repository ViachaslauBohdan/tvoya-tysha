import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Send, Star, Sparkles, Moon } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Футболка Midnight Zodiac",
    price: "2400 UAH",
    quantity: 10,
    description: "Елегантна чорна футболка із срібною вишивкою сузір'їв. Кожен знак зодіаку акуратно відтворений, щоб створити небесну карту на тканині.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-04-16_13-06-23-LXLWpsPpji7Bb6n2rPVdT122pIKmQQ.jpg",
    imageAlt: "Black T-shirt with silver embroidered zodiac constellations including Leo, Virgo, and other astrological signs",
    buyLink: "https://t.me/anna_kremenchuk?text=Хочу%20замовити%20футболку%20Midnight%20Zodiac"
  },
  {
    id: 2,
    name: "Футболка Burgundy Pearl Constellation",
    price: "2400 UAH",
    quantity: 10,
    description: "Розкішна бордова футболка з ручним оздобленням сузір'їв перлами. Преміальні перлини створюють виразні зодіакальні візерунки з витонченим фактурним ефектом.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-04-16_13-06-13-67s58ghznUT9ZMWBuTTC9ErbZTKdfJ.jpg",
    imageAlt: "Burgundy T-shirt with pearl-beaded zodiac constellations including detailed close-up views of the intricate pearl work",
    buyLink: "https://t.me/anna_kremenchuk?text=Хочу%20замовити%20футболку%20Burgundy%20Pearl%20Constellation"
  }
]

const features = [
  {
    icon: Star,
    title: "Ручна робота",
    description: "Кожне сузір'я ретельно вишите або оздоблене перлами майстрами"
  },
  {
    icon: Sparkles,
    title: "Преміальні матеріали",
    description: "100% органічна бавовна, перлини та металізовані нитки"
  },
  {
    icon: Moon,
    title: "Лімітована серія",
    description: "Малий тираж гарантує унікальність кожного виробу"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
                Ручна небесна мода
              </p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight text-balance mb-6">
                Носи свої зірки
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
                Відкрий унікальні футболки з дизайнами сузір'їв зодіаку, створені вручну з перлами та делікатною вишивкою.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-12"
                >
                  <a href="#collection">
                    Дивитися колекцію
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 h-12"
                >
                  <a 
                    href="https://t.me/anna_kremenchuk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Написати нам
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mb-5">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="collection" className="py-20 md:py-28 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14 md:mb-20">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
                Наша колекція
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Небесні акценти
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  description={product.description}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  buyLink={product.buyLink}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                Є питання щодо колекції?
              </h2>
              <p className="text-primary-foreground/80 mb-10">
                Ми допоможемо обрати ідеальний виріб. Напишіть у Telegram щодо розміру, персоналізації чи будь-яких інших питань.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 px-10 h-12"
              >
                <a 
                  href="https://t.me/anna_kremenchuk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Написати в Telegram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://t.me/anna_kremenchuk"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написати в Telegram"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Send className="h-6 w-6" />
      </a>

      <Footer />
    </div>
  )
}
