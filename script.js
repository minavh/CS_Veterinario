//PARA EL FILTRO

var mostrandoTodos = document.querySelector('.filtro .item-lista[category="all"]')


var itemLista =
document.querySelectorAll(".item-lista");

itemLista.forEach (function (item) {
    item.addEventListener ("click",function () {
        var EspeciePac = this.getAttribute ("category")
        console.log (EspeciePac);

        var ImagenPac = document.querySelectorAll(".pacientes");
        ImagenPac.forEach(function(item){
            item.style.display = "none"
        });

        var TodosPac = document.querySelectorAll('.pacientes[category="' + EspeciePac + '"]');
        TodosPac.forEach(function(item) {
            item.style.display="block"
        });

    });

})

mostrandoTodos.addEventListener("click",function () {
    var sinFiltro  = document.querySelectorAll(".pacientes");
    sinFiltro.forEach (function (item) {
        item.style.display = "block";
    });
});

