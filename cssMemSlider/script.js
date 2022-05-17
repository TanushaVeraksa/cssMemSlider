window.addEventListener("load", function() {
    const mems = [
        {
            id: 1,
            classImg: "content-seal",
            text: "Funny seal"  
        },
        {
            id: 2,
            classImg: "content-programmer",
            text: "She was very interested in my python but i only know php"
        },
        {
            id: 3,
            classImg: "content-jobs",
            text: "First rule of programming: if it's works don't touch it!"
        },
        {
            id: 4,
            classImg: "content-attention",
            text: "Thank you for your attention"
        },
    ];  

    const inputEl = document.querySelectorAll(".custom");
    const pEl = document.querySelector("p");
    const content = document.querySelectorAll("div")[1];

    for(let i =0; i<inputEl.length; i++) {
        inputEl[i].addEventListener('click', (event)=> {
            if(event.target.value == mems[i].id) {
                pEl.innerHTML = mems[i].text;
                if(content.classList.contains(content.classList[0])) {
                    content.classList.remove(content.classList[0])
                }
                content.classList.add(mems[i].classImg)
            }
        })
    }
})


