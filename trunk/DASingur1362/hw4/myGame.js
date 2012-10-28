var countCardsOnPlay=0;
var suitLit=["hearts","diamonds","clubs","spades"];
var cardsName=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var points=[2,3,4,5,6,7,8,9,10,10,10,10,11,1];
var yourPoints=0;
var croupierPoints=0;

var id;
var layerBackground=new Kinetic.Layer();
var layer=new Kinetic.Layer();
var gameLayer=new Kinetic.Layer();
var cardsImage =new Array();
var cardsOnPlay=new Array();
var cardsOnPlayRect=new Array();
var playersCards=new Array();
var croupiersCards=new Array();
var resultLayer=new Kinetic.Layer();
var shirtPic=new Image();
shirtPic.src="images/shirt.jpg";
var gameShirt=new Kinetic.Rect({
	x: 347,
	y: 168,
	width: 60,
	height: 90,
	fill: {
		image: shirtPic
	},
	rotation: -20,
	cornerRadius: 5
});
var resultText=new Kinetic.Text({
	x: 370,
	y: 250,
	width: 460,
	height: 100,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 12,
	text: "You Lose!",
	align: "center",
	fontSize: 18,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
	fill:"#68ff58",
});
var buttonTextResult=new Kinetic.Text({
	x: 550,
	y: 300,
	width: 100,
	height: 40,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 12,
	text: "OK",
	align: "center",
	fontSize: 12,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
	fill:"#88c9ff",
});
resultLayer.add(resultText);
resultLayer.add(buttonTextResult);
resultLayer.setVisible(false);
function message(text){
	setTimeout(function(){
		resultText.setAttrs({
			text:text
		});
		resultLayer.setVisible(true);
		resultLayer.transitionTo();
	},300);
}
	


var buttonStopText=new Kinetic.Text({
	x: 970,
	y: 250,
	width: 150,
	height: 50,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 12,
	text: "Õâàòèò!",
	align: "center",
	fontSize: 18,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
	fill:"#88c9ff"
});
var buttonYetText=new Kinetic.Text({
	x: 970,
	y: 168,
	width: 150,
	height: 50,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 12,
	text: "Åùå",
	align: "center",
	fontSize: 18,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
	fill:"#88c9ff"
});
var buttonStartText=new Kinetic.Text({
	x: 520,
	y: 560,
	width: 180,
	height: 50,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 12,
	text: "Íà÷àòü èãðó",
	align: "center",
	fontSize: 18,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
	fill:"#88c9ff"
});
buttonYetText.setListening(false);
buttonStopText.setListening(false);
var crupierPointsText=new Kinetic.Text({
	x: 50,
	y: 150,
	width: 220,
	height: 50,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 10,
	text: "Î÷êè êðóïüå: ",
	fontSize: 18,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
});
var yourPointsText=new Kinetic.Text({
	x: 50,
	y: 50,
	width: 180,
	height: 50,
	stroke: 'blue',
	strokeWidth: 2,
	padding: 10,
	text: "Âàøè î÷êè: ",
	fontSize: 18,
	fontFamily: 'Calibri',
	textFill: 'black',
	cornerRadius: 5,
});

for(i=0; i<cardsName.length; i++){
	cardsImage[i]=new Array();
	for(j=0; j<suitLit.length;j++){
		var image=new Image();
		image.src="images/cards/"+cardsName[i]+suitLit[j]+".png";
		cardsImage[i][j]=image;		
	}
}

function startGame(){
	move(gameShirt,gameLayer,"player");
	setTimeout('move(gameShirt,gameLayer,"player")',1500);
	buttonYetText.setListening(true);
	buttonStopText.setListening(true);
}

function croupierFun(){
	move(gameShirt,gameLayer,"croupier");
	if(croupierPoints<18){
		id=setTimeout(function(){croupierFun();},1500);
	}
	else{
		setTimeout(function(){
			if(croupierPoints>yourPoints&&croupierPoints<=21)
				message("You lose!");
			else{
				if(croupierPoints==yourPoints&&croupierPoints<21)
					message("DRAW!");
				if(croupierPoints<yourPoints&&yourPoints<=21)
					message("You win!");
			}
		},1500);
	}
}
function createRandomCard(layer){
	var i=Math.floor(Math.random()*(cardsImage.length));
	var j=Math.floor(Math.random()*(cardsImage[i].length));
	var image=cardsImage[i][j];
	point=points[i]
	var card=new Kinetic.Rect({
		x: 72*countCardsOnPlay/2+575,
		y: document.height/2-75,
		width: 72,
		height: 108,
		fill: {
			image: image
		},
		cornerRadius: 5,
		name: cardsName[i],
		visible: false
	});
	cardsOnPlayRect.push(card);
	layer.add(card);
	cardsOnPlay.push(cardsImage[i].splice(j,1));
	for(k=0;k<cardsOnPlayRect.length-1;k++){
		cardsOnPlayRect[k].transitionTo({
			x: 72*(k-countCardsOnPlay/2)+575,
			easing: "strong-ease-out",
			duration: 1,
		});
	}
	var obj={point: point, card:cardsName[i]};
	return obj;
}
function stop(who,layer){
	if(who=="player"){
		for(i=0;i<cardsOnPlayRect.length;i++)
			playersCards.push(cardsOnPlayRect[i]);
		cardsOnPlayRect.splice(0,cardsOnPlayRect.length);
		cardsOnPlay.splice(0,cardsOnPlay.length);
		for(i=0; i<playersCards.length;i++){
			var card=playersCards[i];
			card.setAttrs({scale:0.9});
			card.transitionTo({
				x: 610+60*(i-countCardsOnPlay/2),
				y: document.height/2+78,
				easing: "strong-ease-out",
				duration: 2
			});
		}
		countCardsOnPlay=0;
		buttonYetText.setListening(false);
		buttonStopText.setListening(false);
		id=setTimeout(function(){croupierFun();},1000);
	}
}
function move(obj,layer,who){
	var card=createRandomCard(layer);
	if(who=="player"){
				yourPoints=yourPoints+card.point;
				if(yourPoints>21){
					for(i=0;i<cardsOnPlayRect.length;i++){
						if(cardsOnPlayRect[i].getName()=="A"){
							yourPoints=yourPoints-10;
							cardsOnPlayRect[i].setAttrs({
								name:"A-"
							});
						}
					}
					if(yourPoints>21){
						setTimeout('message("You lose!")',1200);
					}
				}
				if(yourPoints==21)
					buttonYetText.setListening(false);
					
			}
			if(who=="croupier"){
				croupierPoints=croupierPoints+card.point;
				if(croupierPoints>21){
					for(i=0;i<cardsOnPlayRect.length;i++){
						if(cardsOnPlayRect[i].getName()=="A"){
							croupierPoints=croupierPoints-10;
							cardsOnPlayRect[i].setAttrs({
								name:"A-"
							});
						}
					}
					if(croupierPoints>21){
						setTimeout('message("You win!")',1200);
					}
				}
				if(croupierPoints==21)
					setTimeout('message("You lose!")',1200);
					
			}
			countCardsOnPlay++;
	obj.transitionTo({
		x: 72*countCardsOnPlay/2+575,
        y: document.height/2-75,
		easing: "strong-ease-out",
		rotation: -Math.PI*6,
        duration: 1,
		callback: function(){
			obj.setAttrs({
				x: 347,
				y: 168,
				rotation: -20
			});
			cardsOnPlayRect[cardsOnPlayRect.length-1].setVisible(true);
			if(who=="player"){
				yourPointsText.setAttrs({
					text: "Âàøè î÷êè: "+yourPoints
				});
			}
			else{
				crupierPointsText.setAttrs({
					text: "Î÷êè êðóïüå: "+croupierPoints
				});
			}
			obj.transitionTo();
		}
		
	});
	
}
window.onload=function(){
				var stage=new Kinetic.Stage({
					container: 'content',
					width: 1200,
					height: document.height
				});
				var path="m84,215c5,264 478,263 477,-3c0,-18 -70,-127 -103,-141l-283,0c-23,-6 -95,125 -91,144z";
				var table=new Kinetic.Path({
					x: 150,
					fill:"#00580d",
					y: -50,
					data: path,
					stroke:"black",
					strokeWidth: 2,
					scale: 1.4
				});
				var yourCards= new Kinetic.Rect({
					x: 570,
					y: 400,
					width: 70,
					height: 100,
					stroke: 'white',
					strokeWidth: 1,
					scale: 1
				});
				var cards=new Kinetic.Rect({
					x: 340,
					y: 170,
					width: 70,
					height: 100,
					stroke: 'white',
					strokeWidth: 1,
					rotation: -20,
					scale: 1
				});
				var background=new Kinetic.Rect({
					width: 1200,
					height: document.height,
					fill: {
						start: {
						  x: -50,
						  y: -50
						},
						end: {
						  x:1200,
						  y: document.height
						},
						colorStops: [0, 'gray', 1, 'white']
					}
				});
				var shirt=new Kinetic.Rect({
					x: 347,
					y: 168,
					width: 60,
					height: 90,
					fill: {
						image: shirtPic
					},
					rotation: -20,
					cornerRadius: 5
				});
				buttonYetText.on("mousedown",function(evt){
						buttonYetText.setAttrs({
							fill:"red"
						});
						buttonYetText.transitionTo();
					}
				)
				buttonYetText.on("mouseup",function(evt){
					if(buttonYetText.getFill()=="red"){
						buttonYetText.setAttrs({
							fill:"#88c9ff"
						});
						buttonYetText.transitionTo();
						move(gameShirt,gameLayer,"player");
					}
				});
				buttonYetText.on("mouseout",function(evt){
					if(buttonYetText.getFill()=="red"){
						buttonYetText.setAttrs({
							fill:"#88c9ff"
						});
						buttonYetText.transitionTo();
					}
				});
				buttonStopText.on("mousedown",function(evt){
						buttonStopText.setAttrs({
							fill:"red"
						});
						buttonStopText.transitionTo();
					}
				)
				buttonStopText.on("mouseup",function(evt){
					if(buttonStopText.getFill()=="red"){
						buttonStopText.setAttrs({
							fill:"#88c9ff"
						});
						buttonStopText.transitionTo();
						stop("player",gameLayer);
					}
				});
				buttonStopText.on("mouseout",function(evt){
					if(buttonStopText.getFill()=="red"){
						buttonStopText.setAttrs({
							fill:"#88c9ff"
						});
						buttonStopText.transitionTo();
					}
				});
				buttonTextResult.on("mousedown",function(evt){
						buttonTextResult.setAttrs({
							fill:"red"
						});
						buttonTextResult.transitionTo();
					}
				)
				buttonTextResult.on("mouseup",function(evt){
					if(buttonTextResult.getFill()=="red"){
						buttonTextResult.setAttrs({
							fill:"#88c9ff"
						});
						buttonTextResult.transitionTo();
						window.location.reload();
					}
				});
				buttonTextResult.on("mouseout",function(evt){
					if(buttonStopText.getFill()=="red"){
						buttonTextResult.setAttrs({
							fill:"#88c9ff"
						});
						buttonTextResult.transitionTo();
					}
				});
				buttonStartText.on("mouseout",function(evt){
					if(buttonStartText.getFill()=="red"){
						buttonStartText.setAttrs({
							fill:"#88c9ff"
						});
						buttonStartText.transitionTo();
					}
				});
				buttonStartText.on("mouseup",function(evt){
					if(buttonStartText.getFill()=="red"){
						buttonStartText.setAttrs({
							fill:"#88c9ff"
						});
						buttonStartText.transitionTo();
						startGame();
					}
				});
				buttonStartText.on("mousedown",function(evt){
						buttonStartText.setAttrs({
							fill:"red"
						});
						buttonStartText.transitionTo();
					}
				)
				var group = new Kinetic.Group();
				group.add(table);
				group.add(yourCards);
				group.add(cards);
				layerBackground.add(background);
				layer.add(group);
				layer.add(shirt);
				layer.add(buttonYetText);
				layer.add(buttonStopText);
				layer.add(buttonStartText);
				layer.add(yourPointsText);
				layer.add(crupierPointsText);
				gameLayer.add(gameShirt);
				gameShirt.transitionTo();				
				stage.add(layerBackground);
				stage.add(layer);
				stage.add(gameLayer);
				stage.add(resultLayer);
			}