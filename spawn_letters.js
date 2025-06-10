const letter_holder = document.getElementById("letters")
const all_chars = "abcdefghijklmnopqrstuvwxyz"

const letter_list = all_chars.toUpperCase();

for (var i of letter_list) {
    const letter = document.createElement("span")
    letter.textContent = i
    letter.className = "character"
    letter.id = "char_" + i

    letter_holder.appendChild(letter)
}