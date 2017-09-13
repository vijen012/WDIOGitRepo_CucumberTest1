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

    endPoint['GetUserDetails'] = `http://${apiUrl}/user-details/v1/getUserDetails`
    return endPoint
}