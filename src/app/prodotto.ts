export interface iProdotto
{
  products:Prodotto[]
  total:number
  skip:number
  limit:number
}

export interface Prodotto
{
      id: number
      title: string
      description: string
      price: number
      discountPercentage: number
      rating: number
      stock: number
      brand: string
      category: string
      thumbnail: string
      images: string[]
}
