function practice(){
	var x = document.getElementById("form1");
	var text = x.elements[0].value;
	var output = "";
	var i;
	var k;
	var s0;
	var s1;
	var temp = "";
	var chunkTemp = "";

	//Follows Wikipedias PseudoCode for SHA256


	var h0 = 0x6a09e667;
	var h1 = 0xbb67ae85;
	var h2 = 0x3c6ef372;
	var h3 = 0xa54ff53a;
	var h4 = 0x510e527f;
	var h5 = 0x9b05688c;
	var h6 = 0x1f83d9ab;
	var h7 = 0x5be0cd19;

	var round_constants = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
   							0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
   							0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
   							0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
   							0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
   							0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
   							0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
   							0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];


   	var a0 = 0;
   	var a1 = 32;
   	var a2 = 32 *2;
   	var a3 = 32 * 3;
   	var a4 = 32 * 4;
   	var a5 = 32 * 5;
   	var a6 = 32 * 6;
   	var a7 = 32 * 7;
   	var a8 = 32 * 8;
   	var a9 = 32 * 9;
   	var a10 = 32 * 10;
   	var a11 = 32 * 11;
   	var a12 = 32 * 12;
   	var a13 = 32 * 13;
   	var a14 = 32 * 14;
   	var a15 = 32 * 15;
   

   	//Convert input into bits and append a 1 bit at the end
   	/*for(i = 0; i < text.length; i++){
   		output += text.charCodeAt(i).toString(2);
   	}
   	var numDigitsOfMsg = output.length;
   	output = output.concat("1");

   	//Appends k bits such that size + k + 64 is a multiple of 512
   	var numDigitsOfMsgPlusOne = output.length;
   	var bitsToAdd;
   	for(bitsToAdd = 0; (numDigitsOfMsgPlusOne + bitsToAdd + 64)%512 != 0; bitsToAdd++){
   		//Keep incrementing
   	}
   	for(i = 0; i < bitsToAdd; i++){
   		output = output.concat("0");
   	}

   	//Temp becomes size of original message in binary
   	for(i = 0; i < numDigitsOfMsg.toString().length; i++){
   		temp += numDigitsOfMsg.toString().charCodeAt(i).toString(2);
   	}
   	var digits = temp.length;
   	var temp1 = digits;

   	//Append a certain amount of 0s to make temp a 64 bit number
   	while(digits < 64){
   		output = output.concat("0");
   		digits++;
   	} 

   	//Append temp after appending 0s
   	output = output.concat(temp); 

   	var numChunks = output.length/512;
   	for(i = 0; i < numChunks; i++){
   		var msgSchedArray = [];
   		//Fill first 16 spots of array with the data within the chunks
   		for(k = 0; k < 16; k++){
   			msgSchedArray.push(output.substring(k, k + 32));
   		}

   		for(k = 16; k < 64; k++){
   			s0 = msgSchedArray[k - 15]
   		}

   	} */
   	output = rotateRight(16, 2)
   	document.getElementById("hashed result").innerHTML = output;
}

function rotateLeft(value, shift){
	return(value << shift)| (value >> (32 - shift));
}

function rotateRight(value, shift){
	return(value >> shift)| (value << (32 - shift));
}