var data;

const fetchAPI = async(URL) => {

	const response = await fetch(URL);
	
	data = await response.json();
};



const revealAnswer = () => {
    fetchAPI("https://jsonplaceholder.typicode.com/todos/1");
    let text = "";
    for(let i in data){
        text += data[i] + "\n";
    }
    document.getElementById("first-answer").innerText = text;
   
};

const arr = () => {
    var examples = ["angular", "react", "vue", "nodejs"];
    var results = examples.map((element) => (element.length));
    console.log(results)
}

arr();
