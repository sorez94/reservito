interface IMenuCard {
    id: number,
    name: string,
    image: string,
    stars: number,
    price: number,
    size: string,
    comments: Array<IComments>
}

interface IComments {
    id: number,
    userName: string,
    persianName: string,
    comment: string,
    data: string
}
