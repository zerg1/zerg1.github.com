items=[];
	items.push({"name":"肉", "owned":0, "showinvt":false}); //0
	items.push({"name":"工蜂", "owned":0, "showinvt":false}); //1
	items.push({"name":"幼虫", "owned":0, "showinvt":false}); //2

var storage = window.localStorage;
storage.setItem("chickensgamesave","");
function sg() {
save('splitter');
}

/*update data*/
	$(document).keyup(function(e) {
		if(e.keyCode==83 && !$("#textbased-input").is(':focus')) {
			save('export');
		}
	});
if(localStorage.chickensgamesave!=="null" && localStorage.chickensgamesave!="") {
		save("load");
	}
setInterval(function() {
save('local');
update();
}, 100);

setInterval(function() {
items[0].owned=items[0].owned+items[1].owned;
items[2].owned=items[2].owned+1;
update();
}, 1000);
setInterval(function() {
Math.round(items[0].owned)
update();
}, 100);
function meat() {
	get=1;
	items[0].owned+=get;
	update();
}
/* 工蜂 */
function gongfeng() {
if (items[0].owned>=10&&items[2].owned>=1) {
	items[2].owned=items[2].owned-1;
	items[0].owned=items[0].owned-10;
	gfget=1;
	items[1].owned+=gfget;
	update();
}
}
function gongfeng1() {
if (items[0].owned>=100&&items[2].owned>=10) {
	items[2].owned=items[2].owned-10;
	items[0].owned=items[0].owned-100;
	items[1].owned=items[1].owned+10;
	update();
}
}
function gongfeng2() {
if (items[0].owned>=1000&&items[2].owned>=100) {
	items[0].owned=items[0].owned-1000;
	items[2].owned=items[2].owned-100;
	items[1].owned=items[1].owned+100;
	update();
}
}
function gongfeng3() {
if (items[0].owned>=10000&&items[2].owned>=1000) {
	items[0].owned=items[0].owned-10000;
	items[2].owned=items[2].owned-1000;
	items[1].owned=items[1].owned+1000;
	update();
}
}
function gongfeng4() {
if (items[0].owned>=100000&&items[2].owned>=10000) {
	items[0].owned=items[0].owned-100000;
	items[2].owned=items[2].owned-10000;
	items[1].owned=items[1].owned+10000;
	update();
}
}
function gongfeng5() {
if (items[0].owned>=1000000&&items[2].owned>=100000) {
	items[0].owned=items[0].owned-1000000;
	items[2].owned=items[2].owned-100000;
	items[1].owned=items[1].owned+100000;
	update();
}
}
/* END */
function update() {
	$(".chicken-meat-owned").html(items[0].owned);
	$(".gongfeng-owned").html(items[1].owned);
	$(".youchong-owned").html(items[2].owned);
	$(".chicken-meat").show();
	if (items[1].owned>=1) {
	$(".gongfeng").show();
}
}
function hide() {
	$(".meats-heading").hide();
}

/* game saving */
function save(what,param2) {
	if(what=="local") {
		localStorage.chickensgamesave=save("string");
		$("#mutenotif").html("Game saved").animate({"bottom":"-30px"},1000);
		setTimeout(function() {
			$("#mutenotif").animate({"bottom":"-82px"},1000);
		},2000);
	}
	else if(what=="load") {
		save("splitter");
	}
	else if(what=="export") {
		prompt("下方是游戏存档代码",save("string"));
	}
	else if(what=="import") {
		code=prompt("导入游戏Code (导入之后游戏将自动保存)","");
		if(code!=null && code!="") {
			save("splitter",code);
			save("local");
			window.location=self.location;
		}
	}
	else if(what=="autosave") {
		if(autosave) {
			autosave=false;
			if(typeof autosaveinterval !== "undefined")clearInterval(autosaveinterval);
			alert('Autosave disabled');
		}
		else {
			autosave=true;
			autosaveinterval=setInterval(function() {
				autosavetime--;
				if(autosavetime==0) {
					autosavetime=60;
					save("local");
				}
				$("#autosave-cd").html(autosavetime);
			},1000);
			alert('Autosave enabled');
		}
	}
	else if(what=="string") {
		return btoa(items[0].owned+"|"+items[1].owned+"|"+items[2].owned);
		update();
	}
	else if(what=="splitter") {
	
		if(typeof param2 === "undefined") {
			tehcodez=localStorage.chickensgamesave;
		}
		else {
			tehcodez=param2;
		}
		
		tehcodez=atob(tehcodez).split("|");
		
		items[0].owned = parseFloat(tehcodez[0]);
		items[1].owned = parseFloat(tehcodez[1]);
		items[2].owned = parseFloat(tehcodez[2]);
		if(tehcodez.length>=55) {items[26].owned = parseFloat(tehcodez[54]);}else {items[26].owned = 0;}
		if(tehcodez.length>=56) {tpdevicekm = parseFloat(tehcodez[55]);} else {tpdevicekm = 0;}
		if(tehcodez.length>=57) {tpdevicestock = parseFloat(tehcodez[56]);} else {tpdevicestock = 5;}
		if(tehcodez.length>=58) {rubysearchstep = parseFloat(tehcodez[57]);} else {rubysearchstep = 0;}
		if(tehcodez.length>=59) {getscroll = (tehcodez[58] === "true");} else {getscroll = false;}
		if(tehcodez.length>=60) {items[27].owned = parseFloat(tehcodez[59]);}else {items[27].owned = 0;}
		if(tehcodez.length>=61) {redditspecialstep = parseFloat(tehcodez[60]);}else {redditspecialstep = 0;}
		if(tehcodez.length>=62) {items[28].owned = parseFloat(tehcodez[61]);}else {items[28].owned = 0;}
		
		if(breedinterval<1500) {
			breedinterval+=1000;
		}
		
		update();

	}
}
/*RANDOM*/
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(window).bind('beforeunload',function(){
return '你确定要退出吗？不提供自动保存功能，请按“S”打开存档复制';
});
