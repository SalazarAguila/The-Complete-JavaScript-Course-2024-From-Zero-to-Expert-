/* const myDeck = {
    deck: [],
    drawnCards: [],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    suits: ["CLUBS","SPADES","DIAMONDS","HEARTS"],
    initializeDeck() {
        const {deck, values, suits} = this
        for (let val of values.split(",")){
            for (let suit of suits){
                deck.push({val,suit})
            }
        }
    },
    drawCard() {
        const card = this.deck.pop()
        this.drawnCards.push(card)
        return card
    },
    drawCards(draw) {
        const cards = []
        for (let i = 0; i < draw; i++){
            cards.push(this.drawCard())
        }
    return cards
    },
    shuffle() {
        const {deck} = this
        for (let i = deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random()*(i+1))
            let temp = deck[j]
            deck[j] = deck[i]
            deck[i] = temp
            //[deck[i], deck[j]] = [deck[j], deck[i]]
        }
    }
} */

const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
        suits: ["CLUBS","SPADES","DIAMONDS","HEARTS"],
        initializeDeck() {
            const {deck, values, suits} = this
            for (let val of values.split(",")){
                for (let suit of suits){
                    deck.push({val,suit})
                }
            }
        },
        drawCard() {
            const card = this.deck.pop()
            this.drawnCards.push(card)
            return card
        },
        drawCards(draw) {
            const cards = []
            for (let i = 0; i < draw; i++){
                cards.push(this.drawCard())
            }
        return cards
        },
        shuffle() {
            const {deck} = this
            for (let i = deck.length - 1; i > 0; i--){
                let j = Math.floor(Math.random()*(i+1))
                /* let temp = deck[j]
                deck[j] = deck[i]
                deck[i] = temp */
                [deck[i], deck[j]] = [deck[j], deck[i]]
            }
        }
    }
}
const deck1 = makeDeck()
const deck2 = makeDeck()
deck1.initializeDeck()
deck1.shuffle()
deck2.initializeDeck()
deck2.shuffle()
