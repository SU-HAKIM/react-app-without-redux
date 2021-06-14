import React from 'react'

function Child({ heroName }) {
    if (heroName === 'joker') {
        throw new Error("Joker is not a hero")
    }
    return (
        <div>
            Hero Name is {heroName}
        </div>
    )
}

export default React.memo(Child)
