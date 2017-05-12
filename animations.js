var Animator = {
    
    makeDisappear: function (id) {
        var elementToRemove = document.getElementById(id);
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
        
}

 