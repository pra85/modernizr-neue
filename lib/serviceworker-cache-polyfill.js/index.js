Cache.prototype.addAll||(Cache.prototype.addAll=function(requests){function NetworkError(message){this.name="NetworkError",this.code=19,this.message=message}var cache=this;return NetworkError.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return requests=requests.map(function(request){return request instanceof Request?request:String(request)}),Promise.all(requests.map(function(request){"string"==typeof request&&(request=new Request(request));var scheme=new URL(request.url).protocol;if("http:"!==scheme&&"https:"!==scheme)throw new NetworkError("Invalid scheme");return fetch(request.clone())}))}).then(function(responses){return Promise.all(responses.map(function(response,i){return cache.put(requests[i],response)}))}).then(function(){})});
//# sourceMappingURL=index.js.map