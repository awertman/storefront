storefront.factory('locations', function() {
  locations = {
    realEstate: [],
    business: [],
    buildGoogleMapObjects: function( locations ) {
      this._buildBusinessObjects( locations.business )
      this._buildRealEstateObjects( locations.realEstate )
    },
    _buildBusinessObjects: function( businessLocations ) {
      this.business = []
      for ( var i in businessLocations ) {
        this.business.push(new google.maps.LatLng( businessLocations[i].latitude, businessLocations[i].longitude) )
      }
    },
    _buildRealEstateObjects: function( realEstateLocations ) {
      this.realEstate = []
      for ( var i in realEstateLocations ) {
        this.realEstate.push(new google.maps.LatLng( realEstateLocations[i].latitude, realEstateLocations[i].longitude) )
      }
    }
  }
  return locations
})
