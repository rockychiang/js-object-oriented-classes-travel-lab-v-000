class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = Date(starDate);
  }
  
  startDate () {
    return new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}