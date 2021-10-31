
const InternetConnection = require('./InternetConnection.js');



describe('internetConnection', () => {


  test('Default value is false', () => {

    let internetConnection = new InternetConnection;
    expect(internetConnection.connection).toBe(false);
  });


  test('Set connection to true and return the price', () => {
    
    let internetConnection = new InternetConnection;

    let price = internetConnection.toggle(true);
    
    expect(internetConnection.connection).toBe(true);
    expect(price).toBe(200);

  });

  test('Set connection from true to false and return the price', () => {
    
    let internetConnection = new InternetConnection;
    internetConnection.toggle(true);
    
    expect(internetConnection.connection).toBe(true);


  });







})

