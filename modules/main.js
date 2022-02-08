const button = document.querySelector('#toggler')

async function toggle() {
    // import module for side effects
    await import('./types').then(console.log).catch(e => {
        console.error('Error', e)
    });
}

button.addEventListener('click', toggle)