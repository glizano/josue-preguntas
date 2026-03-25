let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let isAnswerChecked = false;
let incorrectAnswers = [];
let currentQuizData = [];

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const explanationBox = document.getElementById('explanation-box');
const verseRef = document.getElementById('verse-ref');
const verseText = document.getElementById('verse-text');

function startQuiz(amount) {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Aleatorizar y tomar la cantidad elegida
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    
    if (amount === 'all') {
        currentQuizData = shuffled;
    } else {
        currentQuizData = shuffled.slice(0, amount);
    }

    loadQuestion();
}

function loadQuestion() {
    const data = currentQuizData[currentQuestion];
    selectedOption = null;
    isAnswerChecked = false;

    // Ocultar explicación anterior
    explanationBox.classList.add('hidden');

    // Actualizar UI general
    questionCounter.innerText = `Pregunta ${currentQuestion + 1} de ${currentQuizData.length}`;
    progressBar.style.width = `${((currentQuestion + 1) / currentQuizData.length) * 100}%`;

    // Cargar texto de pregunta
    questionText.innerHTML = `<span class="text-blue-500 text-sm font-semibold uppercase tracking-wider block mb-2">Capítulo ${data.chapter}</span> ${data.question}`;

    // Cargar opciones
    optionsContainer.innerHTML = '';
    data.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-400 bg-white font-medium text-gray-700 option-btn';
        btn.innerText = option;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });

    // Resetear botón Siguiente
    nextBtn.innerText = 'Comprobar Respuesta';
    nextBtn.className = 'bg-gray-300 text-gray-500 font-bold py-2 px-6 rounded-lg cursor-not-allowed transition duration-300';
    nextBtn.disabled = true;
}

function selectOption(index, btnElement) {
    if (isAnswerChecked) return; // No dejar cambiar si ya comprobó

    selectedOption = index;

    // Remover selección previa
    const allOptions = optionsContainer.children;
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.remove('option-selected');
        allOptions[i].classList.add('border-gray-200');
    }

    // Añadir estilo al seleccionado
    btnElement.classList.add('option-selected');

    // Activar botón Comprobar
    nextBtn.disabled = false;
    nextBtn.className = 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105';
}

function checkAnswer() {
    if (selectedOption === null) return;

    const data = currentQuizData[currentQuestion];
    const allOptions = optionsContainer.children;

    if (!isAnswerChecked) {
        // Modo: Comprobar respuesta
        isAnswerChecked = true;

        // Deshabilitar botones de opciones
        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].disabled = true;
        }

        if (selectedOption === data.correct) {
            // Correcto
            allOptions[selectedOption].classList.add('option-correct');
            score++;
            scoreCounter.innerText = `Puntaje: ${score}`;
        } else {
            // Incorrecto
            allOptions[selectedOption].classList.add('option-incorrect');
            allOptions[data.correct].classList.add('option-correct');

            // Guardar para revisión
            incorrectAnswers.push({
                cap: data.chapter,
                q: data.question,
                correct: data.options[data.correct],
                ref: data.verseRef
            });
        }

        // Mostrar versículo de justificación
        verseRef.innerText = data.verseRef;
        verseText.innerText = `"${data.verseText}"`;
        explanationBox.classList.remove('hidden');

        // Cambiar botón a Siguiente Pregunta
        if (currentQuestion === currentQuizData.length - 1) {
            nextBtn.innerText = 'Ver Resultados';
            nextBtn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300';
        } else {
            nextBtn.innerText = 'Siguiente Pregunta';
            nextBtn.className = 'bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300';
        }
    } else {
        // Modo: Pasar a siguiente
        currentQuestion++;
        if (currentQuestion < currentQuizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const finalScore = document.getElementById('final-score');
    finalScore.innerText = `${score} / ${currentQuizData.length}`;

    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');

    let percentage = (score / currentQuizData.length) * 100;

    if (percentage === 100) {
        resultMessage.innerText = "¡Perfecto! Tienes un conocimiento excepcional de las Escrituras.";
        resultIcon.innerHTML = '<svg class="w-24 h-24 mx-auto text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clip-rule="evenodd"></path></svg>';
    } else if (percentage >= 70) {
        resultMessage.innerText = "¡Muy buen trabajo! Has aprendido bastante de estos capítulos.";
        resultIcon.innerHTML = '<svg class="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>';
    } else {
        resultMessage.innerText = "¡Sigue practicando! Utiliza las referencias bíblicas para repasar.";
        resultIcon.innerHTML = '<svg class="w-24 h-24 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
    }

    // Llenar resumen de incorrectas
    const reviewContainer = document.getElementById('review-container');
    const incorrectList = document.getElementById('incorrect-list');

    if (incorrectAnswers.length > 0) {
        reviewContainer.style.display = 'block';
        incorrectList.innerHTML = '';
        incorrectAnswers.forEach(item => {
            const li = document.createElement('li');
            li.className = "bg-white p-3 rounded shadow-sm border border-gray-100";
            li.innerHTML = `
                <p class="font-medium text-gray-800 mb-1">${item.q}</p>
                <p class="text-green-600 font-semibold text-sm mb-1">✓ ${item.correct}</p>
                <p class="text-xs text-indigo-500 mt-2 bg-indigo-50 inline-block px-2 py-1 rounded">Ref: ${item.ref}</p>
            `;
            incorrectList.appendChild(li);
        });
    } else {
        reviewContainer.style.display = 'none';
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    scoreCounter.innerText = `Puntaje: 0`;
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}
