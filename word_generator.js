function random_word() {
}

async function word_query(length) {
    let query = await fetch(
        `https://random-word-api.vercel.app/api?words=1&length=${length}`
        // `https://random-word-api.herokuapp.com/word?number=1&length=${length}`
    );

    let words = await query.json();
    return words[0]
}
