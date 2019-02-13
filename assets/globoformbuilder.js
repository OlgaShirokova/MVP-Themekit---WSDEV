


"undefined" == typeof window.Shopify && (window.FormBuilderApp = {}),

FormBuilderApp = {
    config: {
        appUrl: 'https://app.shopifydevelopers.net/formbuilder/',
    }
},

loadScript = function(url, callback, errcallback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState){
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
        setTimeout(function(){
            if(script.onreadystatechange !== null){
                if(errcallback !== undefined) errcallback();
            }
        },3000);
    } else {
        script.onload = function(){
            callback();
        };
        script.onerror = function(){
            if(errcallback !== undefined) errcallback();
        }
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
},
loadFooterScript = function(url, callback, errcallback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState){
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
        setTimeout(function(){
            if(script.onreadystatechange !== null){
                if(errcallback !== undefined) errcallback();
            }
        },3000);
    } else {
        script.onload = function(){
            callback();
        };
        script.onerror = function(){
            if(errcallback !== undefined) errcallback();
        }
    }
    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}

FormBuilderApp.init = function($){
    window.spuritJQ = $;
    // Check install
    var installed = false;
        $("script").each(function() {
             if ($(this).text().indexOf("globoformbuilder_init.js?") != -1 && $(this).text().indexOf("asyncLoad") != -1 && $(this).text().indexOf("initSchema") == -1) {
                 installed = true;
             }
             if(typeof GPFBInstalled!== 'undefined') {
              	installed = true;
             }
        });
        if(!installed) {console.log("Powerful Formbuilder has been uninstalled ");return false;}






      loadScript('https://app.shopifydevelopers.net/formbuilder/resources/assets/js/plugin.js', function(){
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.3/tinymce.min.js', function(){

              // Custom Method Validation................
              jQuery.validator.addMethod("alphabetsAndSpacesOnly", function (value, element) {
                  return this.optional(element) || /^([^0-9]*)$/.test(value);
              }, "Letters and space only please");
              jQuery.validator.addMethod("custompassword", function (value, element) {
                  return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
              }, "Minimum eight characters, at least one letter and one number");
              jQuery.validator.addMethod("percentage", function (value, element) {
                  return this.optional(element) || /^\+?\d+(\.\d+)?(\,\d+)?( ?%)?$/.test(value);
              }, "This field only accept percentage value.");



            FormBuilderApp.ListCountriesJson = FormBuilderApp.ListCountriesJson || {};
            FormBuilderApp.ListCountriesJson = { "List": [
              {"name": "Afghanistan", "code": "AF"},
              {"name": "Åland Islands", "code": "AX"},
              {"name": "Albania", "code": "AL"},
              {"name": "Algeria", "code": "DZ"},
              {"name": "American Samoa", "code": "AS"},
              {"name": "AndorrA", "code": "AD"},
              {"name": "Angola", "code": "AO"},
              {"name": "Anguilla", "code": "AI"},
              {"name": "Antarctica", "code": "AQ"},
              {"name": "Antigua and Barbuda", "code": "AG"},
              {"name": "Argentina", "code": "AR"},
              {"name": "Armenia", "code": "AM"},
              {"name": "Aruba", "code": "AW"},
              {"name": "Australia", "code": "AU"},
              {"name": "Austria", "code": "AT"},
              {"name": "Azerbaijan", "code": "AZ"},
              {"name": "Bahamas", "code": "BS"},
              {"name": "Bahrain", "code": "BH"},
              {"name": "Bangladesh", "code": "BD"},
              {"name": "Barbados", "code": "BB"},
              {"name": "Belarus", "code": "BY"},
              {"name": "Belgium", "code": "BE"},
              {"name": "Belize", "code": "BZ"},
              {"name": "Benin", "code": "BJ"},
              {"name": "Bermuda", "code": "BM"},
              {"name": "Bhutan", "code": "BT"},
              {"name": "Bolivia", "code": "BO"},
              {"name": "Bosnia and Herzegovina", "code": "BA"},
              {"name": "Botswana", "code": "BW"},
              {"name": "Bouvet Island", "code": "BV"},
              {"name": "Brazil", "code": "BR"},
              {"name": "British Indian Ocean Territory", "code": "IO"},
              {"name": "Brunei Darussalam", "code": "BN"},
              {"name": "Bulgaria", "code": "BG"},
              {"name": "Burkina Faso", "code": "BF"},
              {"name": "Burundi", "code": "BI"},
              {"name": "Cambodia", "code": "KH"},
              {"name": "Cameroon", "code": "CM"},
              {"name": "Canada", "code": "CA"},
              {"name": "Cape Verde", "code": "CV"},
              {"name": "Cayman Islands", "code": "KY"},
              {"name": "Central African Republic", "code": "CF"},
              {"name": "Chad", "code": "TD"},
              {"name": "Chile", "code": "CL"},
              {"name": "China", "code": "CN"},
              {"name": "Christmas Island", "code": "CX"},
              {"name": "Cocos (Keeling) Islands", "code": "CC"},
              {"name": "Colombia", "code": "CO"},
              {"name": "Comoros", "code": "KM"},
              {"name": "Congo", "code": "CG"},
              {"name": "Congo, The Democratic Republic of the", "code": "CD"},
              {"name": "Cook Islands", "code": "CK"},
              {"name": "Costa Rica", "code": "CR"},
              {"name": "Cote D Ivoire", "code": "CI"},
              {"name": "Croatia", "code": "HR"},
              {"name": "Cuba", "code": "CU"},
              {"name": "Cyprus", "code": "CY"},
              {"name": "Czech Republic", "code": "CZ"},
              {"name": "Denmark", "code": "DK"},
              {"name": "Djibouti", "code": "DJ"},
              {"name": "Dominica", "code": "DM"},
              {"name": "Dominican Republic", "code": "DO"},
              {"name": "Ecuador", "code": "EC"},
              {"name": "Egypt", "code": "EG"},
              {"name": "El Salvador", "code": "SV"},
              {"name": "Equatorial Guinea", "code": "GQ"},
              {"name": "Eritrea", "code": "ER"},
              {"name": "Estonia", "code": "EE"},
              {"name": "Ethiopia", "code": "ET"},
              {"name": "Falkland Islands (Malvinas)", "code": "FK"},
              {"name": "Faroe Islands", "code": "FO"},
              {"name": "Fiji", "code": "FJ"},
              {"name": "Finland", "code": "FI"},
              {"name": "France", "code": "FR"},
              {"name": "French Guiana", "code": "GF"},
              {"name": "French Polynesia", "code": "PF"},
              {"name": "French Southern Territories", "code": "TF"},
              {"name": "Gabon", "code": "GA"},
              {"name": "Gambia", "code": "GM"},
              {"name": "Georgia", "code": "GE"},
              {"name": "Germany", "code": "DE"},
              {"name": "Ghana", "code": "GH"},
              {"name": "Gibraltar", "code": "GI"},
              {"name": "Greece", "code": "GR"},
              {"name": "Greenland", "code": "GL"},
              {"name": "Grenada", "code": "GD"},
              {"name": "Guadeloupe", "code": "GP"},
              {"name": "Guam", "code": "GU"},
              {"name": "Guatemala", "code": "GT"},
              {"name": "Guernsey", "code": "GG"},
              {"name": "Guinea", "code": "GN"},
              {"name": "Guinea-Bissau", "code": "GW"},
              {"name": "Guyana", "code": "GY"},
              {"name": "Haiti", "code": "HT"},
              {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
              {"name": "Holy See (Vatican City State)", "code": "VA"},
              {"name": "Honduras", "code": "HN"},
              {"name": "Hong Kong", "code": "HK"},
              {"name": "Hungary", "code": "HU"},
              {"name": "Iceland", "code": "IS"},
              {"name": "India", "code": "IN"},
              {"name": "Indonesia", "code": "ID"},
              {"name": "Iran, Islamic Republic Of", "code": "IR"},
              {"name": "Iraq", "code": "IQ"},
              {"name": "Ireland", "code": "IE"},
              {"name": "Isle of Man", "code": "IM"},
              {"name": "Israel", "code": "IL"},
              {"name": "Italy", "code": "IT"},
              {"name": "Jamaica", "code": "JM"},
              {"name": "Japan", "code": "JP"},
              {"name": "Jersey", "code": "JE"},
              {"name": "Jordan", "code": "JO"},
              {"name": "Kazakhstan", "code": "KZ"},
              {"name": "Kenya", "code": "KE"},
              {"name": "Kiribati", "code": "KI"},
              {"name": "Korea, Democratic People'S Republic of", "code": "KP"},
              {"name": "Korea, Republic of", "code": "KR"},
              {"name": "Kuwait", "code": "KW"},
              {"name": "Kyrgyzstan", "code": "KG"},
              {"name": "Lao People'S Democratic Republic", "code": "LA"},
              {"name": "Latvia", "code": "LV"},
              {"name": "Lebanon", "code": "LB"},
              {"name": "Lesotho", "code": "LS"},
              {"name": "Liberia", "code": "LR"},
              {"name": "Libyan Arab Jamahiriya", "code": "LY"},
              {"name": "Liechtenstein", "code": "LI"},
              {"name": "Lithuania", "code": "LT"},
              {"name": "Luxembourg", "code": "LU"},
              {"name": "Macao", "code": "MO"},
              {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
              {"name": "Madagascar", "code": "MG"},
              {"name": "Malawi", "code": "MW"},
              {"name": "Malaysia", "code": "MY"},
              {"name": "Maldives", "code": "MV"},
              {"name": "Mali", "code": "ML"},
              {"name": "Malta", "code": "MT"},
              {"name": "Marshall Islands", "code": "MH"},
              {"name": "Martinique", "code": "MQ"},
              {"name": "Mauritania", "code": "MR"},
              {"name": "Mauritius", "code": "MU"},
              {"name": "Mayotte", "code": "YT"},
              {"name": "Mexico", "code": "MX"},
              {"name": "Micronesia, Federated States of", "code": "FM"},
              {"name": "Moldova, Republic of", "code": "MD"},
              {"name": "Monaco", "code": "MC"},
              {"name": "Mongolia", "code": "MN"},
              {"name": "Montserrat", "code": "MS"},
              {"name": "Morocco", "code": "MA"},
              {"name": "Mozambique", "code": "MZ"},
              {"name": "Myanmar", "code": "MM"},
              {"name": "Namibia", "code": "NA"},
              {"name": "Nauru", "code": "NR"},
              {"name": "Nepal", "code": "NP"},
              {"name": "Netherlands", "code": "NL"},
              {"name": "Netherlands Antilles", "code": "AN"},
              {"name": "New Caledonia", "code": "NC"},
              {"name": "New Zealand", "code": "NZ"},
              {"name": "Nicaragua", "code": "NI"},
              {"name": "Niger", "code": "NE"},
              {"name": "Nigeria", "code": "NG"},
              {"name": "Niue", "code": "NU"},
              {"name": "Norfolk Island", "code": "NF"},
              {"name": "Northern Mariana Islands", "code": "MP"},
              {"name": "Norway", "code": "NO"},
              {"name": "Oman", "code": "OM"},
              {"name": "Pakistan", "code": "PK"},
              {"name": "Palau", "code": "PW"},
              {"name": "Palestinian Territory, Occupied", "code": "PS"},
              {"name": "Panama", "code": "PA"},
              {"name": "Papua New Guinea", "code": "PG"},
              {"name": "Paraguay", "code": "PY"},
              {"name": "Peru", "code": "PE"},
              {"name": "Philippines", "code": "PH"},
              {"name": "Pitcairn", "code": "PN"},
              {"name": "Poland", "code": "PL"},
              {"name": "Portugal", "code": "PT"},
              {"name": "Puerto Rico", "code": "PR"},
              {"name": "Qatar", "code": "QA"},
              {"name": "Reunion", "code": "RE"},
              {"name": "Romania", "code": "RO"},
              {"name": "Russian Federation", "code": "RU"},
              {"name": "RWANDA", "code": "RW"},
              {"name": "Saint Helena", "code": "SH"},
              {"name": "Saint Kitts and Nevis", "code": "KN"},
              {"name": "Saint Lucia", "code": "LC"},
              {"name": "Saint Pierre and Miquelon", "code": "PM"},
              {"name": "Saint Vincent and the Grenadines", "code": "VC"},
              {"name": "Samoa", "code": "WS"},
              {"name": "San Marino", "code": "SM"},
              {"name": "Sao Tome and Principe", "code": "ST"},
              {"name": "Saudi Arabia", "code": "SA"},
              {"name": "Senegal", "code": "SN"},
              {"name": "Serbia and Montenegro", "code": "CS"},
              {"name": "Seychelles", "code": "SC"},
              {"name": "Sierra Leone", "code": "SL"},
              {"name": "Singapore", "code": "SG"},
              {"name": "Slovakia", "code": "SK"},
              {"name": "Slovenia", "code": "SI"},
              {"name": "Solomon Islands", "code": "SB"},
              {"name": "Somalia", "code": "SO"},
              {"name": "South Africa", "code": "ZA"},
              {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
              {"name": "Spain", "code": "ES"},
              {"name": "Sri Lanka", "code": "LK"},
              {"name": "Sudan", "code": "SD"},
              {"name": "Suriname", "code": "SR"},
              {"name": "Svalbard and Jan Mayen", "code": "SJ"},
              {"name": "Swaziland", "code": "SZ"},
              {"name": "Sweden", "code": "SE"},
              {"name": "Switzerland", "code": "CH"},
              {"name": "Syrian Arab Republic", "code": "SY"},
              {"name": "Taiwan, Province of China", "code": "TW"},
              {"name": "Tajikistan", "code": "TJ"},
              {"name": "Tanzania, United Republic of", "code": "TZ"},
              {"name": "Thailand", "code": "TH"},
              {"name": "Timor-Leste", "code": "TL"},
              {"name": "Togo", "code": "TG"},
              {"name": "Tokelau", "code": "TK"},
              {"name": "Tonga", "code": "TO"},
              {"name": "Trinidad and Tobago", "code": "TT"},
              {"name": "Tunisia", "code": "TN"},
              {"name": "Turkey", "code": "TR"},
              {"name": "Turkmenistan", "code": "TM"},
              {"name": "Turks and Caicos Islands", "code": "TC"},
              {"name": "Tuvalu", "code": "TV"},
              {"name": "Uganda", "code": "UG"},
              {"name": "Ukraine", "code": "UA"},
              {"name": "United Arab Emirates", "code": "AE"},
              {"name": "United Kingdom", "code": "GB"},
              {"name": "United States", "code": "US"},
              {"name": "United States Minor Outlying Islands", "code": "UM"},
              {"name": "Uruguay", "code": "UY"},
              {"name": "Uzbekistan", "code": "UZ"},
              {"name": "Vanuatu", "code": "VU"},
              {"name": "Venezuela", "code": "VE"},
              {"name": "Viet Nam", "code": "VN"},
              {"name": "Virgin Islands, British", "code": "VG"},
              {"name": "Virgin Islands, U.S.", "code": "VI"},
              {"name": "Wallis and Futuna", "code": "WF"},
              {"name": "Western Sahara", "code": "EH"},
              {"name": "Yemen", "code": "YE"},
              {"name": "Zambia", "code": "ZM"},
              {"name": "Zimbabwe", "code": "ZW"}
          ]};
        //$(document).ready(function() {
        // Do not edit shop_url_ area . This field will be rendered dynamically.
        var shop_url_ = "aura-box.myshopify.com";
        var shop_domain_ = "aurabox.co";
        //
        var form_id = 0;
        var html = $("body").html();
        var posShortcode = html.indexOf('{formbuilder:');





        var FormRegex = /{formbuilder:.*.}/g,
            shortCodeArray = [];

        while (matches = FormRegex.exec(html)) {
            shortCodeArray.push(matches[0]);
        }
        $.each(shortCodeArray , function(key,shortCode){
          form_id = shortCode.substring(shortCode.indexOf(':')+1,shortCode.length-1);
          if(form_id>0){

              $.ajax({
                      url: FormBuilderApp.config.appUrl+"form/renderForm",
                      type: "POST",
                      dataType: 'jsonp',
                      data: {
                          form_id:form_id,
                          shop_url_:shop_url_
                      },
                      headers: {
                         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                      },
                      async: false,
                      beforeSend:function (){
                          var allElementContain = $("*:contains('"+shortCode+"')");
                          var shortCodeParent = [];
                          $.each(allElementContain , function (key,element){
                            if(allElementContain.eq(key).find(" > *:contains('"+shortCode+"')").length<=0){
                              shortCodeParent.push(element);
                            }
                          });
                          $(shortCodeParent).each(function(){
                            if($(this).prop("tagName")!='SCRIPT'){
                              $(this).css('display','none');
                            }
                          });
                      },
                      success: function (data) {
                          if (data.success){
                              var allElementContain = $("*:contains('"+shortCode+"')");
                              var shortCodeParent = [];
                              $.each(allElementContain , function (key,element){
                                if(allElementContain.eq(key).find(" > *:contains('"+shortCode+"')").length<=0){
                                  shortCodeParent.push(element);
                                }
                              });

                              $(shortCodeParent).each(function(){
                                if($(this).prop("tagName")!='SCRIPT'){
                                  $(this).html( $(this).html().replace(shortCode, data.html) );
                                  $(this).css('display','block');
                                }
                              });

                              $('body').find('.g-form-container .g_product').closest('.g-form-group').css('display','inline-block');


                              FormBuilderApp.InitDateTimePicker();
                              FormBuilderApp.InitSlider();
                              var default_slider_val = $("body").find(".g-form-container").find("input.InputSlider").val();
                              if(parseInt(default_slider_val)==0) $("body").find(".g-form-container").find("input.InputSlider").val("").attr('placeholder','0');
                              FormBuilderApp.BindCountriesSelect(FormBuilderApp.ListCountriesJson.List);
                              var arrTextarea = $("body").find(".g-form-container").find("textarea");
                              FormBuilderApp.InitTinyMCE(arrTextarea);
                              var hidden_ = $("body").find('input[data-hidden-dynamic]');
                              $.each(hidden_,function(k,item){
                                  var hidden_dynamic = $(item).attr('data-hidden-dynamic');


                                  if(hidden_dynamic=="customer_name"){
                                    if(typeof PFB_customer_name !== 'undefined')
                                      $(item).val(PFB_customer_name);
                                  }
                                  else if(hidden_dynamic=="customer_email"){
                                      if(typeof PFB_customer_email !== 'undefined')
                                        $(item).val(PFB_customer_email);
                                  }
                                  else if(hidden_dynamic=="product_name"){
                                    if(typeof PFB_product_name !== 'undefined')
                                      $(item).val(PFB_product_name);
                                  }
                                  else if(hidden_dynamic=="product_URL"){
                                    if(typeof PFB_product_url !== 'undefined'){
                                      if(PFB_product_name!="") link = PFB_product_name;
                                      else link = PFB_product_url;
                                      $(item).val("<a target='_blank' href='//"+shop_domain_+PFB_product_url+"'> "+link+"</a>");
                                    }
                                  }
                              });

                              $("body").find("hr.hr-input").parent().addClass("hr-style");

                              var height_Thumb = $('body').find('.g-form-container .g-form-group div.g_product div.thumb').eq(0).height();
                              var width_Thumb = $('body').find('.g-form-container .g-form-group div.g_product div.thumb').eq(0).width();
                              if(width_Thumb&&height_Thumb){
                                var ratio = width_Thumb/height_Thumb;
                                var newHeight = width_Thumb/0.75 ;
                                $('body').find('.g-form-container .g-form-group div.g_product div.thumb').css('height',newHeight);
                              }


                          }
                      },
                  });
          }
        });


        $("body").on("click", 'i.super-rating-star', function(e) {
          var star = (e.offsetX/$(this)[0].clientWidth)*5;
          var inputVal = $(this).siblings("#unique_rating");
          var AllClass = $(this)[0].classList.value;
          if (star>=0.5&&star<1){
              $(this).removeClass(AllClass).addClass("fa fa-star-0-5 super-rating-star");
              inputVal.val("0.5");
          }
          else if(star>=1&&star<1.5){
              $(this).removeClass(AllClass).addClass("fa fa-star-1 super-rating-star");
              inputVal.val("1");
          }
          else if(star>=1.5&&star<2){
              $(this).removeClass(AllClass).addClass("fa fa-star-1-5 super-rating-star");
              inputVal.val("1.5");
          }
          else if(star>=2&&star<2.5){
              $(this).removeClass(AllClass).addClass("fa fa-star-2 super-rating-star");
              inputVal.val("2");
          }
          else if(star>=2.5&&star<3){
              $(this).removeClass(AllClass).addClass("fa fa-star-2-5 super-rating-star");
              inputVal.val("2.5");
          }
          else if(star>=3&&star<3.5){
              $(this).removeClass(AllClass).addClass("fa fa-star-3 super-rating-star");
              inputVal.val("3");
          }
          else if(star>=3.5&&star<4){
              $(this).removeClass(AllClass).addClass("fa fa-star-3-5 super-rating-star");
              inputVal.val("3.5");
          }
          else if(star>=4&&star<4.5){
              $(this).removeClass(AllClass).addClass("fa fa-star-4 super-rating-star");
              inputVal.val("4");
          }
          else if(star>=4.5&&star<4.7){
              $(this).removeClass(AllClass).addClass("fa fa-star-4-5 super-rating-star");
              inputVal.val("4.5");
          }
          else if(star>=4.7){
              $(this).removeClass(AllClass).addClass("fa fa-star-5 super-rating-star");
              inputVal.val("5");
          }
          else {
              $(this).removeClass(AllClass).addClass("fa fa-star-0 super-rating-star");
              inputVal.val("0");
          }
        });





        $('body').on('click','.timepicker',function(){
          // console.log($(this).parent().html());
        });
          $("body").on("submit",'.g-form-container form',function(e){
              e.preventDefault();
              var arr=[];
              var this_btn = $(this).find('button[type=submit]');
              // Validate
              var form = $(this).closest("form");
              var hidemessage_after_submit = $(this).attr('hidemessage_after_submit');
              var hideform_after_submit = $(this).attr('hideform_after_submit');
              var redirect_after_submit = $(this).attr('redirect_after_submit');
              // check if the input is valid

              try {
                  if(!form.valid()) {
                    return false;
                  }
              }
              catch(err) {}



              if(typeof grecaptcha !== 'undefined' && typeof globo_grecaptcha !== 'undefined'&&form.find('#alertCapcha').length){
                if(grecaptcha.getResponse()==""){
                  $("#alertCapcha").text("Please verify that you are not robot.");
                  return false;
                }
                else {
                  $("#alertCapcha").hide();
                }
              }
              $('input[type=file]',$('.g-form-container')).each(function() {
                        var files = $(this).prop('files');
                        if ( files != undefined && files.length <= 0 ) {
                            $(this).removeAttr('name');
                        }
                    });
              $.ajax({
                  url: FormBuilderApp.config.appUrl+"form/submit",
                  type: "POST",
                  dataType: 'json',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: new FormData(this_btn.closest("form")[0]),
                  crossDomain:true,
                  headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                  success: function(result){
                  },
                  beforeSend: function() {
                      this_btn.text('Submitting...');
                      this_btn.append('<i class="fa fa-circle-o-notch fa-spin"></i>');
                      this_btn.parent().append("<div class=\"overlay disabled\"></div>");
                  },
                  complete: function(data) {

                    data.responseJSON = JSON.parse(data.responseText)
                    if(data.responseJSON.success==true){
                        if(hideform_after_submit!="0"){
                            setTimeout(function(){
                            var submit_mess = this_btn.closest('form').attr('submit-message');
                            if(typeof submit_mess !== "undefined"){
                              this_btn.closest(".g-form-container").append("<div class='successSubmit'>"+submit_mess+"</div>");
                            }
                            this_btn.closest(".g-form-container").find('form').css({"height":"0","overflow":"hidden"});
                            }, 1000);
                            if(hidemessage_after_submit!="0"){
                                setTimeout(function(){
                                  this_btn.closest(".g-form-container").find('.successSubmit').addClass('elementToFadeIOut');
                                }, 3000);
                                setTimeout(function(){
                                  this_btn.closest(".g-form-container").remove();
                                }, 4000);
                            }
                        }
                        else {
                            this_btn.closest('form')[0].reset();
                            var submit_mess = this_btn.closest('form').attr('submit-message');
                            this_btn.text('Submit');
                            this_btn.find(".fa-spin").remove();
                            this_btn.parent().find(".disabled").remove();
                            if(typeof submit_mess !== "undefined"){
                              this_btn.closest(".g-form-container").append("<div class='successSubmit'>"+submit_mess+"</div>");
                            }
                            if(hidemessage_after_submit!="0"){
                                setTimeout(function(){
                                    this_btn.closest(".g-form-container").find('.successSubmit').remove();
                                },2000);
                            }
                        }
                        if(typeof redirect_after_submit !== "undefined" && redirect_after_submit!='' && redirect_after_submit!='0'){
                            window.location.href = redirect_after_submit;
                        }

                    }
                  }
              });

          });
          $("body").on('change','.g-form-container input[type="file"]',function () {
              var pos = $(this).val().lastIndexOf('\\');
              var filename = $(this).val().substr(pos+1, $(this).val().length);
              if(filename=="") filename = "No file choosen.";
              $(this).parent().find(".selectedfile").remove();
              var filePlaceholder = $(this).parent().find(".file-btn");
              if (filePlaceholder.length>0)
              $(this).parent().append('<label for="file-btn" class="selectedfile">'+filename+'</label>');
              //Allowed Size
              if(!$(this).val()) {return false;}
              var sizeMB = this.files[0].size;
              var sizeAllow = 2048*1024;
              if(sizeMB>sizeAllow&&sizeMB>0){
                alert('This file size is too large (' + Math.round(sizeMB/1024/1024) + "MB) . Please try again (Allowed size is "+sizeAllow/1024/1024+"MB)");
                this.value = "";
                $(this).parent().find('.selectedfile').text('');
              }
          });


          });
        });







    //});
},
elementSlider=null,
FormBuilderApp.BindCountriesSelect = function(dataCountries){
    var toAppend = '';
    $.each(dataCountries,function(i,o){
        toAppend += '<option value="'+o.code+'" >'+o.name+'</option>';
    });
    $("body").find("select.countries").empty().append(toAppend);
},
FormBuilderApp.InitSlider = function(){
    var dataSlider = $("body").find(".g-form-container .sliderElement");
    if(dataSlider.length!=0) {
        $.each(dataSlider,function(index,value){
            FormBuilderApp.InitSliderByClass(value.id,value.getAttribute("name"),value.getAttribute("data-slider-start"),value.getAttribute("data-slider-end"),value.getAttribute("data-slider-value"));
        });
    }

},

FormBuilderApp.InitDateTimePicker = function(){
        if($('.datetimepicker').length!=0) {
          $('.datetimepicker').datetimepicker({
              icons: {
                  time: "fa fa-clock-o",
                  date: "fa fa-calendar",
                  up: "fa fa-chevron-up",
                  down: "fa fa-chevron-down",
                  previous: 'fa fa-chevron-left',
                  next: 'fa fa-chevron-right',
                  today: 'fa fa-screenshot',
                  clear: 'fa fa-trash',
                  close: 'fa fa-remove',
                  inline: true
              }
           });
        }

          if($('.datepicker').length!=0) {
            $('.datepicker').datetimepicker({
               format: 'MM/DD/YYYY',
               icons: {
                   time: "fa fa-clock-o",
                   date: "fa fa-calendar",
                   up: "fa fa-chevron-up",
                   down: "fa fa-chevron-down",
                   previous: 'fa fa-chevron-left',
                   next: 'fa fa-chevron-right',
                   today: 'fa fa-screenshot',
                   clear: 'fa fa-trash',
                   close: 'fa fa-remove',
                   inline: true
               }
            });
          }

          if($('.timepicker').length!=0) {
              $('.timepicker').datetimepicker({
                  // format: 'H:mm',
                  // use this format if you want the 24hours timepicker
                  format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
                  icons: {
                      time: "fa fa-clock-o",
                      date: "fa fa-calendar",
                      up: "fa fa-chevron-up",
                      down: "fa fa-chevron-down",
                      previous: 'fa fa-chevron-left',
                      next: 'fa fa-chevron-right',
                      today: 'fa fa-screenshot',
                      clear: 'fa fa-trash',
                      close: 'fa fa-remove',
                      inline: true

                  }
               });
          }

    },
FormBuilderApp.InitSliderByClass = function(ClassSlider,IDinputSlider,start,end,val){
    if (start==null||start==undefined||start==NaN||start=="") start=0;
    if (end==null||end==undefined||end==NaN||end=="") end=100;
    if (val==null||val==undefined||val==NaN||val=="") val=0;
    elementSlider = document.getElementsByClassName(ClassSlider);
    $.each(elementSlider , function(key,item){
        if(item.length!=0&&!FormBuilderApp.HasClass(item,"noUi-target")) {
          noUiSlider.create(item, {
                start: [ parseInt(val) ],
                connect: true,
                range: {
                    'min': [ parseInt(start) ],
                    'max': [ parseInt(end) ]
                }
            });
        }
        item.noUiSlider.on('update', function( values, handle ) {
                FormBuilderApp.getSiblings(item)[1].value = Math.round(values[handle]);
            });
    });



},
FormBuilderApp.HasClass = function(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
},
FormBuilderApp.getSiblings = function(n) {
    return FormBuilderApp.getChildren(n.parentNode.firstChild, n);
}
FormBuilderApp.getChildren= function(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling )
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );
    return r;
};
FormBuilderApp.InitTinyMCE = function (arrTextarea){
    if(arrTextarea.length!=0) {
      $.each(arrTextarea,function(key,value){
          if(value.getAttribute('data-is-editor')=="true"){

            tinymce.EditorManager.editors = [];
            tinymce.init({
                selector: 'textarea.'+value.id,
                height: 200,
                theme: 'modern',
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
                ],
                toolbar1: 'undo redo | insert | styleselect | fullscreen | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
                image_advtab: true,
                templates: [
                  { title: 'Test template 1', content: 'Test 1' },
                    { title: 'Test template 2', content: 'Test 2' }
                  ],
                  content_css: [
                  '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                  '//www.tinymce.com/css/codepen.min.css'
                ],
                setup: function (editor) {
                    editor.on('change', function () {
                        editor.save();
                        //editor.valid();
                    });
                    editor.show();
                }
            });
          }


      });

    }
},
FormBuilderApp.RemoveSameArrayID= function(arrTextarea){
  var arrRes = [];
  for(var i=0;i<arrTextarea.length-1;i++){
    for(var j=0;j<arrTextarea.length-1;j++){
      var contain = 0;
      if(arrTextarea[i].id==arrTextarea[j].id){
        contain++;
      }
    }
    if(contain==1) arrRes.push(arrTextarea[i]);

  }
  return arrRes;
},
FormBuilderApp.findElementByText = function(text){
  var jSpot = $("*:contains("+text+"):last"); //.filter(function(){ return $(this).children().length === 0 ;});
      return jSpot;
},
// Create the XHR object.
FormBuilderApp.createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
},

// Helper method to parse the title tag from the response.
FormBuilderApp.getTitle = function(text) {
  return text.match('<title>(.*)?</title>')[1];
},

// Make the actual CORS request.
FormBuilderApp.makeCorsRequest = function() {
  // This is a sample server that supports CORS.
  var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
};


try{

    if ( typeof jQuery === 'undefined' || (jQuery.fn.jquery.split(".")[0] < 2 && jQuery.fn.jquery.split(".")[1] < 7)) {


        var doNoConflict = true;
        if (typeof jQuery === 'undefined') {doNoConflict = false;}

        loadScript('//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', function(){
            if (doNoConflict) {
                jQuery17 = jQuery.noConflict(true);
            } else {
                jQuery17 = jQuery;
            }
            FormBuilderApp.init(jQuery17);
        });

    } else {
        FormBuilderApp.init(jQuery);
    }
}catch (e){ console.log('Menu app exception: ' + e)}
