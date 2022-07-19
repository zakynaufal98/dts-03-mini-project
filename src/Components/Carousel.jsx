function Card(props) {
    return (
        <div className="min-w-[18rem] h-40 mr-2 flex items-center justify-center bg-slate-500 rounded">
            Item {props.num}
        </div>
    )
}

function Carousel() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const listItem = items.map(item => <Card num={item} />)
    return (
        <div className="pt-8">
            <p className="text-white">Carousel</p>
            <div className="flex w-full relative overflow-x-auto">
                {listItem}
            </div>
        </div>
    )
}

export default Carousel