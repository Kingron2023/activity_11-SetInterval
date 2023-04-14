function chage_Color() {
    let colorChoices_R = Math.floor(Math.random() * 255);
    let colorChoices_G = Math.floor(Math.random() * 255);
    let colorChoices_B = Math.floor(Math.random() * 255);

    const rgbValue = `rgba(${colorChoices_R}, ${colorChoices_G}, ${colorChoices_B}, 0.7 )`;
    const rgbValue2 = `rgba(${colorChoices_R}, ${colorChoices_G}, ${colorChoices_B})`;

    let label = document.getElementById("rgb_Value");
    label.innerHTML = rgbValue2;
    label.style.color = rgbValue2;
    
    // CAR COLOR
    let carColor = document.querySelector(".car");
    carColor.style.backgroundColor = rgbValue;
};


// Track Color History at console
console.log(rgbValue);


// CHANGING COLOR
function change_BodyColor() {
    blendBodyColor = setInterval(chage_Color, 1500);
    audio.play();
}

function pauseBlend() {
    clearInterval(blendBodyColor);
    audio.pause();
}

function resetColor() {
    location.reload();
}

// AUDIO TRIGGER

