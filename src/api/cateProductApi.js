import http from "./axiosHttp";

const getAll = () => {
    return http.get("/cateProducts");
};

const get = id => {
    return http.get(`/cateProducts/${id}`);
};

const create = data => {
    return http.post("/cateProducts", data);
};

const update = (id, data) => {
    return http.put(`/cateProducts/${id}`, data);
};

const remove = id => {
    return http.delete(`/cateProducts/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};