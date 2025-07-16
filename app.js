var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')

var leitor = new Reader


async function main() {
    var data = await leitor.Read('./users.csv')
    var dadosProcessados = Processor.Process(data)

    var users = new Table(dadosProcessados)

    console.log(users.header)
    console.log(users.rows)
    console.log(users.RowCount)
    console.log(users.ColumnCount)
}

main()