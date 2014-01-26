function setupProfilesBox() {
  window.studentProfiles = new ProfilesBox('#student-profiles');
  window.instructorProfiles = new ProfilesBox('#instructor-profiles');
}

$('document').ready(setupProfilesBox);





