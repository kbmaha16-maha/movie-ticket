// ===============================
// MOVIE
// ===============================

function selectMovie(movie) {

    localStorage.setItem(
        "movie",
        movie
    );

    window.location.href =
        "movie-details.html";
}


function goToTheatre() {

    window.location.href =
        "theatre.html";
}


// ===============================
// THEATRE
// ===============================

function selectTheatre(theatre) {

    localStorage.setItem(
        "theatre",
        theatre
    );

    window.location.href =
        "date.html";
}


// ===============================
// DATE
// ===============================

function selectDate() {

    let date =
        document.getElementById(
            "movieDate"
        ).value;


    if (date === "") {

        alert("Please select a date.");

        return;
    }


    localStorage.setItem(
        "date",
        date
    );


    window.location.href =
        "showtime.html";
}


// ===============================
// SHOWTIME
// ===============================

function selectShowtime(time) {

    localStorage.setItem(
        "time",
        time
    );


    window.location.href =
        "seats.html";
}


// ===============================
// SEATS
// ===============================

let selectedSeats = [];

let totalPrice = 0;


function selectSeat(
    button,
    seatName,
    price
) {

    let exists =
        selectedSeats.find(
            seat =>
                seat.name === seatName
        );


    if (exists) {

        selectedSeats =
            selectedSeats.filter(
                seat =>
                    seat.name !== seatName
            );

        totalPrice -= price;

        button.classList.remove(
            "selected"
        );

    } else {

        selectedSeats.push({

            name: seatName,

            price: price

        });

        totalPrice += price;

        button.classList.add(
            "selected"
        );
    }


    document.getElementById(
        "selectedSeats"
    ).innerText =

        selectedSeats.length > 0

        ? selectedSeats
            .map(seat => seat.name)
            .join(", ")

        : "None";


    document.getElementById(
        "totalPrice"
    ).innerText = totalPrice;
}


// ===============================
// BOOKING SUMMARY
// ===============================

function continueToSummary() {

    if (selectedSeats.length === 0) {

        alert(
            "Please select at least one seat."
        );

        return;
    }


    localStorage.setItem(
        "seats",
        JSON.stringify(selectedSeats)
    );


    localStorage.setItem(
        "total",
        totalPrice
    );


    window.location.href =
        "summary.html";
}


// ===============================
// LOAD SUMMARY
// ===============================

if (
    window.location.pathname.includes(
        "summary.html"
    )
) {

    document.getElementById(
        "summaryMovie"
    ).innerText =
        localStorage.getItem("movie");


    document.getElementById(
        "summaryTheatre"
    ).innerText =
        localStorage.getItem("theatre");


    document.getElementById(
        "summaryDate"
    ).innerText =
        localStorage.getItem("date");


    document.getElementById(
        "summaryTime"
    ).innerText =
        localStorage.getItem("time");


    let seats =
        JSON.parse(
            localStorage.getItem("seats")
        );


    document.getElementById(
        "summarySeats"
    ).innerText =

        seats
            .map(seat => seat.name)
            .join(", ");


    document.getElementById(
        "summaryTotal"
    ).innerText =
        localStorage.getItem("total");
}


// ===============================
// LOGIN
// ===============================

function goToLogin() {

    window.location.href =
        "login.html";
}


function login() {

    let email =
        document.getElementById(
            "loginEmail"
        ).value;


    let password =
        document.getElementById(
            "loginPassword"
        ).value;


    if (
        email === "" ||
        password === ""
    ) {

        alert(
            "Please enter email and password."
        );

        return;
    }


    // Demo login
    localStorage.setItem(
        "loggedIn",
        "true"
    );


    window.location.href =
        "payment.html";
}


// ===============================
// PAYMENT
// ===============================

if (
    window.location.pathname.includes(
        "payment.html"
    )
) {

    let amount =
        Number(
            localStorage.getItem("total")
        );


    document.getElementById(
        "paymentAmount"
    ).innerText = amount;


    document.getElementById(
        "paymentTotal"
    ).innerText =
        amount + 30;
}


function makePayment() {

    localStorage.setItem(
        "paymentStatus",
        "success"
    );


    window.location.href =
        "confirmation.html";
}


// ===============================
// CONFIRMATION
// ===============================

if (
    window.location.pathname.includes(
        "confirmation.html"
    )
) {

    let id =
        "MB" +
        Date.now();


    localStorage.setItem(
        "bookingId",
        id
    );


    document.getElementById(
        "bookingId"
    ).innerText = id;
}


function viewTicket() {

    window.location.href =
        "ticket.html";
}