define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'https://giuseppegrt.github.io/iat/img/black1.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/black2.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/black3.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/black4.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/black5.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'https://giuseppegrt.github.io/iat/img/yf1.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/yf4.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/yf5.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/ym2.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/ym3.jpg'}, 
    			{image : 'https://giuseppegrt.github.io/iat/img/ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://giuseppegrt.github.io/iat/img/'
		} 
	});
});
