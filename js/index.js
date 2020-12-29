    window.onload = function (){
        
        let btnMore = document.getElementById('btn-learn');
            btnMore.addEventListener('click' , () => {
            scroll();
        })  

}

    

function scroll(){
    
    let pos = document.getElementById('skill-content').clientHeight + 100
    window.scrollTo(0,pos)
}

