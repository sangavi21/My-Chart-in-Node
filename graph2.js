var read=require('fs');
var lineReader = require('readline').createInterface({
  input: read.createReadStream('datafile.csv'),
  //output: read.createWriteStream('barchart1.json')
});

var jsonObj={};
var headers = [];
var c=0;
lineReader.on('line', function (line) 
{
    
    if(c === 0){
       headers =line.split(',');
        c++;
    }
    else
    {
        var currentData = line.split(',');
        for (var j=0; j<headers.length; j++) {
                       
            if(j === 0){
               jsonObj[headers[j].replace(/\"/g, "")] = currentData[j].replace(/\"/g, ""); 
            }
            if (j === 11) {
                jsonObj[headers[j].replace(/\"/g, "")] = currentData[j].replace(/\"/g, ""); 
            }
        }
       // console.log(jsonObj);
        var jso=JSON.stringify(jsonObj);
        read.appendFile('barchart2.json',jso,function(err) {});

    }

});




