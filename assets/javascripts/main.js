function swapStudent() {
  if ($(this).hasClass('selected')) {
    // already selected
  } else {
    // update student displayed
    $studentIcons.filter('.selected').removeClass('selected'); // remove selected class from previous student
    $(this).addClass('selected');
    updateStudentProfile(this);
  }
};

function updateStudentProfile(ele) {
  var $studentThumb = $(ele);
  var studentID     = $studentThumb.attr('data-id');
  var studentInfo   = studentData[studentID];

  $studentPhoto.attr('src', $studentThumb.attr('src')).show();
  $studentName.text(studentInfo.name);
  $studentDesc.text(studentInfo.description);

  $.each([
    {data: studentInfo.linkedin,  ele: $studentLinkedin}, 
    {data: studentInfo.github,    ele: $studentGithub}, 
    {data: studentInfo.twitter,   ele: $studentTwitter}, 
    {data: studentInfo.site,      ele: $studentSite} 
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
  $studentIcons     = $('.student-icon');
  $studentProfile   = $('#student-profile');
  $studentName      = $studentProfile.find('.student-name');
  $studentDesc      = $studentProfile.find('.student-desc');
  $studentPhoto     = $studentProfile.find('.student-photo');
  $studentLinkedin  = $studentProfile.find('.student-linkedin');
  $studentGithub    = $studentProfile.find('.student-github');
  $studentTwitter   = $studentProfile.find('.student-twitter');
  $studentSite      = $studentProfile.find('.student-site');

  // student icon click event
  $studentIcons.on('click', swapStudent);
});