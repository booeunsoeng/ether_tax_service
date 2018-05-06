App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets.
    $.getJSON('../taxService_abi.json', function(data) {
      var taxRow = $('#taxRow');
      var taxTemplate = $('#taxTemplate');

      for (i = 0; i < data.length; i ++) {
        taxTemplate.find('.panel-title').text(data[i].name);
        taxTemplate.find('img').attr('src', data[i].picture);
        taxTemplate.find('.pet-breed').text(data[i].breed);
        taxTemplate.find('.pet-age').text(data[i].age);
        taxTemplate.find('.pet-location').text(data[i].location);
        taxTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        taxRow.append(taxTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
