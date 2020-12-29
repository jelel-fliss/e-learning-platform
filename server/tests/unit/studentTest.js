const Student = require("../../class/student.js");

const assert = require("assert");
describe("Student Class Test", () => {
  const testDate = new Date();
  let student = new Student(
    1,
    "test@gmail.com",
    "First",
    "Last",
    "Paris",
    testDate,
    "LFI2",
    "Manar2"
  );

  it("testing getId()", () => {
    assert.equal(student.getId(), 1);
  });
  it("testing getFirstName()", () => {
    assert.equal(student.getFirstName(), "First");
  });
  it("testing getLastName()", () => {
    assert.equal(student.getLastName(), "Last");
  });
  it("testing getBirthPlace()", () => {
    assert.equal(student.getBirthPlace(), "Paris");
  });
  it("testing getBirthDate()", () => {
    assert.equal(student.getBirthDate(), testDate);
  });

  it("testing getAddress()", () => {
    assert.equal(student.getAddress(), "Manar2");
  });

  it("testing getClassGroup()", () => {
    assert.equal(student.getClassGroup(), "LFI2");
  });
});
