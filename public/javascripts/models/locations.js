storefront.factory('locations', ['business', 'realEstate', function (business, realEstate) {
  content = {
    business: business,
    realEstate: realEstate,
    initializeDataBuild: function(inputs) {
      business.initializeGoogleMapsQuery(inputs.businessParams)
      realEstate.buildGeoLocations(inputs.realEstateLocations)
    }
  }
  return content
}])
