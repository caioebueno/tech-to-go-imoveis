import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const PAGE_SIZE = 20

export default async (req, res) => {

    const { query: { page } } = req

    const items = await prisma.item.findMany({ take: PAGE_SIZE, skip: page * PAGE_SIZE - PAGE_SIZE})
    res.json(items)

}
