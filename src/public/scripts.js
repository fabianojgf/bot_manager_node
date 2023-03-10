const ul = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

async function addElement({name, url}) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const trash = document.createElement("trash");

    a.href = url;
    a.innerHTML = name;
    a.target = "_blank";

    trash.innerHTML = "x";
    trash.onclick = () => removeElement(trash);

    li.append(a);
    li.append(trash);
    ul.append(li);
}

function removeElement(el) {
    if(confirm('Tem certeza que deseja remover?'))
        el.parentNode.remove();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let { value } = input;

    if(!value)
        return alert('Preencha o campo.');

    const [name, url] = value.split(",");

    if(!url)
        return alert('Formate o texto de maneira correta.');

    if(!/^http/.test(url))
        return alert("Digite a URL  da maneira correta.");

    addElement({name, url});

    input.value = "";
})