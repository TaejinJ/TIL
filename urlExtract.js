//**정규식 사용 */
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }
/**문자열 잘라서 추출  2번출력시 원하는 도메인네임을 추출 할 수 없음.*/
//   function domainName(url){
//    url = url.replace("http://","").replace("https//","").replace("www.","");
//    return url.split(".")[0];
//   }

//1
 console.log( domainName("http://github.com/carbonfive/raygun"));
 //2
 console.log( domainName("http://mynamewww.com"));
 
