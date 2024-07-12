const questions = document.querySelectorAll('.question');

questions.forEach(q => {
    q.addEventListener('click',() => {
        if (q.innerHTML.includes('hidden')){
            q.innerHTML = q.innerHTML.replace('hidden','');
            q.classList.add('active')
        }

        else {
            q.innerHTML = q.innerHTML.replace('=""=""',"hidden");
            q.classList.remove('active')
        }
    })
})

