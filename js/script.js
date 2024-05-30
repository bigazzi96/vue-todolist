const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                { text: 'Comprare una nuova chitarra',
                 done: false },
                { text: 'Accordare la chitarra', 
                done: true },
                { text: 'Imparare a suonare gli accordi di base',
                 done: false },
                { text: 'Registrare una canzone',
                 done: true },
                { text: 'Studiare teoria musicale', 
                done: false },
                { text: 'Imparare una nuova canzone ogni settimana', 
                done: false }
            ]
        };
    }
}).mount('#app');
