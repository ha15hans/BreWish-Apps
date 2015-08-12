/** LISTENERS **/
$(document).on('pagechange', function(e, data){
	var pageID = data.toPage[0].id;
	
	// Change highlighted tab
	$('#bottomNavbar a').removeClass('ui-btn-active ui-state-persist');
	$('#searchNav').removeClass('ui-btn-active ui-state-persist');
	
	$('#'+pageID+'Nav').addClass('ui-btn-active ui-state-persist');
	
	// Page specific events
	if(pageID === 'calendar'){ createEvents(); }
	else if(pageID === 'beer'){ createMyBeerTabs(); }
	else if(pageID === 'search'){ loadTopSearches(); }
});




/** BEER LIST **/
function createBeerTab(beerName, brewery, viewAll){
	
	var html =
		$('<button/>', {
			'class':'ui-btn',
			html:$('<div/>', {
				'class':'ui-grid-b',
				html:$('<div/>', {
					'class':'ui-block-a',
					'style':'font-size:0.75em;width:30%;',
					html:$('<div/>', {
						'class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-left',
						text:'HAVE'
					})
				}).add($('<div/>', {
					'class':'ui-block-b',
					'style':'font-size:0.6em;width:40%;',
					html:$('<div/>', {
						text:beerName
					}).add($('<div/>', {
						text:brewery
					}))
				})).add($('<div/>', {
					'class':'ui-block-c',
					'style':'font-size:0.75em;width:30%;',
					html:$('<div/>', {
						'class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-right',
						text:'WISH'
					})
				}))
			})
		});
		
	if(viewAll){
		html = $('<button/>', {
			'class':'ui-btn ui-btn-inline',
			'style':'float:right;margin:0px;border-bottom-width:0px;font-size:10px;',
			text:'View All Beers'
		}).add(html);
	}
	
	return html;
}

function createMyBeerTab(beerName, isHave){
	
	var html;
	
	if(isHave){
		html = 
			$('<button/>', {
				'class':'ui-button ui-btn ui-shadow ui-corner-all',
				'style':'font-size:0.6em;',
				html:$('<div/>', {
					'style':'float:left;',
					'text':beerName
				}).add($('<div/>', {
					'class':'ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext',
					'style':'float:right;margin-top:0px;margin-bottom:0px;'
				}))
			});
	} else{
		html = 
			$('<button/>', {
				'class':'ui-button ui-btn ui-shadow ui-corner-all',
				'style':'font-size:0.6em;',
				html:$('<div/>', {
					'style':'float:left;',
					'text':beerName
				}).add($('<div/>', {
					'style':'float:right;',
					html:$('<div/>', {
						'class':'ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext',
						'style':'float:left;margin:0px 5px;'
					}).add($('<div/>', {
						'class':'ui-btn ui-corner-all ui-icon-check ui-btn-icon-notext',
						'style':'float:left;margin-top:0px;margin-bottom:0px;'
					}))
				}))
			});
	}
	return html;
}

function createMyBeerTabs(){
	// Create HAVE List
	for(var i=0; i < 3; i++){
		$('#haveList').append(createMyBeerTab('HaveBeer'+i, true));
	}
	
	// Create WISH List
	for(var i=0; i < 5; i++){
		$('#wishList').append(createMyBeerTab('WishBeer'+i, false));
	}
}




/** CALENDAR **/
function createEventTab(id, eventImage, eventName, location, date, viewAll){

	if(eventImage == null){ eventImage='img/eventPlaceholder.png'; }
	
	var html =
		$('<div/>', {
			'class':'ui-btn',
			'id':'event-'+id,
			'onclick':'loadEvent(this.id);',
			html:$('<div/>', {
				'class':'ui-grid-b',
				html:$('<div/>', {
					'class':'ui-block-a',
					'style':'width:20%',
					html:$('<img/>', {
						'src':eventImage,
						'style':'border-radius:5px;width:100%;'
					})
				}).add($('<div/>', {
					'class':'ui-block-b',
					'style':'font-size:0.6em;width:60%;',
					html:$('<div/>', {
						'text':eventName
					}).add($('<div/>', {
						style:'padding:15px 0px 15px 15px;',
						html:$('<span/>', {
							'style':'float:left;',
							'text':location
						}).add($('<span/>', {
							'style':'float:right;',
							'text':date
						}))
					}))
				})).add($('<div/>', {
					'class':'ui-block-c',
					'style':'width:20%;',
					'onclick':'joinEvent(this.id);',
					html:$('<div/>', {
						'class':'ui-nodisc-icon',
						'style':'float:right;',
						html:$('<div/>', {
							'class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext'
						})
					})
				}))
			})
		});
		
	if(viewAll){
		html = $('<button/>', {
			'class':'ui-btn ui-btn-inline',
			'style':'float:right;margin:0px;border-bottom-width:0px;font-size:10px;',
			text:'View All Events'
		}).add(html);
	}
	
	return html;
}

function joinEvent(id){
	alert('Joined Event '+'id');
	event.stopImmediatePropagation;
}

function createEvents(){
	for(var i=0; i < 3; i++){
		$('#calendar .ui-content').append(createEventTab(i, null, 'EVENT'+i, 'LOCATION'+i, 'DATE'+i, false));
	}
}

function loadEvent(id){
	alert(id);
}


/** USERS **/
function createBeerUser(userName, userImage, theyHave, youHave, distance, viewAll){
	
	/** TODO: GET USER IMAGE PLACHOLDER **/
	if(userImage == null){ userImage='img/eventPlaceholder.png'; }
	
	var html =
		$('<button/>', {
			'class':'ui-btn',
			html:$('<div/>', {
				'class':'ui-grid-b',
				html:$('<div/>', {
					'class':'ui-block-a',
					'style':'width:20%;',
					html:$('<img/>', {
						'src':userImage,
						'style':'border-radius:5px;width:100%;'
					}).add($('<div/>', {
						'style':'font-size:0.6em;',
						text:userName
					}))
				}).add($('<div/>', {
					'class':'ui-block-b',
					'style':'font-size:0.6em;width:60%;',
					html:$('<div/>', {
						'style':'float:right;padding:15px 0px 15px 15px;',
						html:$('<div/>', {
							html:'They have <b>'+theyHave+'</b> beers you want!'
						}).add($('<div/>', {
							html:'You have <b>'+youHave+'</b> beers they want!'
						}))
					}).add($('<div>', {
						'style':'float:right;',
						text:distance+' Miles Away'
					}))
				})).add($('<div/>', {
					'class':'ui-block-c',
					'style':'width:20%;',
					html:$('<div/>', {
						'class':'ui-nodisc-icon',
						'style':'float:right;',
						html:$('<div/>', {
							'class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext'
						})
					}).add($('<div/>', {
						'class':'ui-nodisc-icon',
						'style':'float:right;',
						html:$('<div/>', {
							'class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext'
						})
					}))
				}))
			})
		});
	
	if(viewAll){
		html = $('<button/>', {
			'class':'ui-btn ui-btn-inline',
			'style':'float:right;margin:0px;border-bottom-width:0px;font-size:10px;',
			text:'View All People'
		}).add(html);
	}
	
	return html;
}



/** SEARCH **/
function loadTopSearches(){
	$('#search .ui-content').append(createBeerTab('TOP BEER', 'TOP BREWERY', true));
	$('#search .ui-content').append(createEventTab(11, null, 'TOP EVENT', 'TOP LOCATION', 'TOP DATE', true));
	$('#search .ui-content').append(createBeerUser('USER_NAME', null, 4, 7, 5, true));
}