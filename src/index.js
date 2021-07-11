const exptress=require('express');
const app= exptress();
const path=require('path');

app.use(exptress.static(path.join(__dirname,'public')));
app.set('port',3000);

app.listen  (app.get('port'), ()=>{
    console.log('esta corriendo...');

});
