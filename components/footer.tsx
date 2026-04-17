import Image from "next/image"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-04-16_13-13-53-hqZRQFrU046DBgoBoXIFAZl2PsVujZ.jpg"
                alt="TVOYA TYSHA"
                width={100}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Ручна астрологічна мода для тих, хто з гордістю носить свої зірки.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm text-muted-foreground">Є питання? Напишіть нам!</p>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a 
                href="https://t.me/anna_kremenchuk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Send className="mr-2 h-4 w-4" />
                Повідомлення в Telegram
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TVOYA TYSHA. Усі права захищено.
          </p>
        </div>
      </div>
    </footer>
  )
}
