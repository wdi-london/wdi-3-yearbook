function swapPerson() {
  if ($(this).hasClass('selected')) {
    // already selected
  } else {
    // update student displayed
    $personIcons.filter('.selected').removeClass('selected'); // remove selected class from previous student
    $(this).addClass('selected');
    updateStudentProfile(this);
  }
};

function updatePersonProfile(ele) {
  var $personThumb = $(ele);
  var personID     = $personThumb.attr('data-id');
  var personInfo   = personData[studentID];

  $personPhoto.attr('src', $personThumb.attr('src')).show();
  $personName.text(personInfo.name);
  $personDesc.text(personInfo.description);

  $.each([
    {data: personInfo.linkedin,  ele: $personLinkedin}, 
    {data: personInfo.github,    ele: $personGithub}, 
    {data: personInfo.twitter,   ele: $personTwitter}, 
    {data: personInfo.site,      ele: $personSite} 
  ], function(i, item) {
    updateLinks(item);
  });
}

function updateLinks(item) {
  if (item.data.length > 0) {
    item.ele.attr('href', item.data).show(); // update link href & ensure the element is visible
  } else {
    item.ele.hide(); // hide the link
  }
}

$(function() {
  // cache element selections for re-use:
  $personIcons     = $('.person-icon');
  $personProfile   = $('#person-profile');
  $personName      = $personProfile.find('.person-name');
  $personDesc      = $personProfile.find('.person-desc');
  $personPhoto     = $personProfile.find('.person-photo');
  $personLinkedin  = $personProfile.find('.person-linkedin');
  $personGithub    = $personProfile.find('.person-github');
  $personTwitter   = $personProfile.find('.person-twitter');
  $personSite      = $personProfile.find('.person-site');

  // person icon click event
  $personIcons.on('click', swapPerson);
});