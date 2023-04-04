var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { usersService } from "../services/usersService.js";
export function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, sucess, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.getUsers(dataToken)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (error_1.message)
                        return [2 /*return*/, res.status(error_1.status).send(error_1.message)];
                    return [2 /*return*/, res.send(error_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function toggleStatusAccount(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataUpdate, userId, dataToken, sucess, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataUpdate = req.body.active;
                    userId = req.body.userId;
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.toggleStatusAccount(dataUpdate, dataToken, userId)];
                case 2:
                    sucess = _a.sent();
                    return [2 /*return*/, res.send(sucess.active)];
                case 3:
                    error_2 = _a.sent();
                    if (error_2.message)
                        return [2 /*return*/, res.status(error_2.status).send(error_2.message)];
                    return [2 /*return*/, res.send(error_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function updateUserName(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newName, userId, dataToken, sucess, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newName = req.body.name;
                    userId = req.body.userId;
                    dataToken = req.datatoken;
                    console.log(newName, userId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.updateUserName(dataToken, userId, newName)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function updateUserPhone(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newPhone, userId, dataToken, sucess, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPhone = req.body.phone;
                    userId = req.body.userId;
                    dataToken = req.datatoken;
                    console.log(newPhone, userId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.updateUserPhone(dataToken, userId, newPhone)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.log(error_4);
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function updateUserCity(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newCity, userId, dataToken, sucess, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newCity = req.body.city;
                    userId = req.body.userId;
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.updateUserCity(dataToken, userId, newCity)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function updateUserAdress(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newAdress, userId, dataToken, sucess, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newAdress = req.body.adress;
                    userId = req.body.userId;
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.updateUserAdress(dataToken, userId, newAdress)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log(error_6);
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function updateUserPrice(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newPrice, userId, dataToken, sucess, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPrice = req.body.price;
                    userId = req.body.userId;
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.updateUserPrice(dataToken, userId, newPrice)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.log(error_7);
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, dataToken, sucess, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.params.id;
                    dataToken = req.datatoken;
                    console.log(userId, dataToken);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, usersService.deleteUser(dataToken, Number(userId))];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.log(error_8);
                    res.send(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
