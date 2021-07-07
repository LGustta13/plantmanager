/**
 * Configurações para consumir uma API
 * Usar endereço de ip da minha máquina para n ter problemas de usar a API no device
 * 192.168.0.1
 * 192.168.0.106
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.106:3333',
});

export default api;