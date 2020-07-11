var currentDate = new Date();
var month = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var day = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

export const CurrentDate = {
            date: day[currentDate.getDay()] + ", " + currentDate.getDate() + " de " + month[currentDate.getMonth()] + " de " + currentDate.getFullYear(),
}

