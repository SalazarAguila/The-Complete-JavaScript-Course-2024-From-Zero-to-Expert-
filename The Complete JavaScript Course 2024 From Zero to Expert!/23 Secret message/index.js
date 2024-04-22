const {hash} = window.location

const message = atob(hash.replace("#",""))
if (message) {
    document.querySelector("#message-form").classList.add("hide")
    document.querySelector("#message-show").classList.remove("hide")
    document.querySelector("h1").innerHTML = message
}

document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault()

        document.querySelector("#message-form").classList.add("hide")
        document.querySelector("#link-form").classList.remove("hide")

        const input = document.querySelector("#message-input")
        const encypted = btoa(input.value)

        copy = document.querySelector("#link-input")
        copy.value = `${window.location}#${encypted}`
        copy.select()
})