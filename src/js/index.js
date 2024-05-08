const characters = document.querySelectorAll(".character")

characters.forEach((character) => {
    character.addEventListener("mouseenter", () => {
        const idSelectedCharacter = character.attributes.id.value

        if (idSelectedCharacter === "goku-black") {
            return
        }
        
        const selectedCharacter = document.querySelector(".selected")
        selectedCharacter.classList.remove("selected")
        character.classList.add("selected")

        const characterImage = document.querySelector(".character-image")
        characterImage.src = `./src/assets/${idSelectedCharacter}-character.png`

        const selectedCharacterName = character.getAttribute("data-name")
        const player1CharacterName = document.querySelector(".player1-character-name")

        player1CharacterName.innerHTML = selectedCharacterName;
    })
})