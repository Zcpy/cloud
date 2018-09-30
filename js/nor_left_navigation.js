$(function(){
	$(".nl_n_content").find("a").click(function(e){
		$(".nl_n_content div").removeClass("nl_n_active");
		$(this).parent().parent().addClass("nl_n_active");
	});
});

$(function(){
	$(".showleftnavigation").hide().load("person_resume.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
});

function CollectJob(){
	$(".showleftnavigation").hide().load("CollectJob.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function PublishService_Edit(){
	$(".showleftnavigation").hide().load("PublishService_Edit.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function person_resume(){
	$(".showleftnavigation").hide().load("person_resume.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function PublishTask(){
	$(".showleftnavigation").hide().load("PublishTask.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function Company_PublisTask_Edit(){
	$(".showleftnavigation").hide().load("PublisTask_Edit.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CollectTask(){
	$(".showleftnavigation").hide().load("CollectTask.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function PublishService(){
	$(".showleftnavigation").hide().load("PublishService.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function CollectService(){
	$(".showleftnavigation").hide().load("CollectService.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

function Preview_PublishTask_Edit(){
	$(".showleftnavigation").hide().load("Preview_PublisTask_Edit.html").fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}
