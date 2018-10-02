const itemsData = [{
        name: "Nike",
        art: "Running Shoe",
        price: 120,
        photo: "https://via.placeholder.com/300x200"
    },
    {
        name: "Adidas",
        art: "Lifting Shoe",
        price: 140,
        photo: "https://via.placeholder.com/300x200"
    },
    {
        name: "Puma",
        art: "freetime Shoe",
        favFoods: ["tuna", "catnip", "celery"],
        price: 180,
        photo: "https://via.placeholder.com/300x200"
    }
];





$(document).ready(function() {
    function itemTemplate(item) {
        return `
            <div class="item_shopping">
        	<div class="item_img">
        		<img src="${item.photo}" id="item_img_id_1 alt="">
        	</div>
        	<div class="item_name"id="item_name_id_1">
        		${item.name}
        	</div>
        	<div class="item_price"id="item_price_id_1">
        		${item.price}
        	</div>
			</div>
			`
    }

    function itemShoppingCart(item) {
        return `
            	<div class="item">
            <div class="add_delete">
                <button class="button_favorite" type="button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/High-contrast-emblem-favorite.svg/2000px-High-contrast-emblem-favorite.svg.png" alt="">
						</button>
                    <button class="button_delete" type="button">
                        <img src="http://cdn.onlinewebfonts.com/svg/img_373781.png" alt="">
						</button>
            </div>
            <div class="item_img">
                <img src="${item.photo}" alt="">
		           	</div>
                <div class="item_description">
                    <span>${item.name}</span>
                    <span>Description</span>
                    <span>Color</span>
                </div>
                <div class="quantity">
                    <button class="button_plus" type="button">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/PlusCM128.svg/2000px-PlusCM128.svg.png" alt="">
								</button>
								<input type="text" name="name" value="1">
                        <button class="button_minus" type="button">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Minus-.svg/1024px-Minus-.svg.png" alt="">
								</button>
                </div>
                <div class="price">
                    ${item.price}
                </div>
            </div>
            	`
    }



    document.getElementById("shop").innerHTML =
        `<h1>Shoes (${itemsData.length} results)</h1>
   				 ${itemsData.map(itemTemplate).join('')}
   				 `



    $('.button_minus').on('click', function(e) {
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }

        $input.val(value);

    });

    $('.button_plus').on('click', function(e) {
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }

        $input.val(value);
    });

    function onClick() {

        document.getElementById("cart").innerHTML =
            ` ${itemsData.map(itemShoppingCart).join('')} `


    }


    var itemslol = document.getElementsByClassName("item_shopping");
    console.log(itemslol);
    for (var i = 0; i < itemslol.length; i++) {
        itemslol[i].addEventListener("click", onClick)
    }




})