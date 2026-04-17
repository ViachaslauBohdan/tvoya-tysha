"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, ShoppingBag } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  quantity: number
  description: string
  imageSrc: string
  imageAlt: string
  buyLink: string
}

export function ProductCard({ 
  name, 
  price, 
  quantity,
  description, 
  imageSrc, 
  imageAlt,
  buyLink 
}: ProductCardProps) {
  return (
    <article className="group flex flex-col" itemScope itemType="https://schema.org/Product">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative aspect-square overflow-hidden rounded-lg bg-card mb-6 text-left"
            aria-label={`Переглянути фото товару ${name}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              itemProp="image"
              priority
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white">
              <Search className="h-3.5 w-3.5" />
              Перегляд
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-2 sm:p-3">
          <DialogTitle className="sr-only">{name}</DialogTitle>
          <div className="overflow-hidden rounded-md bg-card">
            <div className="relative aspect-square w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="border-t border-border p-4">
              <p className="font-serif text-lg text-foreground">{name}</p>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 
            className="font-serif text-xl md:text-2xl font-medium text-foreground"
            itemProp="name"
          >
            {name}
          </h3>
          <span 
            className="text-lg font-semibold text-primary whitespace-nowrap"
            itemProp="offers" 
            itemScope 
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="UAH" />
            <span itemProp="price">{price}</span>
          </span>
        </div>
        
        <p 
          className="text-muted-foreground text-sm md:text-base leading-relaxed"
          itemProp="description"
        >
          {description}
        </p>

        <p className="text-sm font-medium text-foreground">
          В наявності: {quantity} шт.
        </p>
        
        <Button 
          asChild
          className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          <a href={buyLink} target="_blank" rel="noopener noreferrer">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Купити
          </a>
        </Button>
      </div>
    </article>
  )
}
