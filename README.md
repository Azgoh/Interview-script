## Ερωτήσεις

1. Γιατί δεν εμφανίζεται η απάντηση την πρώτη φορά που πατάμε το κουμπί και πρέπει να το ξαναπατήσουμε για να εμφανιστεί;
2. Τι κάνει η συνάρτηση `arr()`; Μπορείς να φανταστείς τι κάνει η συνάρτηση `.map()` σε πίνακες;

## Απαντήσεις

1. Λόγω της μικρής καθυστέρησης που υπάρχει εξαιτίας της ασύγχρονης επικοινωνίας στα http requests, η μεταβλητή `data` δεν προλαβαίνει να οριστεί, οπότε και το `text` μένει `undefinded`. Μπορούμε να λύσουμε αυτό το πρόβλημα είτε:
  - Κάνοντας το request έξω από την `revealAnswer()`:
```ts
var data;

const fetchAPI = async(URL) => {

	const response = await fetch(URL);
	
	data = await response.json();
};

fetchAPI("https://jsonplaceholder.typicode.com/todos/1");

const revealAnswer = () => {
    let text = "";
    for(let i in data){
        text += data[i] + "\n";
    }
    document.getElementById("first-answer").innerText = text;
   
};

```
- Θέτοντας ένα μικρό timeout μετά την εκτέλεση του request στην `revealAnswer()`:
```ts
  const revealAnswer = () => {
    fetchAPI("https://jsonplaceholder.typicode.com/todos/1");
    setTimeout(() => {
        let text = "";
        for(let i in data){
            text += data[i] + "\n";
        }
        document.getElementById("first-answer").innerText = text;
    }, 150);  //150ms
};
```

2. Η συνάρτηση `arr()` παίρνει τις συμβολοσειρές του πίνακα `examples` και τις αντιστοιχεί στο μήκος τους μέσα στον πίνακα `results`. Έπειτα τυπώνει τον `results` στην κονσόλα.
