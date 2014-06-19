storefront.factory('locations', ['business', 'realEstate', '$rootScope', function (business, realEstate,$rootScope) {
  content = {
    business: business,
    realEstate: realEstate,
    initializeDataBuild: function(inputs) {
      realEstate.buildGeoLocations(inputs.realEstateLocations)
      business.initializeGoogleMapsQuery(inputs.businessParams)
    }
  }
  return content
}])
