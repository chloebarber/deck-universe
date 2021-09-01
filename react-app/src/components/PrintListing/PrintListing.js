import React from 'react';
import CardInfo from '../Card/Card.js'

function PrintListing(cardList){
    return(
    <>
        {cardList.map(card => (
            <>
            <CardInfo card={card} />
            </>
        ))}
    </>
    )
}

export default PrintListing;