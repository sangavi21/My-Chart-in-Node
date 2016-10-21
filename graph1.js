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
        var currentLineData = line.split(',');
        for (var j=0; j<headers.length; j++) {
                       
            if(j === 0){
               jsonObj[headers[j].replace(/\"/g, "")] = currentLineData[j].replace(/\"/g, ""); 
            }
            if (j === 5) {
                jsonObj[headers[j].replace(/\"/g, "")] = currentLineData[j].replace(/\"/g, ""); 
            }
        }
       // console.log(jsonObj);
        var jso=JSON.stringify(jsonObj);
        read.appendFile('barchart1.json',jso,function(err) {});

    }

});




