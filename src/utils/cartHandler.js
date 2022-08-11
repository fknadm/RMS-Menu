import Moment from 'react-moment';
import moment from 'moment';

export const cartAdd = async (state) => {

    const exist = state.currentCart
    const newOrder = state.newItem
    const comm = state.comments
     
    console.log(state,':state' )
    console.log(exist,':existing')
    console.log(newOrder, ':current item')
    console.log(comm)


    const targetId = newOrder.id

    const matchingItems = exist.filter(x => { return x.id === targetId})
    const increment = matchingItems.length+1
    
    console.log(increment)

    if (exist.length > 0) {
        for (let i =0; i < exist.length; i++) {
            if (exist[i].id === targetId) {
                const fresh = {...newOrder,'tid':moment().unix(),comms:comm}
                const newArray = exist.concat(fresh)
                
                return newArray

            }
            else if (exist[i].id !== targetId) {
                const fresh = {...newOrder,'tid':moment().unix(),comms:comm}
                const newerArray = exist.concat(fresh)
                
                return newerArray

            }
    }
    }

    if (exist. length < 1) {
        console.log('neg route')
        const newer = [{...newOrder,'tid':moment().unix(),comms:comm}]
        return newer
    }

    
    
}


export const cartDel = async (arr) => {

    var newar = []

        const toDel = arr.toRem
        const data = arr.items

        const test = data.map((el) => el.name).indexOf(toDel);
        for (let g = 0; g < data.length; g++) {
          if (test !== g) {
            newar.push(data[g])
          }
        }    
        return newar

}
