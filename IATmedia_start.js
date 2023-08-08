define(['pipAPI', 'https://giuseppegrt.github.io/iat/IATmedia.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Social media', //Will appear in the data.
			title : {
				media : {word : 'Social media'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'social1.jpg'}, 
    			{image : 'social2.jpg'}, 
    			{image : 'social3.jpg'}, 
    			{image : 'social4.jpg'}, 
    			{image : 'social5.jpg'}, 
    			{image : 'social6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Traditional media', //Will appear in the data.
			title : {
				media : {word : 'Traditional media'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'media1.jpg'}, 
    			{image : 'media2.jpg'}, 
    			{image : 'media3.jpg'}, 
    			{image : 'media4.jpg'}, 
    			{image : 'media5.jpg'}, 
    			{image : 'media6.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//images location
			image : 'https://qualtricsiat.000webhostapp.com/images/'
		} 
	});
});
