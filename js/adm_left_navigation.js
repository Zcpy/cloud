$(function(){
	$(".al_n_content").find("a").click(function(e){
		$(".al_n_content div").removeClass("al_n_active");
		$(this).parent().parent().addClass("al_n_active");
	});
});

$(function(){
	$(".showleftnavigation").hide().load("post_recruitment.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
});

function post_recruitment(){
	$(".showleftnavigation").hide().load("post_recruitment.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function hiring(){
	$(".showleftnavigation").hide().load("hiring.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CompanyProfile(){
	$(".showleftnavigation").hide().load("CompanyProfile.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CollectTalent(){
	$(".showleftnavigation").hide().load("CollectTalent.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CollectService(){
	$(".showleftnavigation").hide().load("CollectService.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CollectTask(){
	$(".showleftnavigation").hide().load("CollectTask.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function PublishService_Edit(){
	$(".showleftnavigation").hide().load("PublishService_Edit.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function PublishTask(){
	$(".showleftnavigation").hide().load("PublishTask.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}


function Company_PublisTask_Edit(){
	$(".showleftnavigation").hide().load("Company_PublisTask_Edit.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function Preview_PublishService_Edit(){
	$(".showleftnavigation").hide().load("Preview_PublishService_Edit.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function preview_CompanyProfile(){
	$(".showleftnavigation").hide().load("preview_CompanyProfile.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}
