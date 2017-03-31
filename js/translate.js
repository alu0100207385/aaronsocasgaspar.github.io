$(document).ready(function() {
  $('#translateToSpanish').click(function(){
    translate(langEs);
    $('#linkEng').removeClass('active');
    $('#linkEsp').addClass('active');
  });
  $('#translateToEnglish').click(function(){
    translate(langEn);
    $('#linkEng').addClass('active');
    $('#linkEsp').removeClass('active');
  });
});



function translate(elem){
  //Top navbar
  $('#dropdownNav').text(elem["dropdownNav"]);
  $('#cv').text(elem["cv"]);
  $('#all').text(elem["all"]);
  $('.repository').text(elem["repository"]);
  $('#professionalExperienceNav').text(elem["professionalExperienceNav"]);
  $('#educationNav').text(elem["educationNav"]);
  $('#certificationsNav').text(elem["certificationsNav"]);
  $('#portfolioNav').text(elem["portfolioNav"]);
  //For print
  $('#locationPrint').text(elem["location"]);
  $('#emailPrint').text(elem["myEmail"]);
  $('#linkedinPrint').text(elem["myLinkedin"]);
  $('#githubPrint').text(elem["myGithub"]);
  $('#carPrint').text(elem["car"]);
  $('#languagesPrint').text(elem["languages"]);
  $('#certificationsPrint').text(elem["certifications"]);
  $('#certificationsDetailsPrint').text(elem["certificationsDetailsPrint"]);

  $('#professionalExperience').text(elem["professionalExperience"]);
  $('#education').text(elem["education"]);
  $('#certifications').text(elem["certifications"]);
  $('#portfolio').text(elem["portfolio"]);
  $('#rol').text(elem["rol"]);
  $('#resume').html(elem["resume"]);
  $('.coverLetterTitle').text(elem["coverLetterTitle"]);
  $('#coverLetter').html(elem["coverLetter"]);
  $('.printDocument').text(elem["printDocument"]);
  $('#atosTime').text(elem["atosTime"]);
  $('#atosRol').text(elem["atosRol"]);
  $('#atosTasks').html(elem["atosTasks"]);
  $('#integraTime').text(elem["integraTime"]);
  $('#integraRol').text(elem["integraRol"]);
  $('#integraTasks').html(elem["integraTasks"]);
  $('#laLagunaTime').text(elem["laLagunaTime"]);
  $('#laLagunaRol').text(elem["laLagunaRol"]);
  $('#laLagunaCompany').text(elem["laLagunaCompany"]);
  $('#laLagunaTasks').html(elem["laLagunaTasks"]);
  $('#chamberOfCommerceTime').text(elem["chamberOfCommerceTime"]);
  $('#chamberOfCommerceRol').text(elem["chamberOfCommerceRol"]);
  $('#chamberOfCommerceCompany').text(elem["chamberOfCommerceCompany"]);
  $('#chamberOfCommerceTasks').html(elem["chamberOfCommerceTasks"]);
  $('#educationLaLagunaTime').text(elem["educationLaLagunaTime"]);
  $('#educationLaLagunaCareer').text(elem["educationLaLagunaCareer"]);
  $('#educationLaLagunaCompany').text(elem["laLagunaCompany"]);
  $('#educationLaLagunaDetails').html(elem["educationLaLagunaDetails"]);
  $('#educationCesarManriqueTime').text(elem["educationCesarManriqueTime"]);
  $('#educationCesarManriqueRol').text(elem["educationCesarManriqueRol"]);
  $('#educationCesarManriqueCompany').text(elem["educationCesarManriqueCompany"]);
  $('#educationCesarManriqueDetails').html(elem["educationCesarManriqueDetails"]);
  $('#googleActivateDetails').text(elem["googleActivateDetails"]);
  $('#googleActivateMobileCourse').text(elem["googleActivateMobileCourse"]);
  $('#googleActivateMobileEmisor').text(elem["googleActivateMobileEmisor"]);
  $('#googleActivateMobileDetails').text(elem["googleActivateMobileDetails"]);
  $('#googleActivateWebCourse').text(elem["googleActivateWebCourse"]);
  $('#googleActivateWebEmisor').text(elem["googleActivateWebEmisor"]);
  $('#googleActivateWebDetails').text(elem["googleActivateWebDetails"]);
  $('#googleActivateCloudCourse').text(elem["googleActivateCloudCourse"]);
  $('#googleActivateCloudEmisor').text(elem["googleActivateCloudEmisor"]);
  $('#googleActivateCloudDetails').text(elem["googleActivateCloudDetails"]);
  $('#iterCourse').text(elem["iterCourse"]);
  $('#iterCompany').text(elem["iterCompany"]);
  $('#iterDetails').text(elem["iterDetails"]);
  $('#codeSchoolDetails').text(elem["codeSchoolDetails"]);
  $('#rubyCourseDetails').text(elem["rubyCourseDetails"]);
  $('#angularCourseDetails').text(elem["angularCourseDetails"]);
  $('#javascriptCourse1Details').text(elem["javascriptCourse1Details"]);
  $('#gitCourseDetails').text(elem["gitCourseDetails"]);
  $('#sqlCourseDetails').text(elem["sqlCourseDetails"]);
  $('#jqueryCourseDetails').text(elem["jqueryCourseDetails"]);
  $('#portfolioTime').text(elem["portfolioTime"]);
  $('#portfolioLastUpdate').text(elem["portfolioLastUpdate"]);
  $('#portfolioView').text(elem["portfolioView"]);
  $('#portfolioDetails').text(elem["portfolioDetails"]);
  $('#getCv').text(elem["getCv"]);


  $('#location').text(elem["location"]);
  $('#email').text(elem["email"]);
  $('#linkedin').text(elem["linkedin"]);
  $('#github').text(elem["github"]);
  $('#car').text(elem["car"]);
  $('#proffesionalSkills').text(elem["proffesionalSkills"]);
  $('#languages').text(elem["languages"]);
  $('#english').text(elem["english"]);
  $('#spanish').text(elem["spanish"]);
  $('#otherKnowledge').text(elem["otherKnowledge"]);
  $('#repositoryDevelopment').text(elem["repositoryDevelopment"]);
  $('#testMethods').text(elem["testMethods"]);
  $('#testTools').text(elem["testTools"]);
  $('#manageTools').text(elem["manageTools"]);
  $('#agileMthodology').text(elem["agileMthodology"]);
  $('#clouds').text(elem["clouds"]);
  $('#database').text(elem["database"]);
  $('#os').text(elem["os"]);

  // Change active class
  $('#linkEng').addClass('active');
  $('#linkEsp').removeClass('active');
  }