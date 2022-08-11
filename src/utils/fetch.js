import Moment from 'react-moment';
import moment from 'moment';

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

export const sendNewOrder = (data) => {
    if (data.fdata.length > 0 ) {
        var fsum = data.fdata.map(item => item.iprice).reduce((prev, next) => prev + next)
    }

    else {
        var fsum = 0
    }

    if (data.ddata.length > 0 ) {
        var dsum = data.ddata.map(itemD => itemD.iprice).reduce((prev, next) => prev + next)
    }

    else {
        var dsum = 0
    }
    var totalData = parseInt(fsum)+parseInt(dsum)

    const order = {
        drink:data.ddata,
        food:data.fdata,
        orderId:moment().format('hMs')+data.tdata.table,
        status:'pending',
        submitted:moment().format('DD/MM/YYYY'),
        submitted_t:moment().format('HH:mm'),
        table_no:data.tdata.table,
        tprice: totalData,
        txid:moment().format('hMs'),
        end:''
    }

    return fetch('https://us-central1-rms-deployment1.cloudfunctions.net/orders', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json"
          },

    })
        .then(resp => {
            if (resp.status === 200 || resp.status === 201) {
                console.log('success')
            }
        }
           
        )
}