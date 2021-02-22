var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

  it("initializes with five candidates and their running mate", function() {
    return Election.deployed().then(function(instance) {
      return instance.candidatesCount();
    }).then(function(count) {
      assert.equal(count, 5);
    });
  });

  it("it initializes the candidates with the correct values", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "contains the correct id");
      assert.equal(candidate[1], "Joseph R. Biden / Kamala D. Harris (Democratic)", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
       return electionInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "contains the correct id");
      assert.equal(candidate[1], "Donald J. Trump / Michael R. Pence (Republican)", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
       return electionInstance.candidates(3);
    }).then(function(candidate) {
      assert.equal(candidate[0], 3, "contains the correct id");
      assert.equal(candidate[1], "Don Blankenship / William Mohr (Constitution)", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
       return electionInstance.candidates(4);
    }).then(function(candidate) {
      assert.equal(candidate[0], 4, "contains the correct id");
      assert.equal(candidate[1], "Jo Jorgensen / Jeremy Spike Cohen (Libertarian Party)", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
       return electionInstance.candidates(5);
    }).then(function(candidate) {
      assert.equal(candidate[0], 5, "contains the correct id");
      assert.equal(candidate[1], "Brian Carroll / Amar Patel (American Solidarity Party)", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
    });
  });
});
