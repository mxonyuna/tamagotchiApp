function main() {
    //spriteNormal()
    standingAnimation();
}

function updateTime() {
    const dateAndTime = new Date();

    document.getElementById("dateMonth").textContent = dateAndTime.getDate();
    document.getElementById("localTime").textContent = dateAndTime.getHours() + ":" + dateAndTime.getMinutes()
}

//updateTime()

function standingAnimation() { // no blinking, 1 cycle
    const char = document.getElementById("character");
    const spriteContainer = new Image(123, 123);
    char.appendChild(spriteContainer);
    
    const sprites = [
        "assets/sprites/standing1.png",
        "assets/sprites/standing1.png",
        "assets/sprites/standing2.png",
        "assets/sprites/standing3.png",
        "assets/sprites/standing4.png",
        "assets/sprites/standing5.png",
        "assets/sprites/standing6.png",
    ]

    const spritesBlinking = [
        "assets/sprites/blink1.png",
        "assets/sprites/blink1.png",
        "assets/sprites/blink2.png",
        "assets/sprites/blink3.png",
        "assets/sprites/blink4.png",
        "assets/sprites/blink5.png",
        "assets/sprites/blink6.png",
    ]

    let count = 0;
    let blink = 0;

    function nextSprite() {
        if (blink <= 1) {
            const currentSprite = sprites[count];
            spriteContainer.src = currentSprite;
            
            if (count >= 6) {
                count = 0;
                blink++;
            } else {
                count++;
            }
        } else if (blink == 2) {
            const currentSprite = spritesBlinking[count];
            spriteContainer.src = currentSprite;

            if (count >= 6) {
                count = 0;
                blink = 0;
            } else {
                count++;
            }
        }
    }

    setInterval(nextSprite, 80)
}

function blinkingAnimation() { // no blinking, 1 cycle
    ;
}

function spriteNormal() {
    standingAnimation();
    standingAnimation();
    blinkingAnimation();
}

main()