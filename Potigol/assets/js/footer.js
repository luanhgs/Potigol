const nuvem = document.querySelector("#footer .an .nuv-an");
const ilhas = document.querySelector("#footer .an .sea-an");

function move(){
    var moved;

    moved = getXBackgroundPosition(nuvem);
    moved += 0.8;
    nuvem.style.backgroundPosition = moved + "px 0px";

    moved = getXBackgroundPosition(ilhas);
    moved -= 1;
    ilhas.style.backgroundPosition = moved + "px 0px";
}
function getXBackgroundPosition(el){
    if(el.style.backgroundPositionX != ""){
        var x = el.style.backgroundPositionX.replace("px","");
        return parseFloat(x);
    }       
    else 
        return 0;
}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
/*
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}*/
//var animacao = debounce(move, 50);

setInterval(move,40);