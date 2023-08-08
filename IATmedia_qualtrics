Qualtrics.SurveyEngine.addOnload(function () {
    // Hide question and next button
    var container = this.getQuestionContainer();
    container.querySelector('.Inner').style.display = 'none';
    this.hideNextButton();

    // Load MinnoJS from the CDN
    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/gh/minnojs/minno-quest@0.3/dist/pi-minno.js';
    scriptTag.onload = onLoad;
    scriptTag.onreadystatechange = onLoad;
    container.appendChild(scriptTag);

    // Create the root element for Minno
    var canvas = document.createElement('div');
    container.appendChild(canvas);

    // Function to proceed to next question
    var proceed = this.clickNextButton.bind(this);

    // Function activated when MinnoJS is loaded
    function onLoad() {
        // Run the study
        minnoJS(canvas, 'https://giuseppegrt.github.io/iat/IATmedia_start.js');

        // Function to inject the results into the question
        minnoJS.logger = function (value) {
            var el = container.querySelector('textarea');
            el.value = value;
        }

        // Let MinnoJS proceed to the next question
        // Wait a few miliseconds for Qualtrics to register the values
        minnoJS.onEnd = function () { setTimeout(proceed, 100); }
    }
});
