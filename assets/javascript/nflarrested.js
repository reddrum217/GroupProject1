	var teams = ['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 
		'Buccaneers', 'Cardinals', 'Chargers', 'Chiefs', 'Colts', 
		'Cowboys', 'Dolphins', 'Eagles', 'Falcons', '49ers', 'Giants', 
		'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 
		'Raiders', 'Rams', 'Ravens', 'Redskins', 'Saints', 'Seahawks', 
		'Steelers', 'Texans', 'Titans', 'Vikings'];

	for (var i = 0; i < teams.length; i++) {
		var helmetJpg = 'assets/images/helmets/' + teams[i] + '.jpg'
		var helmets = $('<img>').attr('src', helmetJpg); 
		helmets.attr('data-helmet', helmetJpg);
		helmets.attr('data-team', teams[i]);
		$('#teamButtons').append(helmets);
    	$('#teamSelection').hide();
	};
	
    var clickCounter = 0;			
	$('document').ready(function(){
    	$('img').click (function(){
    		$('#teamSelection').show();	
    		clickCounter++;
			console.log ('# of clicks' + clickCounter); 
        	var helmetVal = $(this).data().team;
        	var helmetImg = $(this).data().helmet;
        	var helmetImgSrc = '<img src=' + helmetImg + '></img>'
        	if (clickCounter == 1) {
        		$('#teamSelected1').append(helmetImgSrc);
    			loadPlayers(helmetVal, clickCounter);
        	}
        	else{
        		if (clickCounter == 2) {
        			$('#teamSelected2').append(helmetImgSrc);
    				loadPlayers(helmetVal, clickCounter);
        		}
        		else{
        			console.log('2 teams selected unable to select any more');
        		}
        	};
   			event.preventDefault();
       	});	
	});


	var queryURLPlayers = 'http://nflarrest.com/api/v1/player';

// $(document).on("ready", loadPlayers);

	function loadPlayers(teamName, numClicks){
	// query request
	$.ajax({
		url: queryURLPlayers,
		method: 'GET'})
		.done(function(result) {
			// console.log(result);
			var arrayDocs = result.length;

			for (var i = 0; i < arrayDocs; i++) {

				if (teamName != result[i].Team_name) continue; 
					// debugger;
				
					var playerButton = $('<button>').addClass('player');
			       	$.trim(result[i].Name);

			        playerButton.attr('data-name', result[i].Name);
			        playerButton.attr('data-team', result[i].Team_name);

			        playerButton.append(result[i].Name);
			        if (numClicks == 1) {
			        	$('#playerButtonsLeft').append(playerButton);
			        }
			        else{
			        	$('#playerButtonsRight').append(playerButton);
			        };
			       	
		    };


//  Code for cartoons 
		    $('document').ready(function(){
		    	$('.player').click(function(){
		    		var player1Selected = $(this).data().name;
			        var a = $(this).data().team;
		        	console.log(a + ' ' + b);
		        return false;
		       	// event.preventDefault();
			    });
		 	});

		});
	};


