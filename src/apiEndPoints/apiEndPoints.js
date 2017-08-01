/**
 * Created by vmalav on 8/1/2017.
 */
module.exports = {
    getEndPoints: getEndPoints
}

function getEndPoints(environment) {
    let endPoint = {}
    let API_ENDPOINT, apiUrl
    if(environment == 'local'){
        apiUrl = 'localhost:4000'
    }else{
        apiUrl = `${API_ENDPOINT}`
    }

    endPoint['GetPermission'] = `http://${apiUrl}/entitlement-service/v1/permissions`
    return endPoint
}