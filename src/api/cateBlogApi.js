import http from "./axiosHttp";

const getAll = () => {
    return http.get("/cateBlogs");
};

const get = id => {
    return http.get(`/cateBlogs/${id}`);
};

const create = data => {
    return http.post("/cateBlogs", data);
};

const update = (id, data) => {
    return http.put(`/cateBlogs/${id}`, data);
};

const remove = id => {
    return http.delete(`/cateBlogs/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};