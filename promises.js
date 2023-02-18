function display(data) {
  console.log(data);
}

const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display); // input from the twitter API link

console.log('Me first!');

function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){/* blocks js thread for 300ms */}
setTimeout(printHello, 0);
const futureData2 = fetch('https://twitter.com/will/tweets/1')
futureData2.then(display)
blockFor300ms()
console.log("Me first!");