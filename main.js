const row1 = document.querySelectorAll('.block .block1 .cube');
const row2 = document.querySelectorAll('.block .block2 .cube');
const row3 = document.querySelectorAll('.block .block3 .cube');
const sound = document.querySelector('.sound');
const winSound = document.querySelector('.winSound')

let player = 'X'
let rows = [...row1,...row2,...row3];

function clickLogic (val) {
  
}



function logic () {
   if(row1[0].innerHTML == player && row1[1].innerHTML == player && row1[2].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }
   if(row1[0].innerHTML == player && row2[1].innerHTML == player && row3[2].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }
   if(row1[2].innerHTML == player && row2[1].innerHTML == player && row3[0].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }

   if(row2[0].innerHTML == player && row2[1].innerHTML == player && row2[2].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }

   if(row3[0].innerHTML == player && row3[1].innerHTML == player && row3[2].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }

   if(row1[0].innerHTML == player && row2[0].innerHTML == player && row3[0].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }

   if(row1[1].innerHTML == player && row2[1].innerHTML == player && row3[1].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }
   if(row1[2].innerHTML == player && row2[2].innerHTML == player && row3[2].innerHTML == player) {
    winSound.play()
    alert('Win  ' + player)
        setTimeout(()=>{
            rows.forEach((val)=>{
                val.innerHTML = ''
            })
        },1000)
   }

console.log(rows)
}

rows.forEach((val)=>{

    val.addEventListener('click',()=>{
sound.play()
        if(val.innerHTML == '') {
            val.innerHTML = player
            logic()
            if(player == 'X') {
                player = 'O'
            }else {
                player = 'X'
            }
        }
  
 
    })
})


