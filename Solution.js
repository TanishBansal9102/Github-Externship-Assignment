class FixEquation {
    findMissingDigit(equation) {
        for(let i = 0 ; i < 10 ; i++) {
			let operands = equation.split(" "), flag = true;
			for(let j = 0 ; j < operands.length ; j += 2) {
			    if(operands[j].includes("?")) {
			        let k = operands[j].indexOf("?"), str = operands[j];
			        let temp = str.substring(0,k) + i + str.substring(k+1);
			        if(temp[0] === '0' && temp.length > 1) {
			            flag = false;
			            break;   
			        }
			        operands[j] = temp;
			    }
			}
			if(flag && Number(operands[0])*Number(operands[2]) + Number(operands[4]) === Number(operands[6])) return i;
		}
		return -1;
    }
}

let solve = new FixEquation();
console.log("Equation: 42 * 47 + 2 = 1?76");
console.log("Returns: ", solve.findMissingDigit("42 * 47 + 2 = 1?76"));
console.log("Equation: 4? * 47 + 2 = 1976");
console.log("Returns: ", solve.findMissingDigit("4? * 47 + 2 = 1976"));
console.log("Equation: 42 * ?7 + 2 = 1976");
console.log("Returns: ", solve.findMissingDigit("42 * ?7 + 2 = 1976"));
console.log("Equation: 42 * ?47 + 2 = 1976");
console.log("Returns: ", solve.findMissingDigit("42 * ?47 + 2 = 1976"));
console.log("Equation: 2 * 12? + 2 = 247");
console.log("Returns: ", solve.findMissingDigit("2 * 12? + 2 = 247"));