
const AMZ_HASH = {
  'api' : 'api',
  'http' : 'api',
  'endpoint' : 'api',
  's3' : 's3',
  'storage' : 's3',
  'bucket': 's3',
  'store': 's3',
  'dynamodb': 'dynamodb',
  'database': 'dynamodb',
  'table': 'dynamodb',
  'sns': 'sns',
  'notification': 'sns' 
}

module.exports = function (word){
  return AMZ_HASH[word];
}