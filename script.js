function makePayment() {

    // Demo payment
    let paymentStatus = "success";

    if (paymentStatus === "success") {

        localStorage.setItem(
            "paymentStatus",
            "success"
        );

        window.location.href =
            "confirmation.html";

    } else {

        alert("Payment failed.");

    }
}