// const AWS = require("aws-sdk");
const { esUrl } = require("./config.js");

let elasticClient = null;
const getElasticInstance = () => {
  if (elasticClient) {
    return elasticClient;
  }
  if (esUrl !== "http://127.0.0.1:9200") {
    let options = {
      hosts: [esUrl],
      connectionClass: require("http-aws-es"),
      awsConfig: new AWS.Config({
        region: "eu-west-3",
        credentials: new AWS.Credentials(
          process.env.AWS_ACCESS_KEY_ID,
          process.env.AWS_SECRET_ACCESS_KEY
        )
      })
    };
    elasticClient = require("elasticsearch").Client(options);
    return elasticClient;
  } else {
    console.log("HERE");
    var elasticsearch = require("elasticsearch");
    elasticClient = new elasticsearch.Client({ host: esUrl });
    return elasticClient;
  }
};

module.exports = getElasticInstance;
