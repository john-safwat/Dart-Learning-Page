// js/quiz.js

document.addEventListener('DOMContentLoaded', () => {
    const data = window.siteData;

    if (!data) {
        console.error("siteData not loaded!");
        return;
    }

    renderQuiz(data.concepts);
});

function renderQuiz(concepts) {
    const form = document.getElementById('quiz-form');
    if (!form) return;
    
    let questionCount = 0;

    concepts.forEach((concept, conceptIndex) => {
        const conceptHeader = document.createElement('h3');
        conceptHeader.textContent = `Topic: ${concept.title}`;
        form.appendChild(conceptHeader);

        concept.quiz.forEach((q, qIndex) => {
            questionCount++;
            const qBlock = document.createElement('div');
            qBlock.className = 'question-block';
            
            const groupName = `q_${conceptIndex}_${qIndex}`;

            qBlock.innerHTML = `
                <p>${questionCount}. ${q.question}</p>
                <div class="options-group">
                    ${q.options.map((opt, optIndex) => `
                        <label>
                            <input type="radio" name="${groupName}" value="${optIndex}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
            form.appendChild(qBlock);
        });
    });

    const submitBtn = document.getElementById('submit-quiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            calculateScore(concepts);
        });
    }
}

function calculateScore(concepts) {
    let score = 0;
    let totalQuestions = 0;

    concepts.forEach((concept, conceptIndex) => {
        concept.quiz.forEach((q, qIndex) => {
            totalQuestions++;
            const groupName = `q_${conceptIndex}_${qIndex}`;
            const selected = document.querySelector(`input[name="${groupName}"]:checked`);
            
            if (selected && parseInt(selected.value) === q.answer) {
                score++;
            }
        });
    });

    const scoreDisplay = document.getElementById('score-display');
    const scoreValue = document.getElementById('score-value');
    
    if (scoreValue) scoreValue.textContent = score;
    if (scoreDisplay) {
        scoreDisplay.innerHTML = `<h3>Your Score: <span id="score-value">${score}</span>/${totalQuestions}</h3>`;
        scoreDisplay.classList.remove('hidden');
    }
    
    window.scrollTo(0, document.body.scrollHeight);
}
