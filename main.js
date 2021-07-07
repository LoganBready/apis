const button = document.querySelector('button')


const handleClick = () => {
    axios.get('http://swapi.dev/api/planets/2').then((res) => {
        const residents = res.data.residents;
        for (let person of residents) {
            axios.get(person).then(res => {
                let element = document.createElement('h2');
                element.textContent = res.data.name;
                document.body.appendChild(element);
            })
        }
        console.log(res.data)
    });
    console.log('button clicked')
}

button.addEventListener('click', handleClick)