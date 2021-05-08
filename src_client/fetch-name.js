export default function fetchName() {
    const nameField = document.querySelector('#username');

    if (nameField) {
        function cropName() {
            const userName = (target) => {
                const regex = /\s+/;
                let regexName = target.value.replace(regex, '');
                return regexName;
            };
            const hiddenInput = document.querySelector('#cropped');
            hiddenInput.value = userName(nameField);
        }

        nameField.addEventListener('blur', cropName, false);
    }
}
