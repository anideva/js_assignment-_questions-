/* Hey!
Now that Snapchat and Slingshot are soooo 2018, the teenagers of the world have all switched to the new hot app called BAPC (Bidirectional and Private Communication).

This app has some stricter social rules than previous iterations.

For example, if someone says goodbye using Later!, the other person is expected to reply with Alligator!. You can not keep track of all these social conventions and decide to automate any necessary responses, starting with the most important one: the greetings.

When your conversational partner opens with he…ey, you have to respond with hee…eey as well, but using twice as many e’s!

Given a string of the form he…ey of length at most 1000, print the greeting you will respond with, containing twice as many e’s.*/ 

function hey (str){
  let eCount= 0;

  for (let i=0; i<str.length; i++){
    if (str[i]=== 'e'){
      eCount++;
    }
  }
  let result = 'h'; //always start with the h alphabet 

  //double the number of e 
  for (let i =0;i <eCount*2; i++){
    result +='e';
  };
