function Dog(dogName,age,size,gender,dogImage,shelter, isAvailable)
{
	this.name = dogName;
	this.age = age;
	this.size = size;
	this.gender = gender;
	this.shelter = shelter;
	this.dogImage = dogImage;
	this.isAvailable = isAvailable;
}
var dogs = [];

function fillDogsData()
{
	var newDog1 = new Dog("Jax", "adult", "medium" , "male", "jax.jpg", 
	"https://www.allpaws.com/adopt-a-dog/australian-cattle-dog-blue-heeler/6482237", true );
	dogs[0] = newDog1;
	var newDog2 = new Dog("Ellie", "adult", "small" , "female", "ellie.jpg", "https://www.allpaws.com/adopt-a-dog/shih-tzu/6644799" , true);
	dogs[1] = newDog2;
	var newDog3 = new Dog("Gunther", "adult", "small" , "male", "gunther.jpg", 
	"https://www.allpaws.com/adopt-a-dog/maltese/6405800" , true);
	dogs[2] = newDog3;
	var newDog4 = new Dog("Orion", "baby", "medium" , "male", "orion.jpg" , "https://www.allpaws.com/adopt-a-dog/terrier/6070901", true);
	dogs[3] = newDog4;	
}

$(document).ready(function(){
	
	fillDogsData();
	var tableData = "<table><tr><td>Name</td><td>Age</td><td>Size</td><td>Image</td></tr>";
	for(var i = 0; i < dogs.length; i++)
	{
		tableData = tableData + "<tr><td>" + dogs[i].name + "</td><td>" + dogs[i].age +"</td><td>" + dogs[i].size + "</td><td><img src='" + dogs[i].dogImage + "' /> </td</tr>"; 
	}
	tableData = tableData + "</table>";
	console.log(tableData);
	$("#dogstable").html(tableData);
	
});