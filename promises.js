function display(data) {
  console.log(data);
}

const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display); // input from the twitter API link

console.log('Me first!');

