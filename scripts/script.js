var main = document.getElementsByTagName("main")[0];

function home() {
    //------------ Main Content ------------//
    main.setAttribute("class", "mainHome");
    main.innerHTML = 
        `<section id="content">
            <h1>Diversas modalidades de treinos</h1>
            <p>Obtenha bons resultados e alcance seus objetivos. Faça parte do nosso time! </p>
        </section>`;
}

function plans() {
    //------------ Main Content ------------//
    main.setAttribute("class", "mainPlans")
    main.innerHTML = 
        `<section id="plans">
            <div class="modelBox">
                <h1>Plano Básico</h1>
                <p>2x por semana.</p>
                <p>Treino de 40 a 60 minutos.</p>
                <p>Treinador compartilhado.</p>
                <a href="#">Aproveite</a>
            </div>

            <div class="modelBox">
                <h1>Plano Prata</h1>
                <p>4x por semana.</p>
                <p>Treino de 40 a 60 minutos.</p>
                <p>Treinador compartilhado.</p>
                <a href="#">Aproveite</a>
            </div>
            
            <div class="modelBox">
                <h1>Plano Ouro</h1>
                <p>5x por semana.</p>
                <p>Treino de 40 a 60 minutos.</p>
                <p>Treinador particular.</p>
                <a href="#">Aproveite</a>
            </div>

            <div class="modelBox">
                <h1>Plano Diamante</h1>
                <p>6x por semana.</p>
                <p>Treino de 40 a 60 minutos.</p>
                <p>Treinador particular.</p>
                <a href="#">Aproveite</a>
            </div>
        </section>`;
}

function contact() {
    //------------ Main Content ------------//
    main.setAttribute("class", "mainContact");
    main.innerHTML =
        `<section id="contact">
            <div class="form">
                <h1>Entre em contato conosco</h1>

                <form method="POST" action="">
                    <input type="text" placeholder="Nome" required>
                    <input type="email" placeholder="E-mail" required>
                    <textarea style="resize: none;" name="message" placeholder="Mensagem"></textarea>
                    <input type="submit" value="Enviar">
                </form>

            </div>

            <div class="location">
                <h1>Onde nos encontrar</h1>
                <div id="gps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8920011787673!2d-46.62644258502187!3d-23.572321984677405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597067308c15%3A0x4e362f968369a397!2sAv.%20Lacerda%20Franco%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1629145964512!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="auto"></iframe>
                <div>
            </div>
        </section>`
}