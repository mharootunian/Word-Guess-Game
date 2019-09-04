function showImage(chosenWord) {
    switch (chosenWord) {
        case "tiger":
            document.getElementById("image").src = "./assets/images/tiger.jpg";
            break;
        case "lion":
            document.getElementById("image").src = "./assets/images/lion.jpg";
            break;
        case "panther":
            document.getElementById("image").src = "./assets/images/black-panther.jpg";
            break;
        case "leopard":
            document.getElementById("image").src = "./assets/images/leopard.jpg";
            break;
        case "cougar":
            document.getElementById("image").src = "./assets/images/cougar.jpg";
            break;
        case "cheetah":
            document.getElementById("image").src = "./assets/images/cheetah-cub.jpg";
            break;
        case "cat":
            document.getElementById("image").src = "./assets/images/cat.jpg";
            break;
        case "jaguar":
            document.getElementById("image").src = "./assets/images/jaguar.jpg";
            break;
        case "lynx":
            document.getElementById("image").src = "./assets/images/lynx.jpg";
            break;
        case "ocelot":
            document.getElementById("image").src = "./assets/images/ocelot.jpg";
            break;
        case "serval":
            document.getElementById("image").src = "./assets/images/serval.jpg";
            break;

        default:
            break;
    }
}