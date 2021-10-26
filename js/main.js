//ESERCIZIO 1
//1. Lista delle email con permesso di accesso
const accounts = ["paolorossi@gmail.com" , "mariobiondi@gmail.com" , "dany@gmail.com"];
console.log(accounts);
//Ref
const emailInput = document.getElementById("email");
const accessBtn = document.querySelector(".btn-access");
const resoultEmail = document.querySelector(".resoult-input");
//2. Immissione dell'email da parte dell'utente
accessBtn.addEventListener('click' , function() {

    const user = emailInput.value.trim().toLowerCase();
    console.log("Email utente" , user);

    //Controllo campo vuoto
    if (user === "") {
        alert("Immettere la propria email prima di cliccare CONTROLLA.")
    }
    else {
        //3. Verifica della presenza della email nell'array
        let userFound = false;

        for(let i = 0; i < accounts.length; i++) {
            if (accounts[i] === user) {
                userFound = true;
                break;
            }
        }
        console.log(userFound);

        //4. Output del risultato dei controlling
        if (userFound) {
            resoultEmail.innerHTML = `Utente verificato può accedere al sito.`
        } else {
            resoultEmail.innerHTML = `Utente non verificato non può accedere al sito, immettere una email verificata.`
        }
    }
});


//ESERCIZIO 2
//1. Generare due numeri random da 1 a 6 (uno per l'utente e uno per il computer)

//2. Verificare il vincitore
//3. Output del vincitore