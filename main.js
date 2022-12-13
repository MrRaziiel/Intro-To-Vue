const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            selectedVariant: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details : ['50% cotton', '30% wool' , '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0, onSale: true },
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
        updateVariant(index){

                console.log("color");
                this.selectedVariant = index;
            }


    },
    computed: {
        title() {
            var titleToShow = this.brand + ' ' + this.product
            if (this.variants[this.selectedVariant].onSale)
                titleToShow += " is on sale"
            return titleToShow;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        }
    }
})
