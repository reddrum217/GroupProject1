var teams =
	['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns',
	'Buccaneers', 'Cardinals', 'Chargers', 'Chiefs', 'Colts',
	'Cowboys', 'Dolphins', 'Eagles', 'Falcons', '49ers', 'Giants',
	'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots',
	'Raiders', 'Rams', 'Ravens', 'Redskins', 'Saints', 'Seahawks',
	'Steelers', 'Texans', 'Titans', 'Vikings'];


// don't show characters, playerCard and most arrested
// was able to hide but not to show need more testing
$('#materialCard').hide();
// $('#mostArrested').hide();
// -----------------------------------

for (var i = 0; i < teams.length; i++) {
	var helmetJpg = 'assets/images/helmets/' + teams[i] + '.jpg';
	var helmets = $('<img>').attr('src', helmetJpg);
	helmets.attr('data-helmet', helmetJpg);
	helmets.attr('data-team', teams[i]);
	helmets.addClass("helmet");
	$('#teamButtons').append(helmets);
};

var clickCounter = 0;
$('document').ready(function(){
	$('.helmet').click(function(){
		clickCounter++;
		console.log ('# of clicks' + clickCounter);
    	var helmetVal = '<p style="visibility: hidden;">' + $(this).data().team + "</p>";
    	var helmetImg = $(this).data().helmet;
    	var helmetImgSrc = '<img style="visibility: hidden;" src=' + helmetImg + '></img>'

    	if (clickCounter == 1) {
    		console.log('here')
    		//Hide the Selections until read

    		$('#teamSelected1').append(helmetImgSrc);
    		$('#teamName1').append(helmetVal);

    		// Change textUpdate1
    		var newText1 = 'Your first choice are the ' + ($(helmetVal).text());
    		$('#textUpdate1').text(newText1);

    		//load player list 1
			loadPlayers(helmetVal, clickCounter);

    	}else if (clickCounter == 2) {
    			$('#teamSelected2').append(helmetImgSrc);
    			$('#teamName2').append(helmetVal);
    			//Update
    			var newText2 = 'Your second choice are the ' + $(helmetVal).text();
    			$('#textUpdate2').text(newText2);

    			$('#teamButtons').fadeOut(1500);
				loadPlayers(helmetVal, clickCounter);
    	}else{
    			console.log('2 teams selected unable to select any more');
    	};
    	event.preventDefault();
	});	//end helmet-team selection

	function loadPlayers(teamName, numClicks){
		var queryURLPlayers = 'http://nflarrest.com/api/v1/player';
		var queryArrestInfo = 'http://nflarrest.com/api/v1/player/arrests/player';
		var teamL,
			city,
			arrestCount,
			cartoonFileLeft,
		   	characterImageLeft;
		// query request for player list
		$.ajax({
			url: queryURLPlayers,
			method: 'GET'})
			.done(function(result) {
				var resultLength = result.length,
					resultPlayerName = '',
					resultTeam = '',
					resultArrestCount = 0,
					resultCity = '',
					validateTeam = -1;
				for (var i = 0; i < resultLength; i++) {
					console.log(validateTeam)
					resultPlayerName = $.trim(result[i].Name);
					resultTeam = $.trim(result[i].Team_name);
					resultArrestCount = $.trim(result[i].arrest_count);
					resultCity = $.trim(result[i].Team_city);
					validateTeam = resultTeam.indexOf($(teamName).text());

					if (validateTeam == -1) continue;

					resultTeam = teamName;
					var playerButton = $('<button>').addClass('player');
			        playerButton.attr('data-name', resultPlayerName);
			        playerButton.attr('data-team', resultTeam);
			        playerButton.attr('data-city', resultCity);
			        playerButton.attr('data-arrestcount', resultArrestCount);
			        playerButton.addClass('waves-effect waves-light btn indigo darken-4');
			        playerButton.append(resultPlayerName);
					if (numClicks == 1) {
			        	playerButton.attr('data-playerteamnumber', '1')
						playerButton.css("visibility", "hidden");
			        	$('#playerButtonsLeft').append(playerButton);
			 	    }else{
			        	$("*").css("visibility", "visible");
			        	playerButton.attr('data-playerteamnumber', '2')
			        	$('#playerButtonsRight').append(playerButton);
			        	$("*").css("visibility", "visible");
			        	console.log("we got here")
					};
		    	};

		}); //end ajax call
	};   //end function loadPlayers

	var clickPlayerCounter = 0;
//  Code for cartoons  use setTimeOut
// $('document').ready(function(){
	$(document).on("click", ".player", function(){
		clickPlayerCounter++;
		var playerSelected = $(this).data().name;
        var team = $(this).data().team;
        var city = $(this).data().city;
        var arrestCount = $(this).data().arrestcount;
        var playerTeamNumber = $(this).data().playerteamnumber
        if (clickPlayerCounter == 1 ){
        	team = $(team).text();
       		console.log(team)
	        var cartoonFileLeft = 'assets/images/PlayersL/' + team + 'L.png';
        	characterImageLeft = $('<img>').attr('src', cartoonFileLeft);
        	characterImageLeft.attr('data-name', playerSelected);
        	characterImageLeft.attr('data-team', team);
        	characterImageLeft.attr('data-team', team);
        	characterImageLeft.attr('data-playerteamnumber', playerTeamNumber);
        	characterImageLeft.attr('data-arrestcount', arrestCount);

        }else if (clickPlayerCounter == 2) {
        	team = $(team).text();
			var cartoonFileRight = 'assets/images/PlayersR/' + team + 'R.png';
        	var characterImageRight = $('<img>').attr('src', cartoonFileRight);
        	characterImageRight.attr('data-name', playerSelected);
        	characterImageRight.attr('data-team', team);
        	characterImageRight.attr('data-playerteamnumber', playerTeamNumber);
    		characterImageRight.attr('data-arrestcount', arrestCount);
        	
    		$('#index-banner').hide();
    		$('footer').hide();

        	var footField = 'assets/images/NFLLogo/Field.jpg';
			var footballField = $('<img>').attr('src', footField)
      		
      		$('#textUpdate1').hide();

			setTimeout(function(){ masterAnimate(characterImageLeft, characterImageRight, footballField); }, 1000);

        	setTimeout(function(){
        		$('#characterLeft').hide();
        		$('#textUpdate1').show();
        		$('#materialCard').show();
        		$('footer').show();
        		$('#characterRight').hide();
            	$('#field-background').hide();
        	}, 25000);

        }else {
        	console.log('too many players selected screen refreshed');
        	location.reload();
   		};
   		loadPlayerCard(city, team, playerSelected, playerTeamNumber, arrestCount);

    	// return false;
   		// event.preventDefault();
    });

	// Flickr API call using player name
	function loadPlayerCard(city1, team1, player1, playerTeamNum, arrest1){
		// $('document').ready(function(){
		if (parseInt(playerTeamNum) == 1){
			player1Name = player1;
			arrestPlayer1 = parseInt(arrest1);
		}else if (parseInt(playerTeamNum) == 2) {
			player2Name = player1;
			arrestPlayer2 = parseInt(arrest1);
			mostArrestedPlayer (player1Name, arrestPlayer1, player2Name, arrestPlayer2);
		};

		// query request arrest info when Player is selected
		var queryArrestInfo = 'http://nflarrest.com/api/v1/player/arrests/' + player1;
		$.ajax({
			url: queryArrestInfo,
			method: 'GET'})
			.done(function(result2) {
				console.log(result2);
				var result2Array = result2.length;

				for (var y = 0; y < result2Array; y++) {
					var result2Name = $.trim(result2[y].Name);
					var result2Category = $.trim(result2[y].Category);
					var result2Desc = $.trim(result2[y].Description);
					var result2Date = result2[y].Date;
					var result2Outcome = $.trim(result2[y].Outcome);
					var marqueeText = 'NFL PLAYER: ' + result2Name + '  DRAFTED BY: ' + city1 + ' ' + team1 + ' ARRESTED on... ' + result2Date + ' FOR...' + result2Category + ' ' + result2Desc + '    OUTCOME...' + result2Outcome;
					if (parseInt(playerTeamNum) == 1) {
						$('#marqueePlayer1').append(marqueeText);
					}else if (parseInt(playerTeamNum) == 2) {
						$('#marqueePlayer2').append(marqueeText);
					};
				};
			});


	// JSON Call to flickr photos
	  	$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=08dd861f13005587b148b97975dc6d95&format=json&jsoncallback=?", {
	        text: player1,
	        per_page: "20", //up to 500
	    }, function(data) {
	      var photos = data.photos.photo;

	      for(var i = 0; i < photos.length; i++){
	      	$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=08dd861f13005587b148b97975dc6d95&format=json&jsoncallback=?", {
	            photo_id: photos[i].id
	        }, function(data) {
	          var realname     = data.photo.owner.realname,
	              username     = data.photo.owner.username,
	              userID       = data.photo.owner.nsid,
	              title      = data.photo.title._content,
	              photoURL   = data.photo.urls.url[0]._content,
	              farmNumber = data.photo.farm,
	              photoID    = data.photo.id,
	              server     = data.photo.server,
	              secret     = data.photo.secret,
	              views      = data.photo.views,
	              favs       = data.photo.isfavorite,
	              comments   = data.photo.comments._content,
	              photoSizeS = "_s",
	              photoSizeB = "_b",
	              photoSizeQ = "_q",
	              photoType  = data.photo.originalformat,
	              fullPhotoURLS = "http://farm" + farmNumber + ".staticflickr.com/" + server + "/" + photoID + "_" + secret + photoSizeS + "." + photoType,
	              fullPhotoURLB = "http://farm" + farmNumber + ".staticflickr.com/" + server + "/" + photoID + "_" + secret + photoSizeB + "." + photoType,
	              fullPhotoURLQ = "http://farm" + farmNumber + ".staticflickr.com/" + server + "/" + photoID + "_" + secret + photoSizeQ + "." + photoType;

              	var titleValid = title.indexOf(player1);
		        if (titleValid !== -1) {
			      	var img = $('<img>').attr('src', fullPhotoURLQ).attr('alt', player1);
	            };
                if (parseInt(playerTeamNum) == 1 ) {
                	$('#playerPic').html(img);
                }else if (parseInt(playerTeamNum) == 2) {
                	$('#playerPic2').html(img);
                };

	        }); //end innerpage getJSon
	      };  //end photo loop

	      	var playerWikiName = player1.split(' ').join('_');
		    var cardActionWiki = '<a href=https://en.wikipedia.org/wiki/' + playerWikiName + '>Wiki info</a>';

            // html used because info continually appended bc multi-photo search
            if (parseInt(playerTeamNum) == 1) {
            	i = photos.length;
                $('.playerCard').html(player1);
        		$('#draftedByTeam').html('Drafted by: ' + city1 + ' ' + team1);
        		$('#arrestCount').html('Number of Arrests: ' + arrest1);
        		$('#card-action').html(cardActionWiki);
            }else if (parseInt(playerTeamNum) == 2) {
        		i = photos.length;
                $('.playerCard2').html(player1);
        		$('#draftedByTeam2').html('Drafted by: ' + city1 + ' ' + team1);
        		$('#arrestCount2').html('Number of Arrests: ' + arrest1);
        		$('#card-action2').html(cardActionWiki);
  		    };
	    });	//end Outer getJSON

	// });
	}; // end loadPlayerCard function
}); //end main doc ready function


// logic to check who has most #arrests posted to nav text
function mostArrestedPlayer(name1, player1Arrests, name2, player2Arrests) {
	if (player1Arrests == player2Arrests){
		$('#textUpdate1').html('No winner! Both players have ' + player1Arrests + ' arrests.');
		$('#textUpdate2').html('');


	}else if (player1Arrests > player2Arrests){
			$('#textUpdate1').html('Player 1 has the MOST arrests: ' +'<br>' + name1 + ' arrested ' + player1Arrests + ' times.');
			$('#textUpdate2').html('');
	}else if (player1Arrests < player2Arrests) {
	    	$('#textUpdate1').html('Player 2 has the MOST arrests: ' +'<br>' + name2 + ' arrested ' + player2Arrests + ' times.');
	    	$('#textUpdate2').html('');
	};
}; //end mostArrestedPlayer function
