var nor_sendId = ".showleftnavigation";

function nor_urlLoad(nor_sendId,nor_sendUrl){
	$(nor_sendId).hide().load(nor_sendUrl).fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

$(function(){
	$(".nl_n_content").find("a").click(function(e){
		$(".nl_n_content div").removeClass("nl_n_active");
		$(this).parent().parent().addClass("nl_n_active");
	});
});

$(function(){
	var nor_sendUrl = "person_resume.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
});

function CollectJob(){
	var nor_sendUrl = "CollectJob.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function PublishService_Edit(){
	var nor_sendUrl = "PublishService_Edit.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function post_person_resume(){
	var nor_sendUrl = "post_person_resume.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function person_resume(){
	var nor_sendUrl = "person_resume.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function PublishTask(){
	var nor_sendUrl = "PublishTask.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function Company_PublisTask_Edit(){
	var nor_sendUrl = "PublisTask_Edit.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function CollectTask(){
	var nor_sendUrl = "CollectTask.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function PublishService(){
	var nor_sendUrl = "PublishService.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function CollectService(){
	var nor_sendUrl = "CollectService.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function Preview_PublishTask_Edit(){
	var nor_sendUrl = "Preview_PublisTask_Edit.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

function preview_person_resume(){
	var nor_sendUrl = "preview_person_resume.html";
	nor_urlLoad(nor_sendId,nor_sendUrl);
}

