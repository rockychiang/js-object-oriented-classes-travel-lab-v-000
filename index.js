class Driver {
  constructor(name, startDate) {
    this.name = name;
  }
  
  startDate = new Date(startDate)
  
  startDate () {
    return startDate;
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