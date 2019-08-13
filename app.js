const app = require('./config/server.js');
const porta = 3000;


app.listen(porta, () => {
    console.log(`Escutando no porta ${porta} teste`);
});
