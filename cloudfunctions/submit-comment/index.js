const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async () => {
    const wxContext = await cloud.getWXContext()

    return {
        openid: wxContext.OPENID
    }
}