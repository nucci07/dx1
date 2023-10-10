function maiorpalavra(){
    var a,
        b;

        const saida = document.querySelector('h1');

        a = document.querySelector('#a').value;
        b = document.querySelector('#b').value;

        if(a.length <= b.length){
            saida.innerHTML = "A cidade "+ b +" tem mais letras do que a cidade "+ a ;
        }
        else{
            saida.innerHTML = "A cidade "+ a +" tem mais letras do que a cidade "+ b ;
        }



}