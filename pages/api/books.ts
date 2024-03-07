import type {NextApiRequest, NextApiResponse} from 'next'


const booksDB: BookType[] = [
    {id: 1, title: 'Harry Potter'},
    {id: 2, title: 'Patterns'},
    {id: 3, title: 'OOP'}
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<BookType[]>
) {
    if (req.method === 'GET') {
        let books = booksDB
        const queryTitle = req.query.title as string
        if (queryTitle) {
            books = books.filter(el => el.title.toLowerCase().includes(queryTitle.toLowerCase()))
        }
        res.status(200).json(books)
    }
}


//types
type BookType = {
    id: number, title: string
}