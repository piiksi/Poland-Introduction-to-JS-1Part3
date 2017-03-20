var arraySelect = document.getElementsByTagName('select');

var element = document.getElementById('content');

function dropdownStyles(event){
    
    var target = event.target;
    
    
    if ( target.is = ( 'select' ) ) {
        
    var style = event.target.id;
    var value = event.target.value;
    
    element.style[style] = value;
    }
}


for( var i = 0; i < arraySelect.length; i++ ){
    
    arraySelect[i].addEventListener( 'change', dropdownStyles );
    
}