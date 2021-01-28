<template>
  <div class="col-md-3">
    <div class="wsk-cp-product">
      <div class="wsk-cp-img">
        <img :src="product.image_url" alt="Product" class="img-responsive" />
      </div>
      <div class="wsk-cp-text">
        <div class="category">
          <span>{{ product.category }}</span>
        </div>
        <div class="title-product">
          <h3>{{ product.name }}</h3>
        </div>
        <div class="description-prod">
          <p>{{ product.description }}</p>
        </div>
        <div class="card-footer">
          <div class="wcf-left"><span class="price">{{ formatPrice(product.price) }}</span></div>
          <div class="wcf-right mx-1">
            <button @click.prevent="addToCart" class="buy-btn">
              <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
            </button>
          </div>
          <div class="wcf-right mx-1">
            <button @click.prevent="toggleWishlist" :class="['wishlist-btn', {favorite: isFavorite}]">
              <font-awesome-icon icon="heart"></font-awesome-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    formatPrice (price) {
      return price.toLocaleString('id', {
        style: 'currency',
        currency: 'IDR'
      })
    },
    toggleWishlist () {
      if (localStorage.access_token) {
        if (this.isFavorite) {
          this.$store.dispatch('removeFromWishlist', this.product.id)
        } else {
          this.$store.dispatch('addToWishlist', this.product.id)
        }
      } else {
        document.activeElement.blur()
        const ele = document.getElementById('navbarDropdown')

        setTimeout(function () {
          ele.click()
        }, 1500)

        this.$store.commit('setNotif', 'Please login first')
      }
    },
    addToCart () {
      if (localStorage.access_token) {
        this.$store.dispatch('addToCart', {
          ProductId: this.product.id,
          quantity: 1
        })
      } else {
        document.activeElement.blur()
        const ele = document.getElementById('navbarDropdown')

        setTimeout(function () {
          ele.click()
        }, 1500)

        this.$store.commit('setNotif', 'Please login first')
      }
    }
  },
  computed: {
    wishlist () {
      return this.$store.state.wishlist
    },
    isFavorite () {
      return this.wishlist.some(el => el.id === this.product.id)
    }
  }
}
</script>

<style scoped>
.wsk-cp-product{
  background:#fff;
  padding:15px;
  border-radius:6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  position:relative;
  margin:20px auto;
}

.wsk-cp-img{
  position:absolute;
  top:5px;
  left:50%;
  transform:translate(-50%);
  -webkit-transform:translate(-50%);
  -ms-transform:translate(-50%);
  -moz-transform:translate(-50%);
  -o-transform:translate(-50%);
  -khtml-transform:translate(-50%);
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
}

.wsk-cp-img img{
  max-height: 160px;
  max-width:100%;
  transition: all 0.2s ease-in-out;
  border-radius:6px;
}

.wsk-cp-product:hover {
  top:-10px;
}

.wsk-cp-text{
  padding-top:75%;
}

.wsk-cp-text .category{
  text-align:center;
  font-size:12px;
  font-weight:bold;
  padding:5px;
  margin-bottom:25px;
  position:relative;
  transition: all 0.2s ease-in-out;
}

.wsk-cp-text .category > *{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  -khtml-transform: translate(-50%,-50%);
}

.wsk-cp-text .category > span{
  padding: 8px 20px;
  border: 1px solid #214a80;
  background:#214a80;
  color:#fff;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius:27px;
  transition: all 0.05s ease-in-out;
}

.wsk-cp-text .title-product{
  text-align:center;
}

.wsk-cp-text .title-product h3{
  font-size:20px;
  font-weight:bold;
  margin: 5px auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width:100%;
}

.wsk-cp-text .description-prod p{
  margin:0;
}

.wsk-cp-text .description-prod {
  text-align:center;
  width: 100%;
  height: 45px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
}

.card-footer{
  padding: 20px 0 5px;
  border-top: 1px solid #ddd;
}

.card-footer:after, .card-footer:before{
  content:'';
  display:table;
}

.card-footer:after{
  clear:both;
}

.card-footer .wcf-left{
  float:left;
}

.card-footer .wcf-right{
  float:right;
}

.price{
  font-size:15px;
  font-weight:bold;
}

button.buy-btn{
  display:block;
  color:#212121;
  text-align:center;
  font-size: 18px;
  width:30px;
  height:30px;
  line-height:30px;
  border-radius:50%;
  border:1px solid #212121;
  transition: all 0.2s ease-in-out;
}

button.wishlist-btn, button.wishlist-btn.favorite:hover{
  display:block;
  color:#212121;
  text-align:center;
  font-size: 18px;
  width:30px;
  height:30px;
  line-height:30px;
  border-radius:50%;
  border:1px solid #212121;
  transition: all 0.2s ease-in-out;
}

button.buy-btn:hover , button.buy-btn:active, button.buy-btn:focus{
  border-color: #214a80;
  background: #214a80;
  color: #fff;
  text-decoration:none;
}

button.wishlist-btn:hover , button.wishlist-btn:active,
button.wishlist-btn:focus, button.wishlist-btn.favorite{
  border-color: #FF9800;
  background: #FF9800;
  color: #fff;
  text-decoration:none;
}
</style>
