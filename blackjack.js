let count = 0;
		
		function cc(card) {
			if (card >= 2 && card <= 6) {
				count += 1;
			} else if (card >= 7 && card <= 9) {
				count += 0;
			} else {
				count -= 1;
			}
			let bet = "";
			let hold = "";
			let output = document.getElementById("output");
			
			if (count > 0) { 
				bet += count + " Bet";
				output.innerHTML = count + " Bet";
				return count + " Bet";
			} else {
				hold -= count + " Hold";
				output.innerHTML = count + " Hold";
				return count + " Hold";
			}
		}