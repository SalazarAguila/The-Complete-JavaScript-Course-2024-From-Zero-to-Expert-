// CREATE CONSTANT CONFIGURATION
const autocompleteConfig = {
    renderOption(movie){
        const imgSrc = movie.Poster ==="N/A" ? "" : movie.Poster
        return `
            <img src="${imgSrc}">
            ${movie.Title} (${movie.Year})
            `
    },
    inputValue(movie) {
        return `${movie.Title} (${movie.Year})`
    },
    async fetchData(searchTerm) {
        const response = await axios.get("http://www.omdbapi.com/",{
            params: {apikey:"6bfaaded", s: searchTerm}
        })
        if(response.data.Error) {
            return []
        }
        return response.data.Search
    }
}

// ADD VARIABLE DATA TO THE CONSTANT CONFIG
createAutocomplete({
    ...autocompleteConfig,
    root: document.querySelector("#left-autocomplete"),
    onOptionSelect(movie) {
        document.querySelector(".tutorial").classList.add("is-hidden")
        onMovieSelect(movie, document.querySelector("#left-summary"),
        "left")
    }
})
createAutocomplete({
    ...autocompleteConfig,
    root: document.querySelector("#right-autocomplete"),
    onOptionSelect(movie) {
        document.querySelector(".tutorial").classList.add("is-hidden")
        onMovieSelect(movie,document.querySelector("#right-summary"),
        "right")
    }
})

// OBTAIN API DATA AND CHECK IF READY FOR COMPARISON
let leftMovie
let rightMovie
const onMovieSelect = async (movie,summary,side) => {
    console.log(leftMovie,rightMovie)
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {apikey:"6bfaaded", i: movie.imdbID}
    })
    summary.innerHTML = movieTemplate(response.data)
    if (side === "left") {
        leftMovie = response.data
    } else {
        rightMovie = response.data
    }

    if (leftMovie && rightMovie) {
        runComparison()
    }
}

// COMPARE MOVIE DATA
const runComparison = () => {
    const leftStats = document.querySelectorAll("#left-summary .notification")
    const rightStats = document.querySelectorAll("#right-summary .notification")

    leftStats.forEach((leftStat,index) => {
        const rightStat = rightStats[index]

        const leftValue = parseFloat(leftStat.dataset.value)
        const rightValue = parseFloat(rightStat.dataset.value)

        if (rightValue > leftValue) {
            
            leftStat.classList.remove("is-primary")
            leftStat.classList.add("is-warning")
        } else {
            rightStat.classList.remove("is-primary")
            rightStat.classList.add("is-warning")
        }
    })
}

// ADD HTML TO MOVIE DATA
const movieTemplate = (movieDetail) => {
    const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g,"").replace(/,/g,""))
    const metascore = parseInt(movieDetail.Metascore)
    const imdbRating = parseFloat(movieDetail.imdbRating)
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g,""))
    const awards = movieDetail.Awards.split(" ").reduce((prev,word) => {
        const value = parseInt(word)
        if (isNaN(value)) {
            return prev
        } else {
            return prev + value
        }
    }, 0)

    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>
        <article data-value=${awards} class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${dollars} class="notification is-primary">
            <p class="title">${movieDetail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article data-value=${metascore} class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article data-value=${imdbRating} class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value=${imdbVotes} class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDBVotes</p>
        </article>
    `
}