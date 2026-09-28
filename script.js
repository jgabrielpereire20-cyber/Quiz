const questions = [
    {
        question: "Durante a verificação da glicemia capilar em um paciente adulto, qual é o local recomendado para a punção com a lanceta a fim de minimizar a dor?",
        options: [
            "No centro da polpa digital",
            "Na lateral da polpa digital",
            "Na dobra do cotovelo",
            "Na palma da mão",
            "Na região sublingual"
        ],
        answer: 1,
        explanation: "A punção deve ser realizada na lateral da polpa digital, pois possui menor densidade de terminações nervosas e maior irrigação sanguínea."
    },
    {
        question: "Ao aferir a pressão arterial de um paciente, o técnico de enfermagem identifica um valor de 150x95 mmHg. Este valor é classificado como:",
        options: [
            "Normotensão",
            "Hipotensão",
            "Hipertensão",
            "Bradicardia",
            "Taquipneia"
        ],
        answer: 2,
        explanation: "Valores com sistólica acima de 140 mmHg e/ou diastólica acima de 90 mmHg são classificados como hipertensão."
    },
    {
        question: "Qual via de administração é utilizada para a aplicação da vacina BCG e testes alérgicos?",
        options: [
            "Subcutânea (SC)",
            "Intramuscular (IM)",
            "Endovenosa (EV)",
            "Intradérmica (ID)",
            "Oral (VO)"
        ],
        answer: 3,
        explanation: "A via intradérmica (ID) é indicada para pequenas doses (até 0,5 ml) e absorção lenta, como na vacina BCG e testes de sensibilidade."
    },
    {
        question: "Um paciente precisa receber medicação por via subcutânea. Qual o ângulo recomendado para a inserção da agulha em um paciente com camada de tecido adiposo adequada, utilizando agulha comum?",
        options: [
            "10 a 15 graus",
            "30 graus",
            "45 a 90 graus",
            "120 graus",
            "180 graus"
        ],
        answer: 2,
        explanation: "A via subcutânea é administrada em ângulo de 45° a 90°, dependendo do tamanho da agulha e do tecido adiposo do paciente."
    },
    {
        question: "Na administração de medicamentos via intramuscular na região ventroglútea (Hockstetter), a principal vantagem é:",
        options: [
            "Maior sensibilidade à dor",
            "Ausência de grandes vasos e nervos importantes",
            "Capacidade máxima de apenas 1 ml",
            "Fácil visualização pelo próprio paciente",
            "Isenção da necessidade de assepsia"
        ],
        answer: 1,
        explanation: "A região ventroglútea é considerada a mais segura por ser livre de vasos sanguíneos calibrosos e nervos importantes, como o ciático."
    },
    {
        question: "Qual dispositivo de acesso venoso periférico agulhado, também conhecido como 'scalp', é indicado para infusões de curta duração?",
        options: [
            "Cateter intravenoso flexível (Abdocath/Jelco)",
            "Cateter agulhado com asas de borboleta",
            "Cateter central de inserção periférica (PICC)",
            "Cateter totalmente implantável",
            "Sonda nasogástrica"
        ],
        answer: 1,
        explanation: "O 'scalp' é um cateter agulhado com asas de borboleta, indicado para coletas de sangue ou infusões rápidas de curta duração."
    },
    {
        question: "Segundo as metas internacionais de segurança do paciente, qual é o primeiro passo para garantir a correta administração de medicamentos?",
        options: [
            "Verificar o prazo de validade da seringa",
            "Identificar corretamente o paciente por pelo menos dois identificadores",
            "Aplicar o medicamento rapidamente",
            "Pedir ao acompanhante para confirmar a medicação",
            "Anotar a medicação antes de administrar"
        ],
        answer: 1,
        explanation: "A identificação correta do paciente (ex: nome completo e data de nascimento) é a Meta 1 da Segurança do Paciente para evitar erros."
    },
    {
        question: "Antes de realizar a glicemia capilar, a limpeza do local da punção deve ser feita preferencialmente com:",
        options: [
            "Álcool 70% e esperar secar completamente",
            "Água sanitária",
            "Iodopovidona (PVPI)",
            "Água oxigenada",
            "Sabão líquido concentrado sem enxágue"
        ],
        answer: 0,
        explanation: "A antissepsia deve ser feita com álcool 70%, aguardando a secagem completa para que o álcool não dilua o sangue e altere o resultado."
    },
    {
        question: "Qual é a frequência cardíaca média considerada normal (normocardia) para um adulto em repouso?",
        options: [
            "30 a 50 bpm",
            "60 a 100 bpm",
            "110 a 140 bpm",
            "150 a 200 bpm",
            "20 a 40 bpm"
        ],
        answer: 1,
        explanation: "A frequência cardíaca normal para um adulto em repouso varia entre 60 e 100 batimentos por minuto (bpm)."
    },
    {
        question: "Ao preparar uma medicação endovenosa em bolo (bolus), o técnico de enfermagem deve injetar a solução:",
        options: [
            "Lentamente, diretamente na veia ou no acesso, em tempo de 1 a 5 minutos",
            "Em infusão contínua por 24 horas",
            "Apenas por via intramuscular prévia",
            "Rápido, em menos de 1 segundo, sempre",
            "Diluída em 1 litro de soro obrigatoriamente"
        ],
        answer: 0,
        explanation: "A administração em bolus é feita diretamente no acesso venoso, de forma lenta (geralmente entre 1 e 5 minutos), conforme protocolo da droga."
    },
    {
        question: "Qual é o termo técnico utilizado para descrever a respiração rápida e superficial?",
        options: [
            "Bradipneia",
            "Eupneia",
            "Taquipneia",
            "Apneia",
            "Dispneia"
        ],
        answer: 2,
        explanation: "Taquipneia é a elevação da frequência respiratória acima dos valores normais para a idade."
    },
    {
        question: "Na administração de insulina por via subcutânea, qual o cuidado fundamental para evitar a lipodistrofia?",
        options: [
            "Realizar rodízio dos locais de aplicação",
            "Usar sempre o mesmo ponto de aplicação",
            "Massagear vigorosamente o local após a aplicação",
            "Aplicar a insulina fria direto do congelador",
            "Utilizar a via intramuscular em vez da subcutânea"
        ],
        answer: 0,
        explanation: "O rodízio sistemático dos locais de aplicação de insulina previne o surgimento de lipodistrofia (alteração do tecido adiposo)."
    },
    {
        question: "O teste de glicemia capilar indicou a leitura 'HI' no visor do glicosímetro. Isso significa que:",
        options: [
            "A glicemia está extremamente baixa (hipoglicemia severa)",
            "O aparelho está sem bateria",
            "A glicemia está acima do limite superior mensurável pelo aparelho",
            "A quantidade de sangue foi insuficiente",
            "A fita reativa está fora do prazo"
        ],
        answer: 2,
        explanation: "A mensagem 'HI' (High) indica que os níveis de glicose no sangue ultrapassaram o limite máximo de leitura do glicosímetro."
    },
    {
        question: "Qual o correto descarte de lancetas e agulhas utilizadas nos procedimentos?",
        options: [
            "Saco de lixo infectante (branco)",
            "Saco de lixo comum (preto)",
            "Caixa rígida para perfurocortantes (Descarpack)",
            "Lixo reciclável",
            "Encaminhar para lavagem e esterilização"
        ],
        answer: 2,
        explanation: "Materiais perfurocortantes devem ser descartados imediatamente após o uso em recipientes rígidos e resistentes a perfurações."
    },
    {
        question: "A regra dos 'certos' na administração de medicamentos visa garantir a segurança. Qual opção NÃO faz parte dos certos tradicionais?",
        options: [
            "Paciente certo",
            "Medicamento certo",
            "Via certa",
            "Cor favorita do paciente certa",
            "Dose certa"
        ],
        answer: 3,
        explanation: "A cor favorita do paciente não tem relevância clínica para os certos da administração segura de medicamentos."
    },
    {
        question: "Na via intramuscular, o volume máximo recomendado para aplicação no músculo deltoide em um adulto jovem é de:",
        options: [
            "1 a 2 ml",
            "5 ml",
            "7 ml",
            "10 ml",
            "0,1 ml"
        ],
        answer: 0,
        explanation: "O músculo deltoide é pequeno e suporta volumes menores, sendo recomendado o limite de 1 a 2 ml."
    },
    {
        question: "Ao mensurar a temperatura axilar com termômetro clínico digital, o tempo médio de permanência e o valor de febre (piraxia) consideram-se a partir de:",
        options: [
            "35,0 °C",
            "36,5 °C",
            "37,8 °C",
            "42,0 °C",
            "32,0 °C"
        ],
        answer: 2,
        explanation: "Geralmente, considera-se estado febril/febre a temperatura axilar igual ou superior a 37,8 °C."
    },
    {
        question: "A complicações como flebite, extravasamento e infiltração estão associadas a qual via de administração?",
        options: [
            "Via Oral",
            "Via Intramuscular",
            "Via Endovenosa",
            "Via Subcutânea",
            "Via Tópica"
        ],
        answer: 2,
        explanation: "Flebite (inflamação da veia) e infiltração são complicações locais típicas da terapia intravenosa/endovenosa."
    },
    {
        question: "A lavagem/higienização das mãos deve ser realizada obrigatoriamente:",
        options: [
            "Apenas no final do plantão",
            "Antes e após o contato com o paciente e procedimentos limpos/assépticos",
            "Somente quando as mãos estiverem visivelmente sujas",
            "Apenas antes de almoçar",
            "Somente quando solicitado pelo enfermeiro"
        ],
        answer: 1,
        explanation: "Os 5 momentos da higienização das mãos da OMS incluem antes e depois do contato com o paciente e da realização de procedimentos."
    },
    {
        question: "Durante a aplicação intramuscular na região glútea dorsoglútea, para evitar atingir o nervo ciático, divide-se o glúteo em 4 quadrantes e aplica-se no:",
        options: [
            "Quadrante superior interno",
            "Quadrante inferior interno",
            "Quadrante superior externo",
            "Quadrante inferior externo",
            "Centro exato do glúteo"
        ],
        answer: 2,
        explanation: "A aplicação deve ser no quadrante superior externo para manter margem de segurança do nervo ciático e vasos sanguíneos."
    },
    {
        question: "Ao identificar um paciente com bradicardia, o técnico de enfermagem constatou uma frequência cardíaca de:",
        options: [
            "120 bpm",
            "80 bpm",
            "45 bpm",
            "100 bpm",
            "150 bpm"
        ],
        answer: 2,
        explanation: "Bradicardia é definida como a frequência cardíaca abaixo dos valores normais (< 60 bpm no adulto)."
    },
    {
        question: "As fitas de glicemia capilar exigem cuidados de conservação específicos. Qual das atitudes abaixo é INCORRETA?",
        options: [
            "Guardar as fitas no frasco original bem fechado",
            "Proteger o frasco contra umidade e luz solar direta",
            "Deixar o frasco aberto em cima da bancada",
            "Verificar a validade antes do uso",
            "Utilizar o código de calibração se necessário"
        ],
        answer: 2,
        explanation: "Manter o frasco de fitas aberto expõe os reagentes à umidade e ao ar, deteriorando o material e alterando os resultados."
    },
    {
        question: "Qual o ângulo correto de inserção do cateter venoso periférico tipo Jelco/Abdocath na pele durante a punção venosa?",
        options: [
            "15 a 30 graus",
            "90 graus",
            "60 graus",
            "0 graus (totalmente plano)",
            "45 a 70 graus"
        ],
        answer: 0,
        explanation: "A introdução do cateter venoso periférico deve ser feita em um ângulo raso de 15° a 30°, com o bisel voltado para cima."
    },
    {
        question: "O uso de luvas de procedimento substitui a higienização das mãos?",
        options: [
            "Sim, sempre",
            "Não, as mãos devem ser higienizadas antes do calçamento e após a retirada das luvas",
            "Sim, desde que a luva seja estéril",
            "Apenas se o paciente estiver em isolamento",
            "Sim, se trocar de luva a cada 4 horas"
        ],
        answer: 1,
        explanation: "As luvas funcionam como barreira de proteção, mas não garantem estanqueidade total e podem conter microporos. A higienização das mãos é indispensável."
    },
    {
        question: "Um paciente em uso de medicação anticoagulante realiza glicemia capilar. O técnico deve ter atenção redobrada a qual cuidado após a punção?",
        options: [
            "Pressionar o local por um tempo prolongado até a hemostasia",
            "Fazer fricção forte na ponta do dedo",
            "Lavar o dedo com água quente",
            "Aplicar álcool gel sobre a ferida aberta",
            "Não fazer nada e liberar o paciente imediatamente"
        ],
        answer: 0,
        explanation: "Pacientes anticoagulados têm maior tempo de sangramento, exigindo compressão suave e prolongada no ponto de punção."
    },
    {
        question: "Em caso de suspeita de extravasamento de medicação vesicante durante infusão endovenosa, a primeira conduta da enfermagem é:",
        options: [
            "Aumentar a velocidade da infusão",
            "Interromper imediatamente a infusão",
            "Aplicar compressa quente sem parar a bomba",
            "Administrar um analgésico por via oral",
            "Aguardar a medicação terminar"
        ],
        answer: 1,
        explanation: "A primeira ação imediata é parar a infusão para interromper a saída da droga vesicante no tecido subcutâneo."
    },
    {
        question: "O oxímetro de pulso é um equipamento utilizado para mensurar:",
        options: [
            "A taxa de glicose",
            "A saturação periférica de oxigênio (SpO2) e a frequência de pulso",
            "A pressão arterial média",
            "O nível de consciência",
            "A temperatura corporal interna"
        ],
        answer: 1,
        explanation: "O oxímetro de pulso mede de forma não invasiva a porcentagem de oxigênio ligada à hemoglobina (SpO2) e os batimentos cardíacos."
    },
    {
        question: "A via subcutânea é muito empregada para a administração de quais fármacos?",
        options: [
            "Insulinas e Heparinas de baixo peso molecular",
            "Antibióticos de largo espectro em dose única",
            "Contrastes radiológicos",
            "Anestésicos gerais",
            "Soluções hiperatónicas concentradas"
        ],
        answer: 0,
        explanation: "Insulinas e heparinas (como enoxaparina) são clássicas medicações de uso por via subcutânea devido à sua absorção gradual e contínua."
    },
    {
        question: "Na técnica de aspiração de medicação de uma ampola de vidro, para evitar contaminação por partículas de vidro e contaminação microbiana, deve-se:",
        options: [
            "Usar gaze para proteger os dedos ao quebrar o gargalo da ampola",
            "Lavar a ampola em água corrente com sabão após aberta",
            "Tocar a agulha na parte externa da ampola",
            "Soprar dentro da ampola para tirar a poeira",
            "Reutilizar a mesma seringa de outro paciente"
        ],
        answer: 0,
        explanation: "A quebra do gargalo deve ser realizada com proteção (gaze ou protetor) para evitar cortes no profissional e projeção de cacos de vidro."
    },
    {
        question: "A anotação de enfermagem referente a um procedimento deve ser realizada:",
        options: [
            "Antes de executar o procedimento",
            "Imediatamente após a execução do procedimento",
            "No dia seguinte",
            "Apenas se o procedimento der errado",
            "Raramente, apenas em cirurgias"
        ],
        answer: 1,
        explanation: "O registro deve ser feito logo após a realização do cuidado para garantir a precisão das informações e a continuidade da assistência."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

// Elementos do DOM
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const progressBar = document.getElementById('progress-bar');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');

const percentageText = document.getElementById('percentage-text');
const resultSummary = document.getElementById('result-summary');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    updateHeader();
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    updateHeader();
}

function resetState() {
    selectedOptionIndex = null;
    nextBtn.classList.add('hidden');
    explanationContainer.classList.add('hidden');
    optionsContainer.innerHTML = '';
}

function selectOption(index) {
    if (selectedOptionIndex !== null) return; // Impede alterar a resposta
    
    selectedOptionIndex = index;
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = optionsContainer.children;

    if (index === currentQuestion.answer) {
        score++;
        optionButtons[index].classList.add('correct');
    } else {
        optionButtons[index].classList.add('incorrect');
        optionButtons[currentQuestion.answer].classList.add('correct');
    }

    // Desabilita todos os botões
    Array.from(optionButtons).forEach(btn => btn.style.pointerEvents = 'none');

    // Mostra explicação
    explanationText.textContent = currentQuestion.explanation;
    explanationContainer.classList.remove('hidden');
    
    // Mostra botão de próxima
    nextBtn.classList.remove('hidden');
    
    updateHeader();
}

function updateHeader() {
    questionCounter.textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
    scoreCounter.textContent = `Pontos: ${score}`;
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const percentage = Math.round((score / questions.length) * 100);
    percentageText.textContent = `${percentage}%`;
    resultSummary.textContent = `Você acertou ${score} de ${questions.length} questões.`;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startQuiz();
}
