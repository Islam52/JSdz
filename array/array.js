
window.onload = () => {
    document.querySelector('#text').oninput = function() {
        var value = this.value.trim();
        var title = document.querySelectorAll('.ul li');
        if(value !=''){
            title.forEach(Element => {
                if(Element.innerText.search(value) == -1) {
                    Element.classList.add('hide')
                }               
            });
        } else {
            title.forEach(elem => {
                elem.classList.remove('hide');
            })
        }
        
        console.log(this.value);
    }
};
