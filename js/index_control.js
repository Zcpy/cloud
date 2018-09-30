$(function(){
	$("#index_content").load("shouye.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
});

function import_consult(){
	$("#index_content").load("import_consult.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function InformationDetails(){
	$("#index_content").load("InformationDetails.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function szt(){
	$("#index_content").load("szt.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function everybody_create_port(){
	$("#index_content").load("everybody_create_port.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CloudInnovation(){
	$("#index_content").load("CloudInnovation.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function KoChiPort(){
	$("#index_content").load("KoChiPort.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function ThrowTogether(){
	$("#index_content").load("ThrowTogether.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function NewYoung(){
	$("#index_content").load("NewYoung.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function NewHunanArmy(){
	$("#index_content").load("NewHunanArmy.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function windcloud_list(){
	$("#index_content").load("windcloud_list.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function cloud_e_commerce(){
	$("#index_content").load("cloud_e_commerce.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function xph(){
	$("#index_content").load("xph.html",function(result){
		$result = $(result); 
        $result.find("script").appendTo('#index_content');
	});
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function looking_job(){
	$("#index_content").load("looking-job.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function position_details(){
	$("#index_content").load("position-details.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CompanyDetails(){
	$("#index_content").load("CompanyDetails.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function discovery_talent(){
	$("#index_content").load("discovery_talent.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function talent_details(){
	$("#index_content").load("talent-details.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function find_task(){
	$("#index_content").load("find_task.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function find_server(){
	$("#index_content").load("find_server.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function gywm(){
	$("#index_content").load("gywm.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function ActivityDetails(){
	$("#index_content").load("ActivityDetails.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function adm_left_navigation(){
	$("#index_content").load("adm_left_navigation.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function nor_left_navigation(){
	$("#index_content").load("nor_left_navigation.html");
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function index(){
	window.location.reload();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function change_page(){
	var options = $("#search_head option:selected").val();
	$("#index_content").load(options);
	$("html,body").finish().animate({"scrollTop":"0px"},0);
	
}

$(function(){
	$("#foot").hide().fadeIn(5000);
})

