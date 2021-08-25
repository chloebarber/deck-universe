from app.models import db, Deck


def seed_decks():
    seedArray = []

    seedArray.append(Deck(game_name = "Game One", owner_id = "1", splash_image = "", rules = "Game One rules", description = "Game One description"))
    seedArray.append(Deck(game_name = "Deck Two", owner_id = "1", splash_image = "", rules = "Deck Two rules", description = "Deck Two description"))
    seedArray.append(Deck(game_name = "Deck Three", owner_id = "1", splash_image = "", rules = "Deck Three rules", description = "Deck Three description"))
    seedArray.append(Deck(game_name = "Game Four", owner_id = "1", splash_image = "", rules = "Game Four rules", description = "Game Four description"))
    seedArray.append(Deck(game_name = "Average Playing Card Deck", owner_id = "1", splash_image = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-card-games-1593784219.jpg", rules = "There are many games which can be played with a 52-card deckIt's a generic 52-card deck!"))



    for item in seedArray:
        db.session.add(item)

    db.session.commit()