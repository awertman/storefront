var express = require('express')
var router = express.Router()
var http = require('http')

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req)
  var options = {
    host: 'www.loopnet.com',
    // /xNet/MainSite/Listing/Search/SearchResults.aspx#/San-Francisco,CA/Retail/For-Lease/c!ARYC$BAQIB
    // linkcode acts are your authentication
    path: '/xNet/MainSite/Listing/Search/SearchResults.aspx?linkcode=13890#/San-Francisco,CA/Retail/For-Lease/c!ARYCBAAGAg$AAECAQ'
  }

  callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
        str += chunk
      })
    response.on('end', function () {
      res.send(str)
    })
  }

  http.request(options, callback).end()
})

module.exports = router

