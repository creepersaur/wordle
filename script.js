const words = document.getElementById("words");

const number = 6;
const letters = 5;

let WORD = "";
let current_attempt = 0;

function create_word_div(wNum, value) {
    let word_div = document.createElement("div");
    word_div.className = "word" + wNum;

    setTimeout(() => {
        for (let e = 0; e < letters; e++) {
            let L = document.createElement("span");
            let letter = value ? value[e] : "";

            setTimeout(() => {
                L.setAttribute("text", letter);
            }, e * 100);

            if (letter.length && WORD.includes(letter)) {
                L.setAttribute("contains", true);
            }
            if (WORD[e] == letter) {
                L.setAttribute("correct", true);
            }

            word_div.appendChild(L);
        }
    }, wNum * 300);

    return word_div;
}

function setup_words() {
    for (let i = 0; i < number; i++) {
        let word_div = create_word_div(i, false);
        words.appendChild(word_div);
    }
}

function handle_input() {
    const input = document.querySelector("input");
    const submit = document.getElementById("submit");

    input.addEventListener("input", () => {
        input.value = input.value.toUpperCase();
        input.value = input.value.slice(0, letters);
    });

    input.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            submit_word(input.value);
            input.value = "";
        }
    });

    submit.addEventListener("click", () => {
        submit_word(input.value);
        input.value = "";
    });
}

function submit_word(word) {
    const old_word = words.querySelector(".word" + current_attempt);
    let new_word = create_word_div(current_attempt, word);

    words.appendChild(new_word);
    words.insertBefore(new_word, old_word);
    old_word.remove();

    current_attempt += 1;
}

async function main() {
    WORD = await word_query(letters);
    WORD = WORD.toUpperCase();
    console.log(WORD);

    setup_words();
    handle_input();
}

main();
