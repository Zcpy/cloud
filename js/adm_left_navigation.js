var adm_sendId = ".showleftnavigation";

function adm_urlLoad(adm_sendId,adm_sendUrl){
	$(adm_sendId).hide().load(adm_sendUrl).fadeIn();
	$("html,body").finish().animate({"scrollTop":"0px"},0);
}

$(function(){
	$(".al_n_content").find("a").click(function(e){
		$(".al_n_content div").removeClass("al_n_active");
		$(this).parent().parent().addClass("al_n_active");
	});
});

$(function(){
	var adm_sendUrl = "post_recruitment.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
});

function post_recruitment(){
	var adm_sendUrl = "post_recruitment.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function hiring(){
	var adm_sendUrl = "hiring.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function CompanyProfile(){
	var adm_sendUrl = "CompanyProfile.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function CollectTalent(){
	var adm_sendUrl = "CollectTalent.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function CollectService(){
	var adm_sendUrl = "CollectService.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function CollectTask(){
	var adm_sendUrl = "CollectTask.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function PublishService_Edit(){
	var adm_sendUrl = "PublishService_Edit.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function PublishTask(){
	var adm_sendUrl = "PublishTask.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}


function Company_PublisTask_Edit(){
	var adm_sendUrl = "Company_PublisTask_Edit.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function Preview_PublishService_Edit(){
	var adm_sendUrl = "Preview_PublishService_Edit.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function preview_CompanyProfile(){
	var adm_sendUrl = "preview_CompanyProfile.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function preview_hiring(){
	var adm_sendUrl = "preview_hiring.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}

function Preview_PublishTask_Edit(){
	var adm_sendUrl = "Preview_Company_PublisTask_Edit.html";
	adm_urlLoad(adm_sendId,adm_sendUrl);
}
