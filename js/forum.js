nomes = ['Laércio', 'Laiane', 'Larissa', 'Leandro', 'Leonardo', 'Leônidas', 'Leticia', 'Lincoln', 'Lourenço',
'Luana', 'Lucas', 'Luciano', 'Lúcio', 'Luiz'];
const postContainer = document.querySelector('.forum_discussoes');
let postModel = '';


/* class postData {

	let respostas = 0; 

	function postData(titulo, usuario) {

	}

	function setRespostas() {
		this.respostas += 1; 
	}
}
*/

function rnome(){
	return nomes[Math.floor(Math.random() * nomes.length)];
}


posts = [
['Eu doei o meu pc mais forte que uso ao invés do meu pc que é velho, o que eu faço?', rnome(), 0],
['O doador pediu pra eu ir no mato desarmado pra eu receber a doação como denunciar?', rnome(), 15], 
['Como eu baixo a placa de vídeo no meu pc novo?????', rnome(), 4]
];


for (let i = 0; i < posts.length; i++) {
	postModel = `<article class="forum_discussao">
	<a class="forum_card" href="../pages/discussao.html"> <div class="forum_conteudo-texto">
	<div class="forum_texto-parteUm">
	<h2 class="forum_texto-titulo"> ${posts[i][0]}</h2>
	<div class="forum_texto-categoria">Software</div>
	<h5 class="forum_texto-dia">Atualizado à 2 min.</h5>
	</div>
	<div class="forum_texto-parteDois">
	<h5 class="forum_texto-resposta">Respostas:</h5>
	<h5 class="forum_texto-quantidade">${posts[i][2]}</h5>
	</div>
	</div>
	<div class="forum_conteudo-usuario">
	<div class="forum_img"></div>
	<h3 class="forum_usuario">${posts[i][1]}</h3>
	</div> 
	</a>
	</article>`


	postContainer.innerHTML += postModel;

}


