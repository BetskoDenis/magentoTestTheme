const signIn = document.querySelector('.authorization-link a');
document.querySelector('.header.links li:last-child a').classList.add('custom-create-class');

const formLogin = document.querySelector('.login-container');
const createAccount = document.querySelector('.custom-create-class');
const formCreateAccount = document.querySelector('.form-create-account');
const buttonCreateAccount = document.querySelector('.action.create.primary');

function showModal (block, title, customModalClass){

    require(
        [
            'jquery',
            'Magento_Ui/js/modal/modal'
        ],
        function(
            $,
            modal
        ) {
            let options = {
                type: 'popup',
                responsive: true,
                innerScroll: true,
                title: title,
                modalVisibleClass: `_show ${customModalClass}`,
                buttons: [{
                    text: $.mage.__('Close'),
                    class: '',
                    click: function () {
                        this.closeModal();
                    }

                }]
            };

            let popup = modal(options, $(formLogin));
            let popupqq = modal(options, $(formCreateAccount));

            $(block).modal('openModal');

        }
    );
}

createAccount.addEventListener('click', (event) => {
    event.preventDefault();

showModal(formCreateAccount, 'Create New Customer Account', 'customCreateClass');
});

signIn.addEventListener('click', (event) =>{
    event.preventDefault();
    showModal(formLogin, 'Customer Login', 'customLoginClass' );
});
buttonCreateAccount.addEventListener('click', (event) =>{
    event.preventDefault();
    document.querySelectorAll('.customLoginClass').forEach(function(item){
        item.classList.remove('_show')
    })
    showModal(formCreateAccount, 'Create New Customer Account');
});



