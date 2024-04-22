const createAutocomplete = ({root, renderOption, onOptionSelect,
    inputValue, fetchData}) => {
    // CREATE A NEW DROPOUT
    root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input">
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>    
            </div>
        </div>
    `
    const input = root.querySelector("input")
    const dropdown = root.querySelector(".dropdown")
    const resultsWrapper = root.querySelector(".results")
    
    // WHEN THE USER TYPES...
    const onInput = async event => {
        const items = await fetchData(event.target.value)
        
        // IF THERE IS NO INFO TYPED, THE DROPOUT WILL NOT BE DISPLAYED
        if (!items.length) {
            dropdown.classList.remove("is-active")
            return
        }
        // START EMPTY
        resultsWrapper.innerHTML = ""
        dropdown.classList.add("is-active")
        // SHOW MUVIES WITH NAME
        for (let item of items) {
            // OBTAIN URL
            const option = document.createElement("a")

            option.classList.add("dropdown-item")
            option.innerHTML = renderOption(item)
            // WHEN CLICK, REMOVE DROPOUT AND SHOW SELECTED INFO
            option.addEventListener("click",() => {
                dropdown.classList.remove("is-active")
                input.value = inputValue(item)
                onOptionSelect(item)
            })
            // SHOW MOVIES OPTIONS
            resultsWrapper.appendChild(option)
        }
    }
    input.addEventListener("input",debounce(onInput,1000))
    document.addEventListener("click",event => {
        if (!root.contains(event.target)) {
            dropdown.classList.remove("is-active")
        }
    })
}