"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = void 0;
const dispositivo_entity_1 = require("../dispositivo/dispositivo.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
const typeorm_1 = require("typeorm");
let Solicitud = class Solicitud {
};
exports.Solicitud = Solicitud;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Solicitud.prototype, "id_solicitud", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.solicitudes),
    (0, typeorm_1.JoinColumn)({ name: "id_usuario" }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Solicitud.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dispositivo_entity_1.Dispositivo, dispositivo => dispositivo.solicitudes),
    (0, typeorm_1.JoinColumn)({ name: "id_dispositivo" }),
    __metadata("design:type", dispositivo_entity_1.Dispositivo)
], Solicitud.prototype, "dispositivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Solicitud.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "informacion", void 0);
exports.Solicitud = Solicitud = __decorate([
    (0, typeorm_1.Entity)()
], Solicitud);
//# sourceMappingURL=solicitud.entity.js.map