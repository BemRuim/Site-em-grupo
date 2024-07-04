//FAZER O BOTAO APARECER E SUMIR

window.addEventListener('scroll', function() {
    var bebidaSection = document.getElementById('bebida');
    var setaTopo = document.getElementById('seta-topo');

    // Verifica se a seção de bebidas está visível na tela
    if (bebidaSection.getBoundingClientRect().top < window.innerHeight) {
        setaTopo.style.display = 'block'; // Mostra a seta
    } else {
        setaTopo.style.display = 'none'; // Oculta a seta
        }
    });

//APARECER SOMENTE UMA OPÇÃO

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links no menu de opções
    const links = document.querySelectorAll('.opcoes a');

    // Seleciona todos os articles de tipos de comida
    const articles = document.querySelectorAll('.tipos-de-comida article');

    // Adiciona um listener de evento de clique para cada link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Obtém o ID do article a ser exibido com base no href do link
            const id = this.getAttribute('href').slice(1);

            // Percorre todos os articles e oculta todos, exceto o que corresponde ao ID clicado
            articles.forEach(article => {
                if (article.id === id) {
                    article.style.display = 'block'; // ou 'flex' dependendo do seu CSS
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.opcoes a');
    const articles = document.querySelectorAll('.tipos-de-comida article');
    const mostrarTodosLink = document.getElementById('mostrar-todos'); // Seleciona o link "Mostrar Todos"

    // Função para mostrar todos os articles
    function mostrarTodos() {
        articles.forEach(article => {
            article.style.display = 'flex';
        });
    }

    // Adiciona um listener de evento de clique para cada link do menu
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const id = this.getAttribute('href').slice(1);
            articles.forEach(article => {
                if (article.id === id) {
                    article.style.display = 'flex';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // Adiciona um listener de evento de clique para o link "Mostrar Todos"
    mostrarTodosLink.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarTodos();
    });
});



//TROCAR AS DESCRICOES DOS PRODUTOS 

// Função para enviar dados do produto para a página cardapio.html
function mostrarDetalhes(nomeProduto, imagemProduto, descricaoProduto) {
    // Armazenar os dados do produto na sessão de armazenamento local
    localStorage.setItem('produtoNome', nomeProduto);
    localStorage.setItem('produtoImagem', imagemProduto);
    localStorage.setItem('produtoDescricao', descricaoProduto);
}



 // Recuperar dados do produto armazenados na sessão de armazenamento local
 var produtoNome = localStorage.getItem('produtoNome');
 var produtoImagem = localStorage.getItem('produtoImagem');
 var produtoDescricao = localStorage.getItem('produtoDescricao');

 // Atualizar os elementos HTML com os dados do produto
 document.getElementById('titulo-produto').textContent = produtoNome;
 document.getElementById('descricao-produto').textContent = produtoDescricao;
 document.getElementById('imagem-produto').src = produtoImagem;
 document.getElementById('imagem-produto').alt = produtoNome;

 // Limpar a sessão de armazenamento local após usar os dados
 localStorage.removeItem('produtoNome');
 localStorage.removeItem('produtoImagem');
 localStorage.removeItem('produtoDescricao');