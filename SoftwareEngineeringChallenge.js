// example subset of Bob’s marbles
var marbles = [
	{ id: 1, color: "blue", name: "Bob", weight: 0.5 },
	{ id: 2, color: "red", name: "John Smith", weight: 0.25 },
	{ id: 3, color: "violet", name: "Bob O'Bob", weight: 0.5 },
	{ id: 4, color: "indigo", name: "Bob Dad-Bob", weight: 0.75 },
	{ id: 5, color: "yellow", name: "John", weight: 0.5 },
	{ id: 6, color: "orange", name: "Bob", weight: 0.25 },
	{ id: 7, color: "blue", name: "Smith", weight: 0.5 },
	{ id: 8, color: "blue", name: "Bob", weight: 0.25 },
	{ id: 9, color: "green", name: "Bobb Ob", weight: 0.75 },
	{ id: 10, color: "blue", name: "Bob", weight: 0.5 }
];

// Time complexity is O(N^2) at worst 
// Space compexity is O(N^2) at worst depending on the length of the array and the length of the name. Name would likely have a small upper bound though, so O(N) is more reasonable.
// Since this is a small function and there is no need to persist any state, I would host this as a serverless function using AWS Lambda
// If Bob had millions of marbles, I would store the marbles in a database like RDS and limit the number of marbles per call. 
function sortAndFilter(marbleArray) {
	return marbleArray.filter(marble => isPalindrome(marble.name.toLowerCase().replace(/[^a-z0-9]+/g, "")) && marble.weight >= 0.5)
		.sort((a, b) => {
		    const colorOptions = "roygbiv";
			const colorA = colorOptions.indexOf(a.color.substring(0,1).toLowerCase()); 
			const colorB = colorOptions.indexOf(b.color.substring(0,1).toLowerCase()); 
			if (colorA < colorB) {
			   return -1;
			}
			if (colorA > colorB) {
			   return 1;
			}

			return 0;
		});
}

function isPalindrome(str) {
    for (let i = 0; i < str.length/2; i++) {
   		if (str[i] !== str[str.length - 1 - i]) { 
       		return false; 
       	}
    }

    return true;
}

