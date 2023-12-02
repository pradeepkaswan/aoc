const fs = require('fs');
const file = fs.readFileSync('input.txt', 'utf8');

const lines = file.split('\n');

const wordToNum = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

const newLines = [];
lines.forEach((line) => {
	let newLine = line;
	[...Object.keys(wordToNum)].forEach((num) => {
		newLine = newLine.replaceAll(
			num,
			`${num.charAt(0)}${wordToNum[num]}${num.charAt(num.length - 1)}`,
		);
	});
	newLines.push(newLine);
});

const nums = [];
for (let i = 0; i < newLines.length; i++) {
	const numLine = [];
	for (let j = 0; j < newLines[i].length; j++) {
		const num = parseInt(newLines[i].charAt(j));
		if (!isNaN(num)) {
			numLine.push(num);
		}
	}
	nums.push(numLine);
}

const sum = nums.reduce((acc, curr) => {
	let first,
		last = 0;
	if (curr.length === 1) {
		first = curr[0];
		last = curr[0];
	} else {
		first = curr[0];
		last = curr[curr.length - 1];
	}

	const add = parseInt(`${first}${last}`);

	return (acc += add);
}, 0);

console.log(sum);
