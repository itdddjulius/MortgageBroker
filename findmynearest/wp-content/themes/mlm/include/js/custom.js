function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};

jQuery(window).load(function () {
    setIframeHeight(document.getElementById('idIframe'));

    jQuery('#iframe-parent').css('height', jQuery('#idIframe').height());

    setInterval(function(){
      setIframeHeight(document.getElementById('idIframe'));

      jQuery('#iframe-parent').css('height', jQuery('#idIframe').height());
    }, 500);
});

jQuery(document).ready(function () {	

	if ( jQuery('.advisor-location-img').length ) {
		jQuery('.advisor-location-img').each(function(index, value) {
			var avatar_url = jQuery(this).attr('src');
			
			//console.log(avatar_url);

			if ( /d=mm/.test(avatar_url) ) {
				jQuery(this).attr('src', 'http://mylocalmortgage.co.uk/wp-content/themes/mlm/include/images/head.jpg');
			};
		});
	};
	
	jQuery('.twitter-feed').tweet();

	jQuery('.popup-toggle, .book-appointment-button, .appointment-link, .form-button').magnificPopup({
		type: 'inline',
		midClick: true
	});

	jQuery('.blog-thumb-click').magnificPopup({
		type: 'image',
		midClick: true
	});

	jQuery('.gmw-form').on('submit', function(){
		var search_box = jQuery('input.gmw-address');

		if ( search_box.val() == "" ) {
			search_box.addClass('empty');
			search_box.focus();
			return false;
		} else {
			return true;
		};
	});

	if( jQuery(".regular-advisor-box").length < 6 ) {
		jQuery(".more-result").remove();
	};

	jQuery(function(){
	    jQuery(".regular-advisor-box").slice(0, 5).show(); // select the first 5
	    jQuery(".more-result").click(function(e){
	        e.preventDefault();
	        jQuery(".regular-advisor-box:hidden").slice(0, 5).slideDown(); // select next 5 hidden divs and show them
	        if(jQuery(".regular-advisor-box:hidden").length == 0){ // check if any hidden divs still exist
	            jQuery(".more-result").replaceWith('<span class="more-result">you reached the end</span>');
	        }
	    });
	});
	
	jQuery('#scroll-to-upgrade').on('click', function(e) {
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: jQuery(".membership-overview-container").offset().top }, 500);
	});

	jQuery('.additional-information').on('submit', function(){
		var website_field = jQuery('.additional-information input#field_11');
		var url_check = /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

		if ( website_field.val() != "" ) {
			if( !url_check.test(website_field.val()) ){
			    website_field.css('background-color', '#E7119B');
				jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top }, 500);
				return false;
			}
		};
	});

	jQuery('.social-links').on('submit', function(){
		var facebook_field = jQuery('.social-links input#field_28');
		var twitter_field = jQuery('.social-links input#field_29');
		var linkedin_field = jQuery('.social-links input#field_30');
		var gplus_field = jQuery('.social-links input#field_31');
		var url_check = /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
		var is_error = false;

		if ( facebook_field.val() != "" ) {
			if( !url_check.test(facebook_field.val()) ){
			    facebook_field.css('background-color', '#E7119B');
			    is_error = true;
			}
		};

		if ( twitter_field.val() != "" ) {
			if( !url_check.test(twitter_field.val()) ){
			    twitter_field.css('background-color', '#E7119B');
			    is_error = true;
			}
		};

		if ( linkedin_field.val() != "" ) {
			if( !url_check.test(linkedin_field.val()) ){
				linkedin_field.css('background-color', '#E7119B');
				is_error = true;
			}
		};

		if ( gplus_field.val() != "" ) {
			if( !url_check.test(gplus_field.val()) ){
				gplus_field.css('background-color', '#E7119B');
				is_error = true;
			}
		};

		if (is_error) {
			jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top }, 500);
			return false;
		};

	});

	jQuery(".bp-user .advisor-details-lower p").each(function() {
	    var $this = $(this);
	    $this.html($this.html().replace(/&nbsp;/g, ''));
	});

	jQuery(".bp-user .advisor-details-lower p:empty, .bp-user .advisor-details-lower p span:empty, .bp-user .advisor-details-lower p strong:empty").each(function() {
	    jQuery(this).remove();
	});

	jQuery('.more-result').on('click', function(){
		setIframeHeight(document.getElementById('idIframe'));
	});

	jQuery('.link.hidden-number').on('click', function(){
	    var tel = jQuery(this).data('telephone'),
	    	brokerName = jQuery(this).data('broker');
	    jQuery(this).replaceWith('<span class="link revealed-number"><a href="tel:' + tel + '">' + tel + '</a></span>');
	});

	jQuery('.phone-lead-link').on('click', function(){
	    var brokerName = jQuery(this).data('broker'),
	    	brokerLink = jQuery(this).data('link'),
	    	brokerEmail = jQuery(this).data('email');

	    sendPhoneLeadToMLM(brokerName, brokerLink);
	    sendPhoneLeadToBroker( brokerName, brokerLink, brokerEmail );

	    ga('send', 'event', 'Phone Lead', 'Click');
	});

	jQuery('.website-lead-link').on('click', function(){
	    var brokerName = jQuery(this).data('broker'),
	    	brokerLink = jQuery(this).data('link'),
	    	brokerEmail = jQuery(this).data('email');

	    sendWebsiteLeadToMLM(brokerName, brokerLink);
	    sendWebsiteLeadToBroker( brokerName, brokerLink, brokerEmail );

	    ga('send', 'event', 'Website Lead', 'Click');
	});

});

function sendPhoneLeadToMLM( brokerName, brokerLink ) {
    var url = '/wp-content/themes/mlm/libs/mail.php',
    	leadEmailRecipient = 'rose@mylocalmortgage.co.uk',
    	leadEmailSubject = "Broker " + brokerName + " has received a telephone lead",
    	leadEmailContent = "A telephone lead for: " + brokerName + ".\n\nBroker profile link: " + brokerLink;

    $.ajax({
        type: "POST",
        url: url,
        data: {leadEmailRecipient: leadEmailRecipient, leadEmailSubject: leadEmailSubject, leadEmailContent: leadEmailContent},
        dataType: "html"
    });

    //console.log(leadEmailContent);

    return false;

}

function sendWebsiteLeadToMLM( brokerName, brokerLink ) {
    var url = '/wp-content/themes/mlm/libs/mail.php',
    	leadEmailRecipient = 'rose@mylocalmortgage.co.uk',
    	leadEmailSubject = "Broker " + brokerName + " has received a website lead",
    	leadEmailContent = "A website lead for: " + brokerName + ".\n\nBroker profile link: " + brokerLink;

    $.ajax({
        type: "POST",
        url: url,
        data: {leadEmailRecipient: leadEmailRecipient, leadEmailSubject: leadEmailSubject, leadEmailContent: leadEmailContent},
        dataType: "html"
    });

    //console.log(leadEmailContent);

    return false;

}

function sendPhoneLeadToBroker( brokerName, brokerLink, brokerEmail ) {
    var url = '/wp-content/themes/mlm/libs/mail.php',
    	leadEmailRecipient = brokerEmail,
    	leadEmailSubject = "New Mortgage Lead - MyLocalMortgage",
    	leadEmailContent = "Dear " + brokerName + ".\n\nGood news, a visitor has just requested your telephone number via MyLocalMortgage.co.uk. Keep your eye on the phone, and hopefully they will be calling soon.\n\nIn the meantime, if you'd like any assistance or to find out how to drive more leads through your profile please call us on 0800 989 0021.\n\nThanks,\n\nThe MyLocalMortgage Team\nhello@mylocalmortgage.co.uk\n0800 989 0021";

    $.ajax({
        type: "POST",
        url: url,
        data: {leadEmailRecipient: leadEmailRecipient, leadEmailSubject: leadEmailSubject, leadEmailContent: leadEmailContent},
        dataType: "html"
    });

	//console.log(leadEmailSubject + " " + leadEmailContent);

    return false;

}

function sendWebsiteLeadToBroker( brokerName, brokerLink, brokerEmail ) {
    var url = '/wp-content/themes/mlm/libs/mail.php',
    	leadEmailRecipient = brokerEmail,
    	leadEmailSubject = "New Mortgage Lead - MyLocalMortgage",
    	leadEmailContent = "Dear " + brokerName + ".\n\nGood news, a visitor has just requested your website details via MyLocalMortgage.co.uk. Keep your eye on the phone, and hopefully they will be in touch soon.\n\nIn the meantime, if you'd like any assistance or to find out how to drive more leads through your profile please call us on 0800 989 0021.\n\nThanks,\n\nThe MyLocalMortgage Team\nhello@mylocalmortgage.co.uk\n0800 989 0021";

    $.ajax({
        type: "POST",
        url: url,
        data: {leadEmailRecipient: leadEmailRecipient, leadEmailSubject: leadEmailSubject, leadEmailContent: leadEmailContent},
        dataType: "html"
    });

	//console.log(leadEmailSubject + " " + leadEmailContent);

    return false;

}