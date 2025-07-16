var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser');

var leitor = new Reader();


async function main() {
    var data = await leitor.Read('./users.csv')
    var dadosProcessados = Processor.Process(data)

    var users = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(users)

    console.log(html)
}

main()