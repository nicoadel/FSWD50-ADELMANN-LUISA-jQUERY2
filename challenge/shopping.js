$(document).ready(function() {

   // for (var i = 0; i < items.length; i++) {
    //    items[i].addEventListener("click", function(), false)
   // }

createArray();
    function createArray(){
    	var image = document.getElementById('item_name_id_1').innerHTML;
    	var text = $("#item_name_id_1").innerHTML;
    	var price = $("#item_price_id_1").innerHTML;
    	console.log(image);
console.log(text);
console.log(price);
    }









    function Item(img, text, price) {
        this.image = img;
        this.text = text;
        this.price = price;

    }
})