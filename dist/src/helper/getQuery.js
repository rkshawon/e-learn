"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queries = ["sortOrder", "sortBy", "limit", "page", "select"];
const getQuery = (query) => {
    for (const [key, val] of Object.entries(query)) {
        if (queries.includes(key)) {
            delete query[key];
        }
    }
    return query;
};
exports.default = getQuery;
