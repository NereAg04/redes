const panels = document.querySelectorAll( '.panel' );

panels.forEach( (panel) => {

    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    } );

} );

function removeActiveClasses(){
    panels.forEach( panel => {
        panel.classList.remove('active');
    } )
}

/* cuadros */

function _(id){return (document.getElementById(id))}
var GBD=new GenbetaDevAPP()

function GenbetaDevAPP(){
	this.big=function(element){
		_("GBD-APP").className=''
		_("GBD-APP-BIG").setAttribute('big','true')
		var GBD_APP_TOP = document.body.getElementsByClassName('GBD-APP-TOP')
		if(GBD_APP_TOP.length > 0) GBD_APP_TOP[0].className = 'cont'
		element.className += ' GBD-APP-TOP'
	}
}

