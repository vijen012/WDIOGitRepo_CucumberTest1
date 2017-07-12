/**
 * Created by vmalav on 6/26/2017.
 */
var oracleDb = require('oracledb')
//to get the row data in column-value pair
oracleDb.outFormat = oracleDb.OBJECT
var await = require('asyncawait/await')
var con, dbResult
module.exports={
    createOracleDbConnection: createOracleDbConnection,
    getOracleConnection: getOracleConnection,
    getResultSet: getResultSet
}

function createOracleDbConnection(dbConfig) {
    await(function getConn(done){
        new Promise(function(resolve, reject){
         oracleDb.getConnection({
                    user: dbConfig.user,
                    password: dbConfig.password,
                    connectString: dbConfig.connectString
                }, function (err, connection) {
                    if(err) {
                        console.error("Connection not established with oracle database:- ", err.message)
                    }else{
                        console.log("Connected with oracle database")
                        con = connection
                    }
                    done()
                }
            )
        })
    })
}

function doRelease()
{
    con.close(function(err) {
                if (err) {
                    console.error(err.message);
                }
            });
}

function getOracleConnection() {
    return con
}

function getResultSet(sqlQuery){
    return new Promise(function(resolve, reject){
        con.execute(sqlQuery, function (err, result) {
            if(err){
                console.error(err.message)
                reject(err)
            }else{
                //console.log(result)
                resolve(result)
            }
        })
    })
}