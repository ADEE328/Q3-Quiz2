let acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
    button.addEventListener("click", function() {
        let panel = this.nextElementSibling;

       
        document.querySelectorAll(".panel").forEach(p => {
            if (p !== panel) p.style.display = "none";
        });

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
