// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    const numStr= num.toString();
    const length = numStr.length;
    
    const expandedForm = [];

    for (let i = 0; i < length; i++) {
        //문자열이어서 정수형태로 변환.
        const digit = parseInt(numStr[i]);
        if(digit !== 0){
            //현재 자릿수보다 뒤에나오는 0의 갯수 계산
            const zeros= '0'.repeat(length - i - 1);
            expandedForm.push(`${digit}${zeros}`);
        }
    }
    return  expandedForm.join(' + ');
  }

  console.log(expandedForm(70304)); // '70000 + 300 + 4'
