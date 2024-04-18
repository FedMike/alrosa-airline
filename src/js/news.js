document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll("input[type='date']")

    inputs.forEach(function (input) {
        input.addEventListener('change', function () {
            const placeholder = input.nextElementSibling

            if (input.value) {
                placeholder.classList.add('hidden')
            } else {
                placeholder.classList.remove('hidden')
            }
        })
    })
})
