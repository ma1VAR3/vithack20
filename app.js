var express=require("express")
var app= express()
var request=require("request")

app.get("/",function(req,res){
    request("https://api.rootnet.in/covid19-in/contacts",function(error,response,body){
		if(!error && response.statusCode==200){
			var data=JSON.parse(body)
            console.log(data)
            res.send("hello")
		}
		else{
			throw Error(error)
		}
	})
})

app.get("/notif",function(req,res){
	request("https://api.rootnet.in/covid19-in/notifications",function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body)
			console.log(data)
			res.send("lmao yes")
		}
		else{
			throw Error(error)
		}
	})
})

app.get("/hospital/beds",function(req,res){
	request("https://api.rootnet.in/covid19-in/notifications",function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body)
			console.log(data)
			res.send("lol yes")
		}
		else{
			throw Error(error)
		}
	})
})

app.get("/hospital/mc",function(req,res){
	request("https://api.rootnet.in/covid19-in/notifications",function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body)
			console.log(data)
			res.send("tumhari maa ka")
		}
		else{
			throw Error(error)
		}
	})
})

app.listen(process.env.PORT || 1902,function(){
	console.log("server started")
})