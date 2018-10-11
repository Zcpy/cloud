var sendId = "#index_content";

function urlLoad(sendId,sendUrl){
	$(sendId).load(sendUrl);
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function addhistory(sendUrl){
	var state = {url:sendUrl};
	window.history.pushState(state,"",sendUrl);
	window.history.replaceState(state,"","index.html");
}

window.onpopstate = function(){
	var currentUrl = window.history.state.url;
	urlLoad(sendId,currentUrl);
}

function sendSearchUrl(sendUrl){
	window.open("index.html?flag="+sendUrl);
}

function index(){
	var sendUrl = "shouye.html";
	if(window.history.state){
		sendUrl = window.history.state.url;
	}
	if(window.location.search){
		var afterUrl =  window.location.search.substring(1);
		if(afterUrl.indexOf('flag') != -1){
			var afterEqual = afterUrl.substring(afterUrl.indexOf('=')+1);
			sendUrl = afterEqual+".html";
		}
	}
	urlLoad(sendId,sendUrl);
}


$(function(){
	index();
	$("#foot").hide().fadeIn(5000);
});

function shouye(){
	var sendUrl = "shouye.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function import_consult(){
	var sendUrl = "import_consult.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function InformationDetails(){
	var sendUrl = "InformationDetails";
	sendSearchUrl(sendUrl);
}

function szt(){
	var sendUrl = "szt.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function everybody_create_port(){
	var sendUrl = "everybody_create_port.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function CloudInnovation(){
	var sendUrl = "CloudInnovation.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function KoChiPort(){
	var sendUrl = "KoChiPort.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function ThrowTogether(){
	var sendUrl = "ThrowTogether.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function NewYoung(){
	var sendUrl = "NewYoung.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function NewHunanArmy(){
	var sendUrl = "NewHunanArmy.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function windcloud_list(){
	var sendUrl = "windcloud_list.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function cloud_e_commerce(){
	var sendUrl = "cloud_e_commerce.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function xph(){
	var sendUrl = "xph.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function looking_job(){
	var sendUrl = "looking-job.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function position_details(){
	var sendUrl = "position-details";
	sendSearchUrl(sendUrl);
}

function CompanyDetails(){
	var sendUrl = "CompanyDetails";
	sendSearchUrl(sendUrl);
}

function discovery_talent(){
	var sendUrl = "discovery_talent.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function talent_details(){
	var sendUrl = "talent-details";
	sendSearchUrl(sendUrl);
}

function find_task(){
	var sendUrl = "find_task.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function find_server(){
	var sendUrl = "find_server.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function gywm(){
	var sendUrl = "gywm.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function ActivityDetails(){
	var sendUrl = "ActivityDetails";
	sendSearchUrl(sendUrl);
}

function adm_left_navigation(){
	var sendUrl = "adm_left_navigation.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function nor_left_navigation(){
	var sendUrl = "nor_left_navigation.html";
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

function change_page(){
	var sendUrl = $("#search_head option:selected").val();
	urlLoad(sendId,sendUrl);
	addhistory(sendUrl);
}

