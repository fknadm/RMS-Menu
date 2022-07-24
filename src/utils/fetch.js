export const globalFetch = async () => {
    return fetch('https://us-central1-rms-deployment1.cloudfunctions.net/mitems', {
        method: "GET"
    })
        .then(resp =>
            resp.json()
        )
}

export const remOrder = async (data) => {
    return fetch(`https://us-central1-rms-deployment1.cloudfunctions.net/ordersingle/${data.txid}`, {
        method: "GET",
    })
        .then(resp =>
            resp.json()
        )
        .then(res => {
            const id = res.map(x => {return x.id})

            fetch(`https://us-central1-rms-deployment1.cloudfunctions.net/orders/${id}`, {
                method: "DELETE",
            })
            .then(resp => resp.json)
            .then(console.log('rem success'))

        })


}