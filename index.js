class Driver {
  constructor(name, startDate) {
    this.name = name;
  }
  
  startDate = new Date(startDate)
  
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