export default {
    actions:{
       async fetch(ctx,){

            let DataNow = new Date().toLocaleDateString(); //Дата

            let thatMouth = DataNow.slice(3);
        
            const res = await fetch('https://fixdevice.pro/api/get.php');

            const items = await res.json();

            ctx.commit('updateItems', items)

        }


    },
    mutations:{
        updateItems(state,items){
            state.items = items
        }
    },
    state:{
        items:[]
    },
    getters:{
        allItems(state){
            return state.items
        }
    },
}
