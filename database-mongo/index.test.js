const select = require('./index');
// test for the entire set of data
test('data length should be 100', (done) => {
  select.selectAll((err, data) => {
    expect(data.length).toBe(100);
    done();
  });
});
// test for making sure each one has 3 pictures
test('Should all have an array of 3 picture urls', (done) => {
  select.selectAll((err, data) => {
    const pictureArr = JSON.parse(data[0].pictures);
    expect(pictureArr.length).toBe(3);
    done();
  });
});
// tests a select for a single resturant id
test('Should all have a comment', (done) => {
  select.selectAll((err, data) => {
    const checkComment = data[50].comment;
    expect(checkComment !== undefined).toBe(true);
    done();
  });
});
