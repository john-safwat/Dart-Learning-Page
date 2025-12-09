// js/examples.js

document.addEventListener('DOMContentLoaded', () => {
    if (!window.siteData || !window.siteData.concepts) {
        console.error("Site data not loaded");
        return;
    }

    const concepts = window.siteData.concepts;
    renderExamplesPage(concepts);
});

function renderExamplesPage(concepts) {
    const root = document.getElementById('examples-root');
    if (!root) return;

    root.innerHTML = `
    <!-- TopNavBar -->
       <header class="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-7 py-3 backdrop-blur-sm">
        <div class="flex items-center justify-between w-full max-w-1xl py-3">
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
              <a class="text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary text-sm font-bold" href="examples.html">Code Examples</a>
              <a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium" href="quiz.html">Quizs</a>
            </nav>
          </div>
        </div>
      </header>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-10 bg-background-light dark:bg-background-dark">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-col gap-4 text-center mb-12">
                <h1 class="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                    Practical Dart Examples
                </h1>
                <p class="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Explore real-world scenarios and code snippets to solidify your understanding of Dart concepts.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-10">
                ${concepts.map((concept, index) => renderExampleCard(concept)).join('')}
            </div>
        </div>
    </main>
    `;
}

function renderExampleCard(concept) {
    return `
    <div class="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-background-dark p-6 shadow-lg">
        <div class="flex flex-col gap-2 border-b border-gray-100 dark:border-white/10 pb-4">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">code_blocks</span>
                ${concept.title}
            </h2>
            <p class="text-gray-600 dark:text-slate-400 text-sm">
                ${concept.description.split('</br>')[0]} <!-- Show first part of description -->
            </p>
        </div>

        <!-- Code Block Component -->
        <div class="rounded-lg bg-[#0a141a] mt-2 border border-white/5 shadow-inner">
            <div class="flex items-center justify-between rounded-t-lg bg-black/20 px-4 py-2 border-b border-white/5">
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-red-500"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500"></span>
                    <p class="text-xs text-slate-500 ml-2 font-mono">example.dart</p>
                </div>
                <button onclick="copyCode(this)" data-code="${concept.codeExample.replace(/"/g, '&quot;')}" class="flex items-center gap-2 rounded px-2 py-1 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
                    <span class="material-symbols-outlined" style="font-size: 14px;">content_copy</span>
                    Copy
                </button>
            </div>
            <pre class="overflow-x-auto p-5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"><code class="text-sm font-mono text-gray-300 leading-relaxed">${concept.codeExample}</code></pre>
        </div>
    </div>
    `;
}

// Global Copy Function (Replicated from lessons.js for independence)
window.copyCode = function(button) {
    let codeToCopy = button.getAttribute('data-code');
    if (!codeToCopy) {
        const pre = button.parentElement.nextElementSibling;
        if (pre) codeToCopy = pre.innerText;
    }

    if (codeToCopy) {
        navigator.clipboard.writeText(codeToCopy).then(() => {
            showToast("Code Copied Successfully!");
        }).catch(err => {
            console.error('Failed to copy: ', err);
            showToast("Failed to copy code", true);
        });
    }
};

// Toast Function (Replicated from lessons.js)
window.showToast = function(message, isError = false) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification ${isError ? 'error' : 'success'}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    void toast.offsetWidth;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
