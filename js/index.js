    window.onload = function (){
        
        let btnMore = document.getElementById('btn-learn');
            btnMore.addEventListener('click' , () => {
            scroll();
        })  

        let btnHire = document.getElementById('btn-hire');
        btnHire.addEventListener('click' , () => {
         window.scrollTo(0,5000)
        }) 

}


function scroll(){
    
    let pos = document.getElementById('skill-content').clientHeight + 100
    window.scrollTo(0,pos)
}
