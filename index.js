class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = starDate;
  }
  
  startDate () {
    return Date(startDate);
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