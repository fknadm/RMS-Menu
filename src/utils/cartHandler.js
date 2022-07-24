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
                const fresh = {...newOrder,'tid':targetId+increment,comms:comm}
                const newArray = exist.concat(fresh)
                
                return newArray

            }
            else if (exist[i].id !== targetId) {
                const fresh = {...newOrder,'tid':targetId,comms:comm}
                const newerArray = exist.concat(fresh)
                
                return newerArray

            }
    }
    }

    if (exist. length < 1) {
        console.log('neg route')
        const newer = [{...newOrder,'tid':newOrder.id,comms:comm}]
        return newer
    }

    
    
}
