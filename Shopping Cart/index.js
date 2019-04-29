var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                class: "electronics",
                items: [
                    {
                        id: 1,
                        name: 'iphone',
                        price: 6188,
                        count: 1
                    },
                    {
                        id: 2,
                        name: 'ipad',
                        price: 5888,
                        count: 1,
                    },
                    {
                        id: 3,
                        name: 'mac',
                        price: 21488,
                        count: 1
                    },
                ]
            },
            {
                class: "necessities",
                items: [
                    {
                        id: 4,
                        name: 'toothbrush',
                        price: 4,
                        count: 2
                    },
                    {
                        id: 5,
                        name: 'towel',
                        price: 10,
                        count: 3
                    }
                ]
            },
            {
                class: "garden stuff",
                items: [
                    {
                        id: 6,
                        name: 'apple',
                        price: 8,
                        count: 1
                    },
                    {
                        id: 7,
                        name: 'banana',
                        price: 3,
                        count: 2
                    },
                    {
                        id: 8,
                        name: 'watermelon',
                        price: 12,
                        count: 1
                    }
                ]
            }

            
        ],
        selected: [],
    },
    computed: {
        totalPrice(){
            var list = []
            for(i of this.list){
                list.push(...(i.items))
            }
            var total = list.reduce((sum, item)=>{
                if(this.selected.indexOf(item.id)!==-1){
                    return (sum + item.price*item.count)
                }
                return sum
            }, 0)
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        }
    },
    methods: {
        minusOne(i, j){
            this.list[i].items[j].count--
            if(!this.list[i].items[j].count){
                this.list[i].items.splice(j, 1)
            }
        },
        addOne(i,j){
            this.list[i].items[j].count++
        },
        switchCheck(id){
            var ind = this.selected.indexOf(id)
            if(ind === -1){
                return this.selected.push(id)
            }
            this.selected.splice(ind, 1)
        },
        switchAll(e){
            if(!e.target.checked){
                return this.selected = []
            }
            var all = []
            for(i of this.list){
                all.push(...(i.items))
            }
            this.selected = all.map(i => i.id)
        }
    }
})