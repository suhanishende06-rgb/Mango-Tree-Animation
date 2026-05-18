const mangoes = document.querySelectorAll(".mango");

mangoes.forEach((mango) => {

    mango.addEventListener("click", () => {

        mango.style.transition = "1s";
        mango.style.transform = "translateY(500px)";
        
        setTimeout(() => {
            mango.style.display = "none";
        },1000);

    });

});
