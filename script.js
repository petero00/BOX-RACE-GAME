let A = document.getElementById('A');
let Aleft = 0;
let B = document.getElementById('B');
let moji = document.getElementById('moji');
let Bleft = 0;
let flag = 1;
let reberu = 1;
let jikan = 5;


function ugoki() {
    if(flag === 2) {
        Aleft =  Aleft + (10 * reberu);
        A.style.left = Aleft + 'px';
    }
}
function keizoku() {
    if(flag === 2) {
        Bleft =  Bleft + (10 * reberu);
        B.style.left = Bleft + 'px';
        if(Bleft === 1400) {
            moji.style.display = 'block';
            moji.style.fontSize = '200px'
            moji.style.margin = '0 auto';
            if (Aleft >= Bleft) {
                moji.textContent = '🥇';
            }else{
                moji.textContent = '🥈';
            }
            clearInterval(a);
        }
    }
}
let a = setInterval('keizoku()',280);

function botan() {
    document.getElementById('dis1').style.display = 'none';
    document.getElementById('dis2').style.display = 'block';
    let timerId = setInterval(function() {
        moji.textContent = jikan;
        if(jikan <= 0) {
            flag = 2;
            moji.style.display = 'none';
            clearInterval(timerId);
        }
        jikan--;
    }, 1000);
}

function abc() {
    if (reberu === 1) {
        document.getElementById('botan2').textContent = 'レベル2'
        reberu = 2;
    }else{
        document.getElementById('botan2').textContent = 'レベル1'
        reberu = 1;
    }

}
