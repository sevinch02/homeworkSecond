let div = document.getElementsByTagName('div')

for(let i = 0; i < div.length;i++){
    setTimeout(() =>{
        div[i].style.opacity = '1';
       }, (i+1) *2000)
    
}

let span = document.getElementsByTagName('span')

for(let i = 0; i < span.length;i++){
    setTimeout(() =>{
        span[i].style.opacity = '0.8';
       }, (i+1) *2000)
    
}