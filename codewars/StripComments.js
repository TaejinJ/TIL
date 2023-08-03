// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
// Example:
// Given an input string of:
// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"






function solution(input, markers) {
    //markers 배열에 있는 주석 마커들을 정규식으로 바꿔 할당. \문자랑 같이 사용되도록 처리 
    const markerPattern = new RegExp(`\\s*(${markers.map(marker => `\\${marker}`).join('|')}).*`, 'g');
    return input.split('\n').map(line => line.replace(markerPattern, '').trim()).join('\n');
  }
  
  
  