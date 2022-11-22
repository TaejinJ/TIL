function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }

 console.log( domainName("http://github.com/carbonfive/raygun"));
 console.log( domainName("http://mynamewww.com"));
 