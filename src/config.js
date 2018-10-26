// ES
let mongoUrl = process.env.DB_ENDPOINT || `mongodb://127.0.0.1/pop`;
let esUrl = process.env.ES_ENDPOINT || "http://127.0.0.1:9200";

if (process.env.NODE_ENV === "test") {
  mongoUrl = `mongodb://127.0.0.1/poptest`;
  esUrl = "127.0.0.1:9200";
}

console.log(`MONGO : ${mongoUrl}`);
console.log(`ES : ${esUrl}`);
module.exports = {
  mongoUrl,
  esUrl
};
