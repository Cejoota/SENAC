document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const cpfInput = document.getElementById('cpf');

    /**
     * Função para validar um número de CPF.
     * Implementa o cálculo do dígito verificador e rejeita sequências repetidas.
     * @param {string} cpf O número de CPF, podendo estar formatado.
     * @returns {boolean} Retorna true se o CPF for válido, false caso contrário.
     */
    function validarCPF(cpf) {
        // 1. Limpa a string, removendo caracteres não numéricos
        cpf = cpf.replace(/[^\d]+/g, '');

        // 2. Verifica se tem 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // 3. Rejeita CPFs com todos os dígitos iguais (ex: "11111111111")
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        // 4. Implementa a lógica de cálculo dos Dígitos Verificadores (DV)
        let soma = 0;
        let resto;
        let i;

        // Cálculo do primeiro DV
        for (i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.charAt(9))) {
            return false;
        }

        // Reinicia a soma para o cálculo do segundo DV
        soma = 0;
        for (i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.charAt(10))) {
            return false;
        }

        return true;
    }

    // Adiciona um ouvinte de evento ao formulário para interceptar o envio
    form.addEventListener('submit', function(event) {
        const cpf = cpfInput.value;

        if (!validarCPF(cpf)) {
            // Se o CPF for inválido:
            event.preventDefault(); // Impede o envio do formulário
            alert('❌ CPF Inválido! Por favor, verifique o número e tente novamente.');
            cpfInput.focus(); // Coloca o cursor no campo CPF para correção
            
            // Opcional: Adicionar uma classe para estilização (ex: borda vermelha)
            cpfInput.classList.add('invalid');
        } else {
            // Se o CPF for válido:
            // Opcional: Remover a classe de erro, caso exista
            cpfInput.classList.remove('invalid');
            // O formulário será enviado normalmente
            alert('✅ CPF Válido! Enviando formulário...');
        }
    });
    
    // Opcional: Adicionar máscara básica de formatação (apenas para UX, não para validação)
    cpfInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        
        // Aplica a máscara: 999.999.999-99
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        
        e.target.value = value;
    });
});