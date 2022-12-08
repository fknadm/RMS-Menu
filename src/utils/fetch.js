import Moment from 'react-moment';
import moment from 'moment';

export const bannerFetch = async () => {
    return fetch('https://adbanner-dkadb5fypa-uc.a.run.app/SlloQMWcIMs2RrcKMaaW', {
        method: "GET"
    })
        .then(resp =>
            resp.json()
        )
}

export const globalFetch = async () => {
    return fetch('https://us-central1-rms-deployment1.cloudfunctions.net/mitems', {
        method: "GET"
    })
        .then(resp =>
            resp.json()
        )
}

export const ordersFetch = async () => {
    return fetch('https://orders2-dkadb5fypa-uc.a.run.app/', {
        method: "GET"
    })
        .then(resp =>
            resp.json()
        )
}

export const globalFetchTables = async () => {
    return fetch('https://us-central1-rms-deployment1.cloudfunctions.net/orders', {
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

export const sendNewOrder = async (data) => {
    if (data.fdata.length > 0 ) {
        var fsum = data.fdata.map(item => item.iprice).reduce((prev, next) => parseInt(prev) + parseInt(next))
    }

    else {
        var fsum = 0
    }

    if (data.ddata.length > 0 ) {
        var dsum = data.ddata.map(itemD => itemD.iprice).reduce((prev, next) => parseInt(prev) + parseInt(next))
    }

    else {
        var dsum = 0
    }
    var totalData = parseInt(fsum)+parseInt(dsum)

    console.log(data.mdata, 'LAST KOPEK')

    const lastmil = moment().valueOf()
    const shortId = moment().format('hm')+JSON.stringify(lastmil).slice(-2)
    const order = {
        drink:data.ddata,
        food:data.fdata,
        type:'app',
        orderId:data.tdata.table+shortId+moment().format('MMDD'),
        status:'pending',
        submitted:moment().format('DD/MM/YYYY'),
        submitted_t:moment().format('HH:mm'),
        table_no:data.tdata.table,
        tprice: totalData,
        txid:moment().format('hMs')+shortId+moment().format('MMDD'),
        end:'',
        masterTable:data.tdata.table
    }

    return fetch('https://us-central1-rms-deployment1.cloudfunctions.net/orders', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json"
          },

    })
        // .then(resp => {
        //     if (resp.status === 200 || resp.status === 201) {
        //         console.log('success')
        //     }
        // }
           
        // )
}