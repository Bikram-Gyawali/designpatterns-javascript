// The Observer Pattern is a behavioral design pattern
// that lets you define a subscription mechanism to
//notify multiple objects about any events that happen
// to the object they're observing. In other words, the
//Observer Pattern defines a one-to-many type of
//dependence between different objects, and it ensures
//that the change of the state in one object gets
//automatically reflected in all dependant objects!

// Entities that will participate in the Observer paradigm are:

//SUBJECT It keeps a reference towards its observer. One object can have many Observer
//objects It provides an interface for "attaching" and "detaching" observer objects

// CONCRETE SUBJECT It keeps the state of interest of the Concrete Observer objects It
//sends notifications to its observers when the state changes

//OBSERVER It defines an interface for updating the objects after the state of the
// changes in the objects of the class type Subject

//CONCRETE OBSERVER It keeps a reference to the Concrete Subject objects It keeps the
//state that should stay consistent with the state of the parent class It implements an
//interface for updating object that is defined in the Observer class

class Subject {
  constructor() {
    this.observerList = [];
  }
  attach(observer) {
    console.log("attachinig observer..." + observer.name);
    this.observerList.push(observer);
  }
  detach(observerId) {
    let observer = this.observerList.find((item) => item.id === observerId);
    console.log("detaching observer..." + observer.name);
    this.observerList = this.observerList.filter(
      (item) => item.id !== observerId
    );
  }
  notify() {
    console.log("The notification process starts...");
    for (let i = 0; i < this.observerList.length; i++) {
      this.observerList[i].update();
    }
    console.log("the notification process ends here");
  }
}

class ConcreteSubject extends Subject {
  constructor() {
    super();
  }
  getSubjectState() {
    return this.subjectState;
  }
  setSubjectState(subjectState) {
    this.subjectState = subjectState;
  }
  function() {
    return { getSubjectState, setSubjectState };
  }
}
//It defines an interface for updating the objects after the state
//of the changes in the objects of the class type Subject

class Observer {
  update() {
    return;
  }
}
//The concrete observer class will extend an observer class
//It keeps a reference to the Concrete Subject objects
//It keeps the state that should stay consistent with the state of
//the parent class

class ConcreteObserver extends Observer {
  constructor(id, subject, name) {
    super();
    this.id = id;
    this.subject = subject; //a reference to the Concrete Subject object
    this.name = name;
    this.observerState = ""; // the state that should stay consistent with the state of
    //the parent class
  }

  //The interface for update object
  update() {
    this.observerState = this.subject.subjectState;
    console.log(`${this.name} new state is: ${this.observerState}`);
  }

  getSubject() {
    return this.subject;
  }

  setSubject(subject) {
    this.subject = subject;
  }
}

//we will instantiate our concrete subject class that should be observed
var s = new ConcreteSubject();
//attaching the first concrete observer with an id of 1, 
//passing the concrete subject instance
//passing the name of the observer
s.attach(new ConcreteObserver(1, s, 'First observer'));
//attaching the second observer
s.attach(new ConcreteObserver(2, s, 'Second observer'));
//changing the subject state
s.setSubjectState("subject changed");
//notifying OBSERVERS (we have two observer at the moment) that the state was changed
s.notify();
/* OUTPUT OF THE NOTIFY FUNCTION
The Notification process starts...
First observer new state is: subject changed
Second observer new state is: subject changed
The Notification process ends...
*/
//detaching the observer with an id of 1
s.detach(1)
//changing the subject state
s.setSubjectState("removed one observer");
//notifying OBSERVER (because we detached our observer with an id of 1
//we are left with only one observer that should get notified about the
//change of the state
s.notify();
/* OUTPUT OF THE NOTIFY FUNCTION
 The notification process starts...
Second observer new state is: removed one observer
 The Notification process ends...
*/