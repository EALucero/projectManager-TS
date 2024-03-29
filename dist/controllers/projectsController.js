"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collaboratorRemove = exports.collaboratorAdd = exports.projectRemove = exports.projectUpdate = exports.projectDetail = exports.projectStore = exports.projectsList = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const Project_1 = __importDefault(require("../models/Project"));
const helpers_1 = require("../helpers");
const mongoose_1 = require("mongoose");
const User_1 = __importDefault(require("../models/User"));
const projectsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.user);
        const projects = yield Project_1.default.find().where("createdBy").equals(req.user);
        return res.status(200).json({
            ok: true,
            msg: "Lista de Proyectos",
            projects,
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "PROJECT-LIST");
    }
});
exports.projectsList = projectsList;
const projectStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, client } = req.body;
        if ([name, description, client].includes("") ||
            !name ||
            !description ||
            !client)
            throw (0, http_errors_1.default)(400, "El nombre, la descripción y el cliente son datos obligatorios");
        if (!req.user)
            throw (0, http_errors_1.default)(401, "Error de autenticación!!");
        const project = new Project_1.default(req.body);
        project.createdBy = req.user._id;
        const projectStore = yield project.save();
        return res.status(201).json({
            ok: true,
            msg: "Proyecto guardado con éxito",
            project: projectStore,
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "PROJECT-CREATE");
    }
});
exports.projectStore = projectStore;
const projectDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { id } = req.params;
        if (!mongoose_1.Types.ObjectId.isValid(id))
            throw (0, http_errors_1.default)(400, "No es un ID válido");
        const project = yield Project_1.default.findById(id).populate({
            path: "tasks",
            select: "name description dateExpire priority state",
            populate: {
                path: "assigned",
                select: "name",
            },
        });
        if (!project) {
            throw (0, http_errors_1.default)(404, "Proyecto no encontrado");
        }
        if (((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id) &&
            ((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b._id.toString()) !== ((_c = project === null || project === void 0 ? void 0 : project.createdBy) === null || _c === void 0 ? void 0 : _c.toString()))
            throw (0, http_errors_1.default)(401, "No tenés la autorización para ver este proyecto");
        return res.status(200).json({
            ok: true,
            msg: "Detalle del Proyecto",
            project,
        });
    }
    catch (error) {
        console.log(error);
        (0, helpers_1.errorResponse)(res, error, "PROJECT-DETAIL");
    }
});
exports.projectDetail = projectDetail;
const projectUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    try {
        const { id } = req.params;
        if (!mongoose_1.Types.ObjectId.isValid(id))
            throw (0, http_errors_1.default)(400, "No es un ID válido");
        const project = yield Project_1.default.findById(id);
        if (!project)
            throw (0, http_errors_1.default)(404, "Proyecto no encontrado");
        if (((_d = req === null || req === void 0 ? void 0 : req.user) === null || _d === void 0 ? void 0 : _d._id) &&
            ((_e = req === null || req === void 0 ? void 0 : req.user) === null || _e === void 0 ? void 0 : _e._id.toString()) !== ((_f = project === null || project === void 0 ? void 0 : project.createdBy) === null || _f === void 0 ? void 0 : _f.toString()))
            throw (0, http_errors_1.default)(401, "No tenés la autorización para ver este proyecto");
        const { name, description, client, dateExpire } = req.body;
        project.name = name || project.name;
        project.description = description || project.description;
        project.dateExpire = dateExpire || project.dateExpire;
        project.client = client || project.client;
        const projectUpdate = yield project.save();
        return res.status(201).json({
            ok: true,
            msg: "Proyecto actualizado correctamente",
            project: projectUpdate,
        });
    }
    catch (error) {
        console.log(error);
        (0, helpers_1.errorResponse)(res, error, "PROJECT-UPDATE");
    }
});
exports.projectUpdate = projectUpdate;
const projectRemove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j;
    try {
        const { id } = req.params;
        if (!mongoose_1.Types.ObjectId.isValid(id))
            throw (0, http_errors_1.default)(400, "No es un ID válido");
        const project = yield Project_1.default.findById(id);
        if (!project)
            throw (0, http_errors_1.default)(404, "Proyecto no encontrado");
        if (((_g = req === null || req === void 0 ? void 0 : req.user) === null || _g === void 0 ? void 0 : _g._id) &&
            ((_h = req === null || req === void 0 ? void 0 : req.user) === null || _h === void 0 ? void 0 : _h._id.toString()) !== ((_j = project === null || project === void 0 ? void 0 : project.createdBy) === null || _j === void 0 ? void 0 : _j.toString()))
            throw (0, http_errors_1.default)(401, "No tenés la autorización para ver este proyecto");
        yield project.deleteOne();
        return res.status(200).json({
            ok: true,
            msg: "Proyecto eliminado con éxito",
        });
    }
    catch (error) {
        console.log(error);
        (0, helpers_1.errorResponse)(res, error, "PROJECT-REMOVE");
    }
});
exports.projectRemove = projectRemove;
const collaboratorAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k, _l, _m;
    try {
        const { id } = req.params;
        if (!mongoose_1.Types.ObjectId.isValid(id))
            throw (0, http_errors_1.default)(400, "No es un ID válido");
        const project = yield Project_1.default.findById(id);
        if (!project)
            throw (0, http_errors_1.default)(404, "Proyecto no encontrado");
        if (((_k = req === null || req === void 0 ? void 0 : req.user) === null || _k === void 0 ? void 0 : _k._id) &&
            ((_l = req === null || req === void 0 ? void 0 : req.user) === null || _l === void 0 ? void 0 : _l._id.toString()) !== ((_m = project === null || project === void 0 ? void 0 : project.createdBy) === null || _m === void 0 ? void 0 : _m.toString()))
            throw (0, http_errors_1.default)(401, "No tenés la autorización para ver este proyecto");
        const { email } = req.body;
        const user = yield User_1.default.findOne({ email }).select("-checked -createdAt -password -token -updatedAt -__v ");
        if (!user)
            throw (0, http_errors_1.default)(404, "Usuario no encontrado");
        if (project.createdBy.toString() === user._id.toString())
            throw (0, http_errors_1.default)(400, "El Creador del Proyecto no puede ser colaborador");
        if (project.collaborators.includes(user._id))
            throw (0, http_errors_1.default)(400, "El Usuario ya pertenece al Proyecto");
        project.collaborators.push(user._id);
        yield project.save();
        return res.status(200).json({
            ok: true,
            msg: "Colaborador agregado",
            collaborator: user,
            project,
        });
    }
    catch (error) {
        console.log(error);
        (0, helpers_1.errorResponse)(res, error, "ADD-COLLABORATOR");
    }
});
exports.collaboratorAdd = collaboratorAdd;
const collaboratorRemove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: "Colaborador eliminado",
        });
    }
    catch (error) {
        console.log(error);
        (0, helpers_1.errorResponse)(res, error, "REMOVE-COLABORATOR");
    }
});
exports.collaboratorRemove = collaboratorRemove;
