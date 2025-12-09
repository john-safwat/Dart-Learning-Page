document.addEventListener('DOMContentLoaded', () => {
    // Assuming siteData.js is loaded before this script
    if (window.siteData && window.siteData.landingPage) {
        renderLandingPage(window.siteData.landingPage);
    } else {
        console.error("siteData not loaded or landingPage data missing");
    }
});

function renderLandingPage(content) {
    const main = document.getElementById('landing-main');
    if (!main) return;

    main.innerHTML = `
        <div class="flex justify-center px-4 py-5">
            <div class="flex flex-col w-full max-w-6xl">
                <!-- Hero Section -->
                <section class="w-full py-16 md:py-24 bg-primary text-white rounded-xl shadow-lg mb-8">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12">
                        <div class="flex flex-col gap-4 text-center md:text-left md:w-1/2">
                            <h1 class="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">
                                ${content.hero.title}
                            </h1>
                            <p class="max-w-2xl text-lg md:text-xl leading-relaxed">
                                ${content.hero.description}
                            </p>
                            <div class="mt-6">
                                <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent-orange text-white text-base font-bold hover:bg-accent-orange/90 transition-colors">
                                    <span class="truncate">${content.hero.ctaText}</span>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Activity Feed -->
                        <div class="md:w-1/2 bg-white/10 p-6 rounded-lg shadow-inner flex flex-col gap-4 h-[300px] overflow-hidden">
                            <h3 class="text-xl font-bold text-white flex items-center gap-2">
                                <span class="material-symbols-outlined text-accent-orange !text-2xl">forum</span>
                                Live Activity Feed
                            </h3>
                            <div class="flex flex-col gap-3 text-sm text-gray-200">
                                ${content.activityFeed.map(item => `
                                    <p class="flex items-center gap-2">
                                        <span class="material-symbols-outlined !text-base text-green-400">arrow_right_alt</span>
                                        <span>
                                            <span class="text-accent-orange font-medium">${item.user}</span> 
                                            ${item.action} 
                                            "${item.text}"
                                        </span>
                                    </p>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features/Modules Section -->
                <section class="w-full py-16 md:py-24 bg-gray-50 dark:bg-black/20 rounded-xl">
                    <div class="flex flex-col gap-12 px-4 md:px-6">
                        <div class="flex flex-col gap-4 text-center">
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                                Explore Our Collaborative Modules
                            </h2>
                            <p class="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 md:text-lg">
                                Dive into a supportive learning environment, engage with challenges, and connect with fellow Dart enthusiasts.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
                            ${content.features.map(feature => `
                                <div class="flex flex-col gap-4 rounded-lg border border-gray-200 dark:border-white/10 bg-background-dark dark:bg-background-dark p-6 shadow-md">
                                    <div class="${feature.iconColorClass}">
                                        <span class="material-symbols-outlined !text-4xl">${feature.icon}</span>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <h3 class="text-xl font-bold text-gray-900 dark:text-white">${feature.title}</h3>
                                        <p class="text-base text-gray-600 dark:text-gray-300">
                                            ${feature.description}
                                        </p>
                                    </div>
                                    <a href="${feature.link}" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors self-start">
                                        <span>${feature.buttonText}</span>
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <!-- Contact Section -->
                <section class="w-full py-16 md:py-24 bg-gray-50 dark:bg-black/20 rounded-xl">
                    <div class="flex flex-col gap-4 max-w-2xl mx-auto px-4">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-gray-900 dark:text-white">
                            ${content.contact.title}
                        </h2>
                        <p class="text-center max-w-xl mx-auto text-gray-600 dark:text-gray-300 md:text-lg">
                            ${content.contact.description}
                        </p>
                        <form class="flex flex-col gap-6 pt-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label class="flex flex-col flex-1">
                                    <p class="text-sm font-medium pb-2 text-gray-700 dark:text-gray-200">Your Name</p>
                                    <input class="form-input flex w-full min-w-0 flex-1 rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-sm" placeholder="Enter your name" type="text"/>
                                </label>
                                <label class="flex flex-col flex-1">
                                    <p class="text-sm font-medium pb-2 text-gray-700 dark:text-gray-200">Your Email</p>
                                    <input class="form-input flex w-full min-w-0 flex-1 rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-sm" placeholder="Enter your email address" type="email"/>
                                </label>
                            </div>
                            <label class="flex flex-col">
                                <p class="text-sm font-medium pb-2 text-gray-700 dark:text-gray-200">Message</p>
                                <textarea class="form-textarea flex w-full min-w-0 flex-1 resize-y rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 focus:border-primary placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-sm min-h-[120px]" placeholder="Enter your message"></textarea>
                            </label>
                            <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors self-start">
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    `;
}
