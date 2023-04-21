const cloud = require('wx-server-sdk')

cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async () => {
    const wxContext = await cloud.getWXContext()

    return {
        openid: wxContext.OPENID
    }
}