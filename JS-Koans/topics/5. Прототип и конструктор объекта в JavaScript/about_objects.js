describe("About Objects (about_objects.js)", function () {

  describe("Properties", function () {
    let megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect("Joker").toBe(megalomaniac.mastermind);
    });

    it("should confirm that properties are case sensitive", function () {
      expect("Harley").toBe(megalomaniac.henchwoman);
      expect(undefined).toBe(megalomaniac.henchWoman);
    });
  });


  it("should know properties that are functions act like methods", function () {
    let megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    let battleCry = megalomaniac.battleCry(4);
    expect(battleCry).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    let currentDate = new Date();
    let currentYear = (currentDate.getFullYear());
    let megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentDate.getFullYear()).toBe(currentYear);
    expect(currentYear - 1970).toBe(megalomaniac.calculateAge());
  });

  describe("'in' keyword", function () {
    let megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {
      let hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator however", function () {
      let hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("should know that properties can be added and deleted", function () {
    let megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("should use prototype to add to all objects", function () {
      function Circle(radius){
        this.radius = radius;
      }

      let simpleCircle = new Circle(10);
      let colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(undefined).toBe(simpleCircle.colour);
      expect("red").toBe(colouredCircle.colour);

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect("This circle has a radius of: 10").toBe(simpleCircle.describe());
      expect("This circle has a radius of: 5").toBe(colouredCircle.describe());
  });
});
