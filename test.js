const loggieClient = require("./index")

const loggie = new loggieClient({
	secretKey: "this is a secretKey",
	bucketId: "5ecd25f0bf05c318c22349bf"
})

loggie.info({
	message: "testing from npm module"
})