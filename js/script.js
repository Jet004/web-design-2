

document.onload = fetchComponents()

function fetchComponents(){
    //// Fetch template components and insert into DOM using outerHTML
    //// to replace the existing empty marker tag
    // Fetch header template and insert into DOM
    fetch("./includes/header.html")
        .then(response => response.text())
        .then(data => 
            {
                document.querySelector("header").outerHTML = data
            }
        )

    // Fetch nav template and insert into DOM
    fetch("./includes/nav.html")
        .then(response => response.text())
        .then(data => 
            {
                document.querySelector("nav").outerHTML = data
            }
        )

    // Fetch footer template and insert into DOM
    fetch("./includes/footer.html")
        .then(response => response.text())
        .then(data => 
            {
                document.querySelector("footer").outerHTML = data
            }
        )
}
