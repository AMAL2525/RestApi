const server = 'amal:amal1234@cluster.dq1pj.mongodb.net';
const database = 'mmyFirstDatabase';
class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb+srv://${server}/${database}?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}
module.exports = new Database()