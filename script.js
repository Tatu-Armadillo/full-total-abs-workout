const exercises = [
    {
        "name": "Hollow Leg Circles",
        "image": "https://www.verywellfit.com/thmb/AVLV-yzJrm0LBfhxne_QZUXq_K4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1-a93bf66b95324073840b65e052462c6b.jpg",
        "details": "EXPLICACAO DO EXERCICIO",
        "runtime": "10 minutes",
        "repetition": "10-20"
    },
    {
        "name": "Leg Roll Outs",
        "image": "https://www.wikihow.com/images/thumb/4/41/Use-a-Foam-Roller-on-Your-Legs-Step-8.jpg/v4-460px-Use-a-Foam-Roller-on-Your-Legs-Step-8.jpg",
        "details": "EXPLICACAO DO EXERCICIO",
        "runtime": "10 minutes",
        "repetition": "10-20"
    },
    {
        "name": "V Sit Scissors",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH10u6olPWueQbmBl1-i4DlZJengeBNxGitQ&usqp=CAU",
        "details": "EXPLICACAO DO EXERCICIO",
        "runtime": "10 minutes",
        "repetition": "10-20"
    }
];

function constructCards() {
    const cards = document.getElementById('cards');
    let html = "";
    exercises.forEach(e => { html += constructCard(e) });
    cards.innerHTML += html;
}

function constructCard(exercise) {
    let card = `
    <div class="col">
        <div class="card border rounded border-5 border-warning">
            <div class="card-head d-flex justify-content-center ">
                <img width="310px" height="310px"
                    src="${exercise.image}"
                    alt="${exercise.name}">
            </div>
            <div class="card-body text-center border border-0 border-top border-5 border-warning">
                <h3 class="card-title">${exercise.name}</h3>
                <button type="button" class="btn btn-outline-warning fw-bold">See More Details </button>
            </div>
        </div>
    </div>
    `;
    return card;
}

constructCards();
