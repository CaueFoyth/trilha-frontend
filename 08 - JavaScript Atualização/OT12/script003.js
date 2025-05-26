function birthdayPartyGuests(...names) {
    console.log("Lista de convidados para a festa de aniversário:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

birthdayPartyGuests("Ana", "Carlos", "Beatriz", "João");