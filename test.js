const loggie = require("./index")

loggie.init({
  secretKey: "R240hWauo6v8RM8DF6Mv7dSCpKmHeD8x02Vi",
  bucketId: "5ecf2e28bf05c318c22349d1"
})

loggie.info({
	message: "testing from npm module"
})