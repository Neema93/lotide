const letterPositions = function(sentence) {
    const results = {};
 //console.log(sentence);
    // logic to update results here
    for(let i = 0; i < sentence.length; i++ )
    {
        let token = sentence[i];
        //console.log(token);
        if(!results[token]){
            results[token] = [];
        }
        results[token].push(i);
    }

    return results;
  };
 //console.log("hello")
 console.log(letterPositions("hello"));
