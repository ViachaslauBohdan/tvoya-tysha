import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-04-16_13-13-53-hqZRQFrU046DBgoBoXIFAZl2PsVujZ.jpg"
              alt="TVOYA TYSHA"
              width={120}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </a>
          
          <nav className="flex items-center gap-6">
            <a 
              href="#collection" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Колекція
            </a>
            <a 
              href="https://t.me/anna_kremenchuk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Контакти
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
