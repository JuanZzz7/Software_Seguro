class Controlador{
    construct(){
    }
    consultar (req,res){
        try {
            let arreglo=[];
            let myObj = {dni:"1234", nombre:"Juan", apellido:"Peña", email:"juanp@ejemplo.com"};
            let myObj2 = {dni:"5678", nombre:"Pedro", apellido:"Pérez", email:"pedroperez@ejemplo.com"};

            arreglo.push(myObj);
            arreglo.push(myObj2);

            let myJSON = JSON.stringify(arreglo);

            res.status(200).send (JSON);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    ingresar (req,res){
        try {
            const {dni,nombre,apellido,email} = req.body;
            console.log ("Documento de identidad: " + dni);
            console.log ("Nombres con apellidos: " + nombre + " " + apellido);
            console.log ("Correo electrónico: " + email);
            res.status(200).send ("Funciono ok");
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
}
