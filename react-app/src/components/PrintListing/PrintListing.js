import React from 'react';
import { useSelector } from 'react-redux';
import CardInfo from '../Card/Card.js'

function PrintListing(){

    const SelectedDeck = useSelector((state) => state.SelectedDeck)
    return(
    <div className="printListingWrapper">
        {SelectedDeck?.Cards?.map(card => (
            <CardInfo card={card} />
        ))}
    </div>
    )
}

export default PrintListing;