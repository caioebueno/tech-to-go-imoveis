import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// FUNCTIONS IMPORT
import uploadImages from '@/functions/api/uploadImages'

export default async (req, res) => {
  if (req.method === 'POST') {
    
    

    const createdItem = await prisma.item.create({data: req.body})
    res.json(createdItem)
  } else if(req.method === 'GET') {
    const items = await prisma.item.findMany()
    res.json(items)
  }
}    
  