define(['pipAPI', 'https://giuseppegrt.github.io/iat/conspiracyIAT.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Social media', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'social_01.jpg'}, 
    			{image : 'social_02.jpg'}, 
    			{image : 'social_03.jpg'}, 
    			{image : 'social_04.jpg'}, 
    			{image : 'social_05.jpgg'}, 
    			{image : 'social_06.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Traditional media', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'media_01.jpg'}, 
    			{image : 'media_02.jpg'}, 
    			{image : 'media_03.jpg'}, 
    			{image : 'media_04.jpg'}, 
    			{image : 'media_05.jpg'}, 
    			{image : 'media_06.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//images location
			image : 'https://giuseppegrt.github.io/iat/images/'
		} 
	});
});
