// code solution here
class President {
  constructor( name, politicalParty, yearsInOffice, homeState) {
    this.name  = name
    this.politicalParty = politicalParty
    this.yearsInOffice =yearsInOffice
    this.homeState =homeState;
  }
veto() {
   return "NO!" ;
 }

 passBill()
 {
    return "You can do that!";
  }

doCharity()
{
  return "I like to help people.";
}

conductPressInterview ()
{
 return "I am proud to be an American.";

}

sayHi()
{
  return "Hi, my name is " + this.name + "I am from " + this.homestate + " I represent the " + this.politcalParty + " and was in office " + this.yearsInOffice ;
}
}

President GeorgeWashington = new President("name", "politicalParty",8, "homeState");
President AbrahamLincoln = new President("name", "politicalParty",8, "homeState");
President  RichardNixon = new President("name", "politicalParty",8, "homeState");
President JimmyCarter= new President("name", "politicalParty",8, "homeState");
