function ProfilesBox(sel) {
  var self = this;

  function initialize(sel) {
    self.sel              = sel;
    self.$profileBox      = $(self.sel);
    self.$personIcons     = self.$profileBox.find('.person-icon');
    self.$personProfile   = self.$profileBox.find('.person-profile');
    self.$personName      = self.$profileBox.find('.person-name');
    self.$personDesc      = self.$profileBox.find('.person-desc');
    self.$personPhoto     = self.$profileBox.find('.person-photo');
    self.$personLinkedin  = self.$profileBox.find('.person-linkedin');
    self.$personGithub    = self.$profileBox.find('.person-github');
    self.$personTwitter   = self.$profileBox.find('.person-twitter');
    self.$personSite      = self.$profileBox.find('.person-site');

    // console.log(self.$personIcons);
    // person icon click event
    self.$personIcons.on('click', self.swapPerson);
  }

  self.swapPerson = function() {
    var image = this;
    if ($(image).hasClass('selected')) {
      // already selected
    } else {
      // update person displayed
      self.$personIcons.filter('.selected').removeClass('selected'); // remove selected class from previous person
      $(image).addClass('selected');
      self.updatePersonProfile(image);
    }
  };

  self.updatePersonProfile = function(ele) {
    
    var $personThumb = $(ele);
    var personID     = $personThumb.attr('data-id');
    var personInfo   = personData[personID];

    self.$personPhoto.attr('src', $personThumb.attr('src')).show();
    self.$personName.text(personInfo.name);
    self.$personDesc.text(personInfo.description);

    $.each([
      {data: personInfo.linkedin,  ele: self.$personLinkedin}, 
      {data: personInfo.github,    ele: self.$personGithub}, 
      {data: personInfo.twitter,   ele: self.$personTwitter}, 
      {data: personInfo.site,      ele: self.$personSite} 
    ], function(i, item) {
      self.updateLinks(item);
    });
  }

  self.updateLinks = function(item) {
    if (item.data.length > 0) {
      item.ele.attr('href', item.data).show(); // update link href & ensure the element is visible
    } else {
      item.ele.hide(); // hide the link
    }
  }

  self.cacheProfiles = function() {
    // cache element selections for re-use:
    $personProfile   = $('#person-profile');
    $personName      = $personProfile.find('.person-name');
    $personDesc      = $personProfile.find('.person-desc');
    $personPhoto     = $personProfile.find('.person-photo');
    $personLinkedin  = $personProfile.find('.person-linkedin');
    $personGithub    = $personProfile.find('.person-github');
    $personTwitter   = $personProfile.find('.person-twitter');
    $personSite      = $personProfile.find('.person-site');
  }
  
  initialize(sel);
  return self
}

