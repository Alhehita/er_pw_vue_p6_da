import axios from "axios";

const guardar = async(body)=>{
    const data = axios.post(`http://localhost:8082/API/v1.0/Matricula/materias`, body).then(r=>r.data);
    return data;

};
const actualizar = async(body, codigo)=>{
    const data = axios.put(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`, body).then(r=>r.data);
    return data;

};
const eliminar = async(id)=>{
    const data = axios.delete(`http://localhost:8082/API/v1.0/Matricula/materias/${id}`).then(r=>r.data);
    return data;

};
const buscarPorCodigo = async(codigo)=>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/materias/${codigo}`).then(r=>r.data);
    return data;

};
const buscarTodos = async()=>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/materias`).then(r=>r.data);
    return data;

};

//metodos fachada

export const guardarFachada = async(body) =>{
    return await guardar(body);
};

export const actualizarFachada = async(body,codigo) =>{
    return await actualizar(body,codigo);
};

export const eliminarFachada = async(id) =>{
    return await eliminar(id);
};

export const buscarPorCodigoFachada = async(codigo) =>{
    return await buscarPorCodigo(codigo);
};

export const buscarTodosFachada = async() =>{
    return await buscarTodos();
};