import { useState } from "react"

function Pagination() {

    const [startList, setStartList] = useState(0)

    const moveLeft = () => {
        let nextSelected = startList - 5
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 5
        if (nextSelected > 20) {
            nextSelected = 20
        }
        setStartList(nextSelected)
    }

    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(5)
    }
    const changePageThree = () => {
        setStartList(10)
    }
    const changePageFour = () => {
        setStartList(15)
    }
    const changePageFive = () => {
        setStartList(20)
    }
    
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="btn-group float-end" role="group" aria-label="Basic outlined example">
                        <button onClick={() => moveLeft(startList)} type="button" className="btn btn-outline-secondary">‹</button>
                        <button onClick={() => changePageOne(startList)} type="button" className="btn btn-outline-secondary">1</button>
                        <button onClick={() => changePageTwo(startList)} type="button" className="btn btn-outline-secondary">2</button>
                        <button onClick={() => changePageThree(startList)} type="button" className="btn btn-outline-secondary">3</button>
                        <button onClick={() => changePageFour(startList)} type="button" className="btn btn-outline-secondary">4</button>
                        <button onClick={() => changePageFive(startList)} type="button" className="btn btn-outline-secondary">5</button>
                        <button onClick={() => moveRight(startList)} type="button" className="btn btn-outline-secondary">›</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination