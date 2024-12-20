let karel = document.getElementById("karel")

let karelPosition = [0, 0]

let direction = 0 // 0: down, 1: right, 2: up, 3: left

function execute(x){
    switch (x) {
        case "step":
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
            break;

        case "rotate":
            if (direction<3) {
                direction += 1
            }else{
                direction = 0
            }
            karel.style.transform = "rotate("+(-90*direction)+"deg)"
            break;

        case "place":
            let div = document.createElement("div")
            div.classList.add("square")
            div.style.left = (karelPosition[0]*10)+"%"
            div.style.top = (karelPosition[1]*10)+"%"
            document.getElementById("botArea").insertBefore(div, karel)
            break;
    }
}

function activate(){
    let lines = document.getElementById("commandPrompt").value.split("\n")
    lines.forEach(line => {
        execute(line)
    });
}
