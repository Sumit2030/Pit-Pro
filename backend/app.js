let express = require('express')

let app = express()
app.get('/',function(req,res){
    let data = [
    {
        title : "Article-1",
        body : "Description-1"
    },
    {
         title : "Article-2",
        body : "Description-2"
    }
]
res.json(data)
})
app.listen(3001,function(){
    console.log('Server Started')
})