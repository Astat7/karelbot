let karel = document.getElementById("karel")

let karelPosition = [0, 0]

let direction = 0 // 0: down, 1: right, 2: up, 3: left

function execute(x, y){
    switch (x) {
        case "step":
            for(i=0;i<y;i++){
                switch (direction) {
                    case 0:
                        if (karelPosition[1]<9) {
                            karelPosition[1] += 1
                            karel.style.top = (karelPosition[1]*10)+"%"
                        }
                        break;
                
                    case 1:
                        if (karelPosition[0]<9) {
                            karelPosition[0] += 1
                            karel.style.left = (karelPosition[0]*10)+"%"
                        }
                        break;

                    case 2:
                        if (karelPosition[1]>0) {
                            karelPosition[1] -= 1
                            karel.style.top = (karelPosition[1]*10)+"%"
                        }
                        break;

                    case 3:
                        if (karelPosition[0]>0) {
                            karelPosition[0] -= 1
                            karel.style.left = (karelPosition[0]*10)+"%"
                        }
                        break;
                }
            }
            break;

        case "rotate":
            for(i=0;i<y;i++){
                if (direction<3) {
                    direction += 1
                }else{
                    direction = 0
                }
                karel.style.transform = "rotate("+(-90*direction)+"deg)"
            }
            break;

        case "place":
            let div = document.createElement("div")
            div.classList.add("square")
            div.style.left = (karelPosition[0]*10)+"%"
            div.style.top = (karelPosition[1]*10)+"%"
            div.innerHTML = y
            document.getElementById("botArea").insertBefore(div, karel)
            break;

        case "reset":
            Array.from(document.getElementsByClassName("square")).forEach(square => {
                square.remove()
            })

            karelPosition = [0, 0]
            direction = 0

            karel.style.top = 0
            karel.style.left = 0
            karel.style.transform = "rotate(0deg)"
    }
}

function evaluate(x){
    let words = x.split(" ")
    execute(words[0].toLowerCase(), (words[1] ? words[1] : 1))
}

function activate(){
    let lines = document.getElementById("commandPrompt").value.split("\n")
    lines.forEach(line => {
        evaluate(line)
    });
}
