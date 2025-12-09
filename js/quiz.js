// js/quiz.js

document.addEventListener('DOMContentLoaded', () => {
    if (!window.siteData || !window.siteData.concepts) {
        console.error("Site data not loaded");
        return;
    }

    const concepts = window.siteData.concepts;
    renderQuizPage(concepts);
});

function renderQuizPage(concepts) {
    const root = document.getElementById('quiz-root');
    if (!root) return;

    root.innerHTML = `
    <!-- TopNavBar -->
       <header class="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-7 py-3 backdrop-blur-sm">
        <div class="flex items-center justify-between w-full max-w-1xl py-3" >
          <div class="flex items-center gap-2 text-gray-800 dark:text-white">
            <div class="h-8 w-8 text-primary">
              <img src="assets/images/dart-svgrepo-com.svg" alt="Dart icon" class="h-6 w-6" />
            </div>
            <h2 class="text-gray-800 dark:text-white text-lg font-bold">
              Dart From Zero to Hero
            </h2>
          </div>
          <div class="flex items-center gap-2">
            <nav class="hidden md:flex items-center gap-9">
             <a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium" href="index.html">Home</a>
              <a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium" href="lessons.html">Learn Dart</a>
              <a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium" href="examples.html">Code Examples</a>
              <a class="text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary text-sm font-bold" href="quiz.html">Quizs</a>
            </nav>
          </div>
        </div>
      </header>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-10 bg-background-light dark:bg-background-dark min-h-screen">
        <div class="mx-auto max-w-4xl">
            <div class="flex flex-col gap-4 text-center mb-12">
                <h1 class="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                    Test Your Knowledge
                </h1>
                <p class="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Challenge yourself with these questions to verify your understanding of Dart concepts.
                </p>
            </div>

            <form id="quiz-form">
                ${concepts.map((concept, cIndex) => renderConceptQuiz(concept, cIndex)).join('')}
            </form>

            <div class="flex flex-col items-center mt-12 mb-20 gap-6 w-full">
                <button id="submit-quiz-btn" onclick="calculateScore()" class="flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                    <span class="material-symbols-outlined">check_circle</span>
                    Submit Answers
                </button>

                <!-- Results Section (Hidden initially) -->
                <div id="results-panel" class="hidden w-full rounded-2xl bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 p-8 shadow-2xl text-center">
                    <div class="mb-4 flex justify-center">
                        <div class="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
                            <span class="material-symbols-outlined text-4xl text-green-600 dark:text-green-400">emoji_events</span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Completed!</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">You scored <span id="score-value" class="font-black text-primary text-2xl">0</span> out of <span id="total-value" class="font-bold">0</span></p>
                    
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="text-primary hover:text-primary/80 font-medium hover:underline">
                        Review Answers
                    </button>
                </div>
            </div>
        </div>
    </main>
    `;
}

function renderConceptQuiz(concept, cIndex) {
    return `
    <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-orange pl-4">
            ${concept.title}
        </h3>
        
        <div class="flex flex-col gap-6">
            ${concept.quiz.map((q, qIndex) => `
                <div id="card_${cIndex}_${qIndex}" class="question-card rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1b23] p-6 shadow-sm transition-all hover:shadow-md">
                    <div class="flex items-center justify-between mb-4">
                        <p class="text-lg font-medium text-gray-800 dark:text-white">
                            <span class="text-slate-400 mr-2">${qIndex + 1}.</span>${q.question}
                        </p>
                        <!-- Status Icon Placeholder -->
                        <span id="status_${cIndex}_${qIndex}" class="material-symbols-outlined hidden text-2xl"></span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        ${q.options.map((opt, optIndex) => `
                            <label id="label_${cIndex}_${qIndex}_${optIndex}" class="relative flex cursor-pointer items-center rounded-lg border border-gray-200 dark:border-white/10 p-4 transition-all hover:bg-gray-50 dark:hover:bg-white/5 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-1 has-[:checked]:ring-primary">
                                <input type="radio" name="q_${cIndex}_${qIndex}" value="${optIndex}" class="peer h-4 w-4 border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700">
                                <span class="ml-3 text-gray-700 dark:text-gray-300 font-medium">${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    `;
}

// Attach to window for onclick access
window.calculateScore = function() {
    const concepts = window.siteData.concepts;
    let score = 0;
    let totalQuestions = 0;

    concepts.forEach((concept, cIndex) => {
        concept.quiz.forEach((q, qIndex) => {
            totalQuestions++;
            const groupName = `q_${cIndex}_${qIndex}`;
            const cardId = `card_${cIndex}_${qIndex}`;
            const statusId = `status_${cIndex}_${qIndex}`;
            
            const selected = document.querySelector(`input[name="${groupName}"]:checked`);
            const card = document.getElementById(cardId);
            const statusIcon = document.getElementById(statusId);
            
            // Reset styles
            card.className = "question-card rounded-xl border p-6 shadow-sm transition-all bg-white dark:bg-[#0f1b23] border-gray-200 dark:border-white/10";
            statusIcon.classList.add('hidden');
            
            // Highlight Correct Answer (Always show which one was right)
            const correctLabel = document.getElementById(`label_${cIndex}_${qIndex}_${q.answer}`);
            if (correctLabel) {
                // We add a specific 'correct-answer' style logic later or now
                // For now, only show green if user selected it or if we want to reveal answers
            }

            if (selected) {
                const selectedVal = parseInt(selected.value);
                const selectedLabel = document.getElementById(`label_${cIndex}_${qIndex}_${selectedVal}`);

                if (selectedVal === q.answer) {
                    // Correct
                    score++;
                    card.classList.remove('border-gray-200', 'dark:border-white/10');
                    card.classList.add('border-green-500', 'dark:border-green-500', 'bg-green-50', 'dark:bg-green-900/10');
                    
                    statusIcon.textContent = "check_circle";
                    statusIcon.className = "material-symbols-outlined text-green-500 text-2xl block";
                    
                    selectedLabel.classList.add('bg-green-100', 'border-green-500', 'dark:bg-green-900/30', 'dark:border-green-400');
                } else {
                    // Incorrect
                    card.classList.remove('border-gray-200', 'dark:border-white/10');
                    card.classList.add('border-red-500', 'dark:border-red-500', 'bg-red-50', 'dark:bg-red-900/10');
                    
                    statusIcon.textContent = "cancel";
                    statusIcon.className = "material-symbols-outlined text-red-500 text-2xl block";
                    
                    selectedLabel.classList.add('bg-red-100', 'border-red-500', 'dark:bg-red-900/30', 'dark:border-red-400');
                    
                    // Show correct answer
                    if(correctLabel) {
                         correctLabel.classList.add('bg-green-100', 'border-green-500', 'dark:bg-green-900/30', 'dark:border-green-400');
                    }
                }
            } else {
                 // No answer selected - Mark as unanswered/wrong
                 card.classList.add('border-orange-300', 'dark:border-orange-500/50');
            }
        });
    });

    // Display Results
    const resultsPanel = document.getElementById('results-panel');
    const scoreVal = document.getElementById('score-value');
    const totalVal = document.getElementById('total-value');
    const submitBtn = document.getElementById('submit-quiz-btn');
    
    if (resultsPanel && scoreVal && totalVal) {
        scoreVal.textContent = score;
        totalVal.textContent = totalQuestions;
        resultsPanel.classList.remove('hidden');
        submitBtn.classList.add('hidden'); // Hide submit button after submission
        
        // Scroll to results
        resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
