// 4.1 Data Access
// Removed async fetch to support "direct load" via siteData.js
function getData() {
    if (window.siteData) {
        return window.siteData;
    } else {
        console.error("siteData not loaded!");
        return null;
    }
}

// 4.3 Implementing the Syntax Highlighter
function formatCode(codeString) {
    // Simple regex to wrap keywords in span tags
    return codeString
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\b(void|import|String|int|double|bool|print|if|else|for|while|return|var|final|const|true|false|null|main|stdin)\b/g, '<span class="keyword">$1</span>')
        .replace(/'(.*?)'/g, '<span class="string">\'$1\'</span>')
        .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
}

// 4.2 Dynamic Rendering & Page Initialization
document.addEventListener('DOMContentLoaded', () => {
    const data = getData();
    if (!data) return;

    // 1. Landing Page Logic (Handled by landing.js usually, but if elements exist here...)
    const visionText = document.getElementById('vision-text');
    if (visionText) {
        visionText.textContent = data.siteInfo.vision;
        const devText = document.getElementById('developer-text');
        if (devText) devText.textContent = data.siteInfo.developer;
    }

    // 2. Lessons Page Logic
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        renderLessons(data.concepts);
    }

    // 3. Examples Page Logic
    const examplesContainer = document.getElementById('examples-container');
    if (examplesContainer) {
        renderExamples(data.concepts);
    }
});

function renderLessons(concepts) {
    const sidebarList = document.getElementById('concept-list');
    const contentArea = document.getElementById('content-area');

    // Generate Sidebar Buttons
    concepts.forEach(concept => {
        const btn = document.createElement('button');
        btn.textContent = concept.title;
        btn.onclick = () => {
            // Remove active class from all
            Array.from(sidebarList.children).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Render Content
            contentArea.innerHTML = `
                <h2 id="lesson-title">${concept.title}</h2>
                <p id="lesson-description">${concept.description}</p>
                <h3>Example:</h3>
                <div class="code-container">${formatCode(concept.codeExample)}</div>
            `;
        };
        sidebarList.appendChild(btn);
    });
}

function renderExamples(concepts) {
    const container = document.getElementById('examples-container');
    
    concepts.forEach(concept => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${concept.title} - Solved Example</h3>
            <div class="code-container">${formatCode(concept.codeExample)}</div>
        `;
        container.appendChild(article);
    });
}
