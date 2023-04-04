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
import { screenService } from "../services/screensService.js";
export function CreateScreen(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, screen_name, screen_type, sucess, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    screen_name = req.body.screen_name;
                    screen_type = req.body.screen_type;
                    console.log(screen_name, dataToken.id, screen_type);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, screenService.CreateScreen(screen_name, dataToken.id, screen_type)];
                case 2:
                    sucess = _a.sent();
                    console.log(sucess);
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.sendStatus(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function GetScreens(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, sucess, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, screenService.GetScreens(dataToken.id)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.send(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function GetScreen(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var screenId, numberScreenId, sucess, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    screenId = req.params.id;
                    numberScreenId = Number(screenId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, screenService.GetScreen(numberScreenId)];
                case 2:
                    sucess = _a.sent();
                    console.log(sucess);
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.sendStatus(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function UpdateScreen(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var screenId, numberScreenId, content, sucess, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    screenId = req.params.id;
                    numberScreenId = Number(screenId);
                    content = req.body.screen;
                    console.log(screenId, content);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, screenService.UpdateScreen(numberScreenId, content)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.sendStatus(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function DeleteScreen(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var screenId, numberScreenId, sucess, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    screenId = req.params.id;
                    numberScreenId = Number(screenId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, screenService.DeleteScreen(numberScreenId)];
                case 2:
                    sucess = _a.sent();
                    console.log(sucess);
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.sendStatus(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
