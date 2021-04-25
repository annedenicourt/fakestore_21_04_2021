import {GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../actions/cartActions';

const initProduct = {
    numberCart:0,
    cart:[],
}

function cartReducer(state = initProduct,action){
    switch(action.type){
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:

            if(state.numberCart===0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    imageUrl:action.payload.imageUrl,
                    price:action.payload.price
                } 
                state.cart.push(cart); 
                
            }
            else{
                let check = false;
                state.cart.map((item,key)=>{
                    if(item.id===action.payload.id){
                        state.cart[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        imageUrl:action.payload.imageUrl,
                        price:action.payload.price
                    }
                    state.cart.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
                
            }
            case INCREASE_QUANTITY:
                const index = state.cart.findIndex(item => item.id === action.payload)
                state.cart[index].quantity++;
                state.numberCart++
                console.log(state.cart)
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                const indexItem = state.cart.findIndex(item => item.id === action.payload)
                state.cart[indexItem].quantity--;
                state.numberCart--

                return{
                    ...state
                }
            case DELETE_CART:
                const indexDelete = state.cart.findIndex(item => item.id === action.payload)
                let quantity = state.cart[indexDelete].quantity
                console.log(indexDelete)
                state.cart.splice(indexDelete,1)
                console.log(state.cart)
                //state.cart.filter(item=>{ return item.id!==state.cart[indexDelete].id})
                return{
                    ...state,
                    numberCart: state.numberCart - quantity,
                    //cart: state.cart.filter(item=>{ return item.id!==state.cart[indexDelete].id})

                }
        default:
            return state;
    }
}

export default cartReducer;