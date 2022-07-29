const getData = async () => {
    const response= await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%')
    console.log(response);
    const data= await response.json();
    console.log(data);
    length=data.drinks.length;
    console.log(data);
  }
  getData(); 

