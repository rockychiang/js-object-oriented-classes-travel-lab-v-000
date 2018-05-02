class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
    const hTravelled = this.endingLocation.horizontal - this.beginningLocation.horizontal
    const vTravelled = this.endingLocation.vertical - this.beginningLocation.vertical
  }
  
  estimatedTime(peakHours){
    
  }
}