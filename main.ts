document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    const rewardStore = document.querySelector('.products-grid') as HTMLElement;

    const toggleContent = (showRewardStore: boolean) => {
        if (showRewardStore) {
            if (mainContent) mainContent.style.display = 'none';
            if (rewardStore) rewardStore.style.display = 'grid';
        } else {
            if (mainContent) mainContent.style.display = 'flex';
            if (rewardStore) rewardStore.style.display = 'none';
        }
    };

    toggleContent(false);

    const steamVisionBtn = document.querySelector('.nav-logo') as HTMLElement;
    if (steamVisionBtn) {
        steamVisionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    const rewardsLink = document.getElementById('rewardsLink');
    if (rewardsLink) {
        rewardsLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'rewardstore.html';
        });
    }

    const tasksLink = document.getElementById('tasksLink');
    if (tasksLink) {
        tasksLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'tasks.html';
        });
    }

    const hackathonsLink = document.getElementById('hackathonsLink');
    if (hackathonsLink) {
        hackathonsLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'hackathons.html';
        });
    }
});