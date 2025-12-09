// js/lessons.js

document.addEventListener('DOMContentLoaded', () => {
    if (!window.siteData || !window.siteData.concepts) {
        console.error("Site data not loaded");
        return;
    }

    const concepts = window.siteData.concepts;
    // Default to first concept if none selected
    let currentConceptIndex = 0;

    renderLessonsPage(concepts, currentConceptIndex);
});

function renderLessonsPage(concepts, activeIndex) {
    const root = document.getElementById('lessons-root');
    if (!root) return;

    const activeConcept = concepts[activeIndex];

    // Escape code for safe passing to function
    const escapedCode = activeConcept.codeExample.replace(/`/g, '\\`').replace(/\${/g, '\\${');

    root.innerHTML = `
    <!-- TopNavBar -->
       <header class="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-7 py-3 backdrop-blur-sm">
        <div
          class="flex items-center justify-between w-full max-w-1xl py-3"
        >
          <div class="flex items-center gap-2 text-gray-800 dark:text-white">
            <div class="h-8 w-8 text-primary">
              <img
                src="assets/images/dart-svgrepo-com.svg"
                alt="Dart icon"
                class="h-6 w-6"
              />
            </div>
            <h2 class="text-gray-800 dark:text-white text-lg font-bold">
              Dart From Zero to Hero
            </h2>
          </div>
          <div class="flex items-center gap-2">
            <nav class="hidden md:flex items-center gap-9">
            <a
                class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="index.html"
                >Home</a
              >
              <a
                class="text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary text-sm font-bold"
                href="lessons.html"
                >Learn Dart</a
              >
              <a
                class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="examples.html"
                >Code Examples</a
              >
              <a
                class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                href="quiz.html"
                >Quizs</a
              >
            </nav>
          </div>
        </div>
      </header>

    <div class="flex h-full grow">
        <!-- SideNavBar -->
        <aside class="flex sticky top-20 h-full min-h-[calc(100vh-68px)] w-72 flex-col justify-between border-r border-solid border-white/10 bg-background-dark p-4">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    ${concepts.map((concept, index) => {
                        const isActive = index === activeIndex;
                        const activeClass = isActive ? "bg-primary/20 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white";
                        const iconColor = isActive ? "text-primary" : "text-slate-400";
                        const iconFill = isActive ? "font-variation-settings: 'FILL' 1;" : "";
                        
                        // Simple icon mapping based on ID or index
                        const icons = ['info', 'data_object', 'keyboard', 'calculate', 'account_tree', 'sync', 'terminal'];
                        const icon = icons[index % icons.length];

                        return `
                        <button onclick="handleConceptClick(${index})" class="flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors ${activeClass}">
                            <span class="material-symbols-outlined ${iconColor}" style="font-size: 24px; ${iconFill}">${icon}</span>
                            <p class="text-sm font-medium leading-normal text-left">${concept.title}</p>
                        </button>
                        `;
                    }).join('')}
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto p-10">
            <div class="mx-auto max-w-4xl">
                <!-- PageHeading -->
                <div class="flex flex-wrap justify-between gap-3 pb-8">
                    <div class="flex min-w-72 flex-col gap-3">
                        <p class="text-4xl font-black leading-tight tracking-[-0.033em] text-white">${activeConcept.title}</p>
                        <p class="font-normal leading-normal text-slate-400">
                           ${activeConcept.description}
                        </p>
                    </div>
                </div>

                <!-- Code Block Component -->
                <div class="rounded-lg bg-[#0a141a] mt-5">
                    <div class="flex items-center justify-between rounded-t-lg bg-black/20 px-4 py-2">
                        <p class="text-sm text-slate-400">main.dart</p>
                        <!-- Using a data attribute to store code to avoid complex escaping issues in onclick -->
                        <button onclick="copyCode(this)" data-code="${activeConcept.codeExample.replace(/"/g, '&quot;')}" class="flex items-center gap-2 rounded px-2 py-1 text-sm text-slate-300 transition-colors hover:bg-white/10">
                            <span class="material-symbols-outlined" style="font-size: 16px;">content_copy</span>
                            Copy Code
                        </button>
                    </div>
                    <pre class="overflow-x-auto p-4"><code class="text-sm font-mono text-white">${activeConcept.codeExample}</code></pre>
                </div>

                <!-- Navigation Buttons -->
                <div class="mt-12 flex justify-between border-t border-solid border-white/10 pt-6">
                    <button ${activeIndex === 0 ? 'disabled style="opacity:0.5; pointer-events:none;"' : `onclick="handleConceptClick(${activeIndex - 1})"`} class="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
                        <span class="material-symbols-outlined">arrow_back</span>
                        Previous Lesson
                    </button>
                    <button ${activeIndex === concepts.length - 1 ? 'disabled style="opacity:0.5; pointer-events:none;"' : `onclick="handleConceptClick(${activeIndex + 1})"`} class="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                        Next Lesson
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </main>
    </div>
    `;
}

// Global handler for click events
window.handleConceptClick = function(index) {
    const concepts = window.siteData.concepts;
    if (index >= 0 && index < concepts.length) {
        renderLessonsPage(concepts, index);
    }
}

// Global Copy Function
window.copyCode = function(button) {
    // Get code from data attribute logic or traverse DOM as fallback
    let codeToCopy = button.getAttribute('data-code');
    if (!codeToCopy) {
        // Fallback to grabbing from pre tag
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

// Toast Function
window.showToast = function(message, isError = false) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification ${isError ? 'error' : 'success'}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Trigger reflow for animation
    void toast.offsetWidth;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // Wait for fade out
    }, 3000);
}
