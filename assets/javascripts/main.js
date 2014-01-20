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

  $studentPhoto.attr('src', $studentThumb.attr('src'));
  $studentName.text(studentInfo.name);
  $studentDesc.text(studentInfo.description);
  $studentLinkedin.attr('href', studentInfo.linkedin);
  $studentGithub.attr('href', studentInfo.github);
  $studentTwitter.attr('href', studentInfo.twitter);
  $studentSite.attr('href', studentInfo.site);
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