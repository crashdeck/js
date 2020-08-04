const crashdeck = require("./index")

crashdeck.init({
  secretKey: "R240hWauo6v8RM8DF6Mv7dSCpKmHeD8x02Vi",
  bucketId: "5ecf2e28bf05c318c22349d1"
})

crashdeck.info({
	message: "testing from npm module"
})