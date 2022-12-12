const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            image: './assets/images/socks_green.jpg',
            product: 'Sucks',
            inventory: 10,
            inStock: true,
            details : ['50% cotton', '30% wool' , '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'G']
        }
    },
    methods: {
        addToCart(){
            this.cart +=1 
        },
        removeToCart(){
            if (this.cart >0)
            {
                this.cart -=1 
            }
            
        },
        updateImage(varianteImage){

                console.log("color");
                this.image = varianteImage;
            }


    }
})
